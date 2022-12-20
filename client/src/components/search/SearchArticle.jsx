import "./search.css";
import { Link } from "react-router-dom";
// import { getMultipleFiles } from "../../data/api";

import "../post/postform.css";
import "../post/textform.css";
import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Grid,
} from "@mui/material";
function SearchArticle() {
  const [multipleFiles, setMultipleFiles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // const getMultipleFilesList = async () => {
  //   try {
  //     const fileslist = await getMultipleFiles();
  //     setMultipleFiles(fileslist);
  //     console.log(multipleFiles);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const getAlldata = async () => {
    const reqdata = await fetch(
      // `https://desolate-hollows-16342.herokuapp.com/api/postcate/${category}`
      // `http://localhost:8080/api/postcate/${category}`
      `http://178.128.56.127/api/post`
    );
    const res = await reqdata.json(); // JSON.parse(json);
    //   console.log("res data is ", res);
    return res;
  };
  useEffect(() => {
    getAlldata().then((data) => {
      setMultipleFiles(data);
    });
  }, []);

  // const findOneByimage = function (image, done) {
  //   file.findOne({ files: { $all: [image] } }, (error, result) => {
  //     if (error) {
  //       console.log(error)
  //     } else {
  //       done(null, result)
  //     }
  //   })
  // };

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
          {multipleFiles
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
              <Box width="95%" height="300px" key={element._id}>
                <Card className="carddesign">
                  <CardMedia
                    className="cardImg"
                    component="img"
                    image={element.files[0].filePath}
                  />
                  <CardContent className="cardInfo" component="div">
                    <Typography
                      gutterBottom
                      variant="h5"
                      sx={{
                        fontSize: {
                          xs: "0.9rem",
                          sm: "1rem",
                          md: "1.2rem",
                          lg: "1.3rem",
                        },
                      }}
                      component="div"
                    >
                      {element.title.substring(0, 40)}...
                    </Typography>
                    <Typography
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
                    </Typography>
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
