import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./educationleftright.css";
import Moment from "react-moment";
import { Box, Grid } from "@mui/material";
import Spinner from "../login/Spinner";
export default function EducationRight(props) {
  const getCateData = props.getData;
  const category = "Education";
  Moment.globalFormat = "DD MMM YYYY";

  return (
    <Box>
      <div>
        <Grid container direction="row" spacing={2}>
          {getCateData.length !== 0 ? (
            getCateData.slice(4, 6).map((data, index) => {
              return (
                <Grid item lg={12} md={12} xs={12} key={index}>
                  <div className="wrapper">
                    <div className="wrapperimg">
                      <img
                        src={data.files[0].filePath}
                        // src={`https://desolate-hollows-16342.herokuapp.com/${data.files[0].filePath}`}
                        // src={`http://localhost:8080/${data.files[0].filePath}`}
                        alt=""
                      />
                    </div>
                    <div className="wrapperinfo">
                      <Link
                        to={`/${category}/${data._id}`}
                        className={`colorBlack ${category}hover`}
                      >
                        <h4>{data.title.substring(0, 30)}...</h4>
                      </Link>
                      <Link to={`/${category}`} className="link1">
                        <button className={`cateEducation cate${category}`}>
                          {category}
                        </button>
                      </Link>

                      <h5>
                        <Moment format="DD/MMM/YYYY">{data.createdAt}</Moment>
                      </h5>
                    </div>
                  </div>
                </Grid>
              );
            })
          ) : (
            <div className="wrapper">
              {/* <h4>Loading...!</h4> */}
              <Spinner />
            </div>
          )}
        </Grid>
      </div>
    </Box>
  );
}
