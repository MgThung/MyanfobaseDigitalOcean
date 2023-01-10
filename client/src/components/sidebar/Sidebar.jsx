import { Pagination, Grid } from "@mui/material";

import { Link, useNavigate, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Moment from "react-moment";
import "./sidebar.css";
import "../../App.css";
// import Spinner from "../login/Spinner";
import { themeContext } from "../../Context";
import { useContext } from "react";

export default function Sidebar(props) {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [currentPage, setcurrentPage] = useState(1);
  const [itemPerPage, setitemPerPage] = useState(8);
  const [getCateData, setCateData] = useState([]);

  const category = props.category;
  Moment.globalFormat = "DD MMM YYYY";

  const pages = [];
  for (let i = 1; i <= Math.ceil(getCateData.length / itemPerPage); i++) {
    pages.push(i);
  }
  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItems = getCateData.slice(indexOfFirstItem, indexOfLastItem);
  const renderPageNumbers = pages.map((number) => {
    return (
      <div key={number} id={number}>
        {number}
      </div>
    );
  });

  const getAlldata = async () => {
    const reqdata = await fetch(
      // `https://desolate-hollows-16342.herokuapp.com/api/postcate/${category}`
      // `http://localhost:8080/api/postcate/${category}`
      `https://www.myanfobase.com/api/postcate/${category}`
    );
    const res = await reqdata.json(); // JSON.parse(json);

    return res;
  };
  useEffect(() => {
    getAlldata().then((data) => {
      setCateData(data);
    });
  }, [category]);

  // const handleChange = (event) => {
  //   setFavlist(event.target.checked);
  // };

  return (
    <>
      {currentItems.length > 0 ? (
        <>
          <div className="sidebar">
            <div className="Trav-main">
              {currentItems.map((data, index) => {
                if (data.postAccept === true && data.cateName === category) {
                  return (
                    <div key={index}>
                      {/* <div
                        id={darkMode ? "sidebar-white" : "sidebar-black"}
                        className="postTrav"
                      >
                        <h4 className="colorh4">
                          {data.title.substring(0, 80)}...
                        </h4>
                      </Link>
                      <p>{data.description.substring(0, 100)}...</p>
                      <div className="postbuttom">
                        <div className="postman">
                          <div className="postmanProfile">
                            {data.userprofile === "" ||
                            data.userprofile[0] === "" ||
                            data.userprofile.length === 0 ? (
                              <img
                                src="./images/userprofile/defaultuserprofile.png"
                                alt=""
                              />
                            ) : (
                              <img
                                src={`http://localhost:8080/${data.userprofile}`}
                                alt=""
                              />
                            )}
                          </div>
                          <span className="profileName">{data.username}</span>
                          <h5 className="profileDate">
                            <Moment format="DD/MMM/YYYY">
                              {data.createdAt}
                            </Moment>
                          </h5>
                        </div>
                        <div className="postTrav_info">
                          <Link
                            to={`/${category}/${data._id}`}
                            id={`${category}hover`}
                          >
                            <h4 className="colorh4">
                              {data.title.substring(0, 80)}...
                            </h4>
                          </Link>
                          <p>{data.description.substring(0, 100)}...</p>
                          <div className="postbuttom">
                            <div className="postman">
                              <div className="postmanProfile">
                                {data.userprofile === "" ||
                                data.userprofile[0] === "" ||
                                data.userprofile.length === 0 ? (
                                  <img
                                    src="./images/userprofile/defaultuserprofile.png"
                                    alt=""
                                  />
                                ) : (
                                  <img
                                    src={`http://localhost:8080/${data.userprofile}`}
                                    alt=""
                                  />
                                )}
                              </div>
                              <span className="profileName">
                                {data.username}
                              </span>
                              <span className="profileDate">
                                <Moment format="DD/MMM/YYYY">
                                  {data.createdAt}
                                </Moment>
                              </span>
                            </div>
                            <span className="profileName">{data.username}</span>
                            <h5 className="profileDate">
                              <Moment format="DD/MMM/YYYY">
                                {data.createdAt}
                              </Moment>
                            </h5>
                          </div>
                          <div className="posticon">
                            {data && <SavePost getCateData={data} />}
                          </div>
                          <span className="profileName">{data.username}</span>
                          <h5 className="profileDate">
                            <Moment format="DD/MMM/YYYY">
                              {data.createdAt}
                            </Moment>
                          </h5>
                        </div>
                        <div className="posticon">
                          {/* {data && <SavePost getCateData={data} />} */}

                      <Grid
                        container
                        my={2}
                        sx={{
                          margin: "0 0 1rem 0",
                          width: "100%",
                          gap: "1rem",
                        }}
                        id={darkMode ? "sidebar-white" : "sidebar-black"}
                      >
                        <Grid item xs={12} sm={3} md={3} xl={3}>
                          <div className="Trav_img">
                            <img
                              src={data.files[0].filePath}
                              // src={`http://localhost:8080/${data.files[0].filePath}`}
                            />
                            <Link to={`/${data.cateName}`} className="link1">
                              <button
                                className={`Travel1 cate${data.cateName}`}
                              >
                                {data.cateName}
                              </button>
                            </Link>
                          </div>
                        </Grid>
                        <Grid item xs={12} sm={8.6} xl={8.6} md={8.6}>
                          <div className="postTrav_info">
                            <Link
                              to={`/${category}/${data._id}`}
                              id={`${category}hover`}
                            >
                              <h4 className="colorh4">
                                {data.title.substring(0, 80)}...
                              </h4>
                            </Link>
                            <p>{data.description.substring(0, 100)}...</p>
                            <div className="postbuttom">
                              <div className="postman">
                                <div className="postmanProfile">
                                  {data.userprofile === "" ||
                                  data.userprofile[0] === "" ||
                                  data.userprofile.length === 0 ? (
                                    <img
                                      src="./images/userprofile/defaultuserprofile.png"
                                      alt=""
                                    />
                                  ) : (
                                    <img
                                      src={data.userprofile}
                                      // src={`http://localhost:8080/${data.userprofile}`}
                                      alt=""
                                    />
                                  )}
                                </div>
                                <span className="profileName">
                                  {data.username}
                                </span>
                                <span className="profileDate">
                                  <Moment format="DD/MMM/YYYY">
                                    {data.createdAt}
                                  </Moment>
                                </span>
                              </div>
                              <div className="posticon">
                                {/* {data && <SavePost getCateData={data} />} */}
                              </div>
                            </div>
                          </div>
                        </Grid>
                      </Grid>
                    </div>
                  );
                }
              })}

              {/* <Paginate /> */}
              <Pagination
                count={renderPageNumbers.length}
                onChange={(event, value) => setcurrentPage(value)}
                color="primary"
                variant="outlined"
              ></Pagination>
            </div>
          </div>
        </>
      ) : (
        <div className="sidebar">
          <h4>No Data is Here !!!</h4>
        </div>
      )}
    </>
  );
}
