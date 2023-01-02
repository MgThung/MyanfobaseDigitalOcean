import "./search.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import "../post/postform.css";
import "../post/textform.css";
import React, { useState, useEffect } from "react";
import { getPosts } from "../../features/posts/postSlice";
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Grid,
} from "@mui/material";
function SearchArticle() {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const { posts, isLoading, isError, message } = useSelector(
    (state) => state.posts
  );
  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    dispatch(getPosts());
  }, []);

  return (
    <>
      <div className="searchpage container">
        <input
          type="text"
          placeholder=""
          id="searchinputpage"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
        <Link to="./search" className="searchbutton">
          <i className="uil uil-search"></i>
        </Link>

        <div className="vartdiv">
          <span className="varticalline"></span>
        </div>
        <div className="textinsearchdiv">
          <p className="textinsearch">Search</p>
        </div>
      </div>
      <div className="container-fluid">
        <div className="searchbox container ">
          {posts &&
            posts
              .filter((val) => {
                if (searchTerm === "") {
                  return val;
                } else if (
                  val.title.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((element, index) => (
                <Box width="95%" className="cardbox" key={element._id}>
                  <Card className="carddesign">
                    <CardMedia
                      className="cardImg"
                      component="img"
                      sx={{
                        heigh: {
                          xs: "9rem",
                          sm: "10rem",
                          md: "11rem",
                        },
                      }}
                      image={element.files[0].filePath}
                    />
                    <CardContent className="cardInfo" component="div">
                      <Typography
                        gutterBottom
                        variant="h5"
                        sx={{
                          fontSize: {
                            xs: "0.7rem",
                            sm: "0.8rem",
                            md: "1rem",
                            lg: "1.1rem",
                          },
                        }}
                        component="div"
                      >
                        {element.title.substring(0, 40)}...
                      </Typography>
                      {/* <Typography
                      variant="body2"
                      sx={{
                        fontSize: {
                          xs: "0.5rem",
                          sm: "0.6rem",
                          md: "0.7rem",
                          lg: "0.8rem",
                        },
                      }}
                    >
                      {element.description.substring(0, 40)}...
                    </Typography> */}
                    </CardContent>
                  </Card>
                </Box>
              ))}
        </div>
      </div>
    </>
  );
}

export default SearchArticle;

// export default function SearchArticle() {
//   return (

//     <section className="container">
//       <div className="searcharticle-maindiv">
//         <div className="search-article1">
//           <div className="search-buttonimg">
//             <div className="search-img1">
//               <img src="../images/homeimgs/tecmustread1.jpg" alt="" />
//             </div>
//             <Link
//               to="/technology"
//               className="search-article-button cateTechnology "
//             >
//               Technology
//             </Link>
//           </div>
//           <div className="search-article-para">
//             <h4>"Why Should I use the Apple products?"</h4>
//             <p>jul 11,2022</p>
//           </div>
//         </div>
//         <div className="search-article2">
//           <div className="search-buttonimg">
//             <div className="search-img2">
//               <img src="../images/homeimgs/tecmustread2.jpg" alt="" />
//             </div>
//             <Link
//               to="/beauty"
//               className="search-article-button cateBeauty "
//             >
//               Beauty
//             </Link>
//           </div>
//           <div className="search-article-para">
//             <h4>"Why Should I use the Apple products?"</h4>
//             <p>jul 11,2022</p>
//           </div>
//         </div>
//         <div className="search-article3">
//           <div className="search-buttonimg">
//             <div className="search-img3">
//               <img src="../images/homeimgs/tecmustread3.jpg" alt="" />
//             </div>
//             <Link
//               to="/beauty"
//               className="search-article-button cateTechnology "
//             >
//               Technology
//             </Link>
//           </div>
//           <div className="search-article-para">
//             <h4>"Why Should I use the Apple products?"</h4>
//             <p>jul 11,2022</p>
//           </div>
//         </div>
//         <div className="search-article4">
//           <div className="search-buttonimg">
//             <div className="search-img4">
//               <img src="../images/homeimgs/tecmustread4.jpg" alt="" />
//             </div>
//             <Link
//               to="/beauty"
//               className="search-article-button cateTechnology "
//             >
//               Technology
//             </Link>
//           </div>
//           <div className="search-article-para">
//             <h4>"Why Should I use the Apple products?"</h4>
//             <p>jul 11,2022</p>
//           </div>
//         </div>
//         <div className="search-article5">
//           <div className="search-buttonimg">
//             <div className="search-img5">
//               <img src="../images/technology/computer1.jpeg" alt="" />
//             </div>
//             <Link
//               to="/beauty"
//               className="search-article-button cateTechnology "
//             >
//               Technology
//             </Link>
//           </div>
//           <div className="search-article-para">
//             <h4>"Why Should I use the Apple products?"</h4>
//             <p>jul 11,2022</p>
//           </div>
//         </div>
//         <div className="search-article6">
//           <div className="search-buttonimg">
//             <div className="search-img6">
//               <img src="../images/technology/techcamera.jpg" alt="" />
//             </div>
//             <Link
//               to="/beauty"
//               className="search-article-button cateTechnology "
//             >
//               Technology
//             </Link>
//           </div>
//           <div className="search-article-para">
//             <h4>"Why Should I use the Apple products?"</h4>
//             <p>jul 11,2022</p>
//           </div>
//         </div>
//         <div className="search-article7">
//           <div className="search-buttonimg">
//             <div className="search-img7">
//               <img src="../images/technology/earphone.jpeg" alt="" />
//             </div>
//             <Link
//               to="/beauty"
//               className="search-article-button cateTechnology "
//             >
//               Technology
//             </Link>
//           </div>
//           <div className="search-article-para">
//             <h4>"Why Should I use the Apple products?"</h4>
//             <p>jul 11,2022</p>
//           </div>
//         </div>
//         <div className="search-article8">
//           <div className="search-buttonimg">
//             <div className="search-img8">
//               <img src="../images/technology/phone1.jpeg" alt="" />
//             </div>
//             <Link
//               to="/beauty"
//               className="search-article-button cateTechnology "
//             >
//               Technology
//             </Link>
//           </div>
//           <div className="search-article-para">
//             <h4>"Why Should I use the Apple products?"</h4>
//             <p>jul 11,2022</p>
//           </div>
//         </div>
//       </div>
//       <div className="searchpagenext">
//         <Paginate />
//       </div>
//     </section>
//   );
// }
