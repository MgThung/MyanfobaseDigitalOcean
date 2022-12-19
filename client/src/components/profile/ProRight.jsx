import Paginate from "../catepagerightbar/Paginate";
import { Stack, Button } from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "../travelling/travside.css";
import "../../App.css";
import Moment from "react-moment";
import Spinner from "../login/Spinner";
import { Grid } from "@mui/material";
import ReactReadMoreReadLess from "react-read-more-read-less";
import {
  deletePost,
  editPost,
  getPosts,
  reset,
} from "../../features/posts/postSlice";
import Dialog from "./Dialog";


function ProRight() {
  const [product, setProducts] = useState(false);
  const [dialog, setDialog] = useState({
    message: "",
    isLoading: false,
    Postname: "",
  })
  const navigate = useNavigate();
  const dispatch = useDispatch();
  Moment.globalFormat = "D MMM YYYY";
  const { user } = useSelector((state) => state.auth);

  const { posts, isLoading, isError, message } = useSelector(
    (state) => state.posts
  );
  console.log("admin posts", user);
  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    if (!user) {
      navigate("/login");
    }
    dispatch(getPosts());
  }, [user._id, navigate, isError, message, dispatch]);


    const idProductRef = useRef();
    const handleDialog = (message, isLoading, Postname) => {
      setDialog({
        message,
        isLoading,
        Postname,
      });
    };
    const handleDelete = (_id) => {
      console.log("id from delete", _id);
      const index = posts.findIndex((element) => element._id === _id);
      console.log("index data ", index);
      handleDialog("Are you sure want to delete", true, posts[index].title);
      idProductRef.current = _id;
    };
    console.log("dialog is", dialog);
    const areUSureDelete = (choose) => {
      if (choose) {
        // setProducts(
        //   posts.filter((element) => element._id !== idProductRef.current)
        // );
        dispatch(deletePost(idProductRef.current)).then(() =>
          handleDialog("", false)
        );
      } else {
        handleDialog("", false);
      }
    };

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      <div key={user._id}>
        <div className="lastnewbar-title">
          <h2 className="capitalize">My Posts</h2>
          <span className="lasttitleline Post-line"></span>
        </div>
        <div className="sidebar">
          <div className="Profile-main">
            {posts.length > 0 ? (
              posts.map((element) =>
                element.user === user._id ? (
                  <div key={element._id}>
                    <Grid
                      my={2}
                      container
                      sx={{
                        margin: "auto",
                        boxShadow: "rgb(177 195 209) -2px 2px 8px 5px",
                        borderRadius: "5px",
                        gap: { sm: "1rem", md: "1.2rem", lg: "1.3rem" },
                      }}
                    >
                      <Grid item xs={12} sm={4}>
                        <div className="Profile_img">
                          <img
                            src={`${element.files[0].filePath}`}
                            // src={`https://desolate-hollows-16342.herokuapp.com/${element.files[0].filePath}`}
                            // src={`http://localhost:8080/${element.files[0].filePath}`}
                          />
                          <Link to={`/${element.cateName}`} className="link1">
                            <button
                              className={`profilecate cate${element.cateName}`}
                            >
                              {element.cateName}
                            </button>
                          </Link>
                        </div>
                      </Grid>
                      <Grid item xs={12} sm={7.6}>
                        <div className="postProfile_info">
                          <Link
                            to={`/${element.cateName}/${element._id}`}
                            className={`colorBlack ${element.cateName}hover`}
                          >
                            <h4>{element.title.substring(0, 50)}...</h4>
                          </Link>
                          <p>
                            {/* <ReactReadMoreReadLess
                            readMoreClassName="readMoreClassName"
                            charLimit={120}
                            readMoreText="...Read More"
                            readLessText="...Read Less"
                          > */}
                            {element.description.substring(0, 110)}...
                            {/* </ReactReadMoreReadLess> */}
                          </p>
                          <div className="proFilebottom">
                            <div className="Profilepostman">
                              <div className="userProfile ">
                                {user.profilePicture === [] ||
                                user.profilePicture[0] === "" ||
                                user.profilePicture.length === 0 ? (
                                  <img
                                    src="./images/userprofile/defaultuserprofile.png"
                                    alt=""
                                  />
                                ) : (
                                  <img
                                    src={user.profilePicture[0].filePath}
                                    // src={`https://desolate-hollows-16342.herokuapp.com/${user.profilePicture[0].filePath}`}
                                    // src={`http://localhost:8080/${user.profilePicture[0].filePath}`}
                                    alt=""
                                  />
                                )}
                              </div>
                              <span className="profileName">
                                {element.username}
                              </span>
                              <span className="profileDate">
                                <Moment format="DD/MMM/YYYY">
                                  {element.createdAt}
                                </Moment>
                              </span>
                            </div>
                            <div className="Probuttom">
                              {element.postAccept !== true ? (
                                <div className="posticon1">
                                  <div className="pendingTxt">
                                    <span>Pending Approve</span>
                                  </div>
                                </div>
                              ) : (
                                ""
                              )}

                              <div className="posticon1">
                                <div className="tooltip1 topdel">Delete</div>
                                <button
                                  // onClick={() =>
                                  //   dispatch(deletePost(element._id))
                                  // }
                                  onClick={() => handleDelete(element._id)}
                                  className="DeleteP "
                                >
                                  <i className=" uil uil-trash-alt"></i>
                                </button>
                                {dialog.isLoading && (
                                  <Dialog
                                    Postname={dialog.Postname}
                                    onDialog={areUSureDelete}
                                    message={dialog.message}
                                  />
                                )}
                              </div>

                              <div className="posticon1">
                                <Link to={`/update/${element._id}`}>
                                  <div className="tooltip1 topdel">Edit</div>
                                  <button className="EditPost">
                                    <i className=" uil uil-edit"></i>
                                  </button>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Grid>
                    </Grid>

                    {/* <Paginate /> */}
                  </div>
                ) : (
                  " "
                )
              )
            ) : (
              <h3>You have not set any post</h3>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProRight;
