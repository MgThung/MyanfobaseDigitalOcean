import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import "./textform.css";
import "./dropdowncate.css";
import "./postform.css";
import CreatePost from "./CreatePost";

export default function Postform() {
  //checking user is Login account or not
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    // if (user === null || (user && !user._id)) {
    if (!user) {
      navigate("/login");
    }
  }, [user]);
  /* end of checking */
  // const [listofPost, setListofPost] = useState([]);

  // const getmultipleFilesList = async () => {
  //   try {
  //     const filelist = await getMultipleFiles();
  //     setListofPost(filelist);
  //     console.log("list of post is", listofPost);
  //   } catch (error) {
  //     // alert("Awww, it didn't work at getting data");
  //   }
  // };
  // useEffect(() => {
  //   getmultipleFilesList();
  // }, []);

  // const deletePost = (id) => {
  //   deletePosts(id)
  //     // Axios.delete(
  //     // `https://desolate-hollows-16342.herokuapp.com/delete/${id}`
  //     // `http://localhost:8080/delete/${id}`
  //     .then(() => {
  //       setListofPost(
  //         listofPost.filter((val) => {
  //           return val._id !== id;
  //         })
  //       );
  //     });
  // };

  return (
    <>
      <section className="postbg">
        <div className="container firstdesc">
          <h2 className="capitalize">
            Let's share our information to other people.
          </h2>
          <p>
            Here! You can share your experience, information, life-tips and
            other knowledge by posting.
          </p>
          <pre>
            Note: if you posted something, please wait a time for admin
            approvement!
          </pre>
        </div>
      </section>
      <div className="container formBody">
        <div>
          {/* <Testpost getMultipleFile={() => getmultipleFilesList()} /> */}
          {/* <Testpost /> */}
          <CreatePost />
          {/* <NewPost /> */}
        </div>

        {/* <div className="dataShow">
          {listofPost.map((val, index) => {
            return (
              <>
                <div className="Dataresult" key={val._id}>
                  <div className="textLeft">
                    <h5>title is "{val.title}"</h5>
                    <h5>description is " {val.description}"</h5>
                    <h5>Selected category is " {val.cateName}"</h5>
                    <h5>selected id is " {val.cateId}"</h5>

                    <Link to={`/update/${val._id}`}>
                      <button className="updatedata">update</button>
                    </Link>

                    <button
                      className="closedata"
                      onClick={() => {
                        deletePost(val._id);
                      }}
                    >
                      X
                    </button>
                  </div>
                  <div className="ImgareaDiv">
                    {val.files.map((file, index) => {
                      return (
                        <div className="Imgarea">
                          <div className="imgDiv1">
                            {console.log("file path is", file.filePath)}
                            <img
                              src={`http://localhost:8080/${file.filePath}`}
                              height="200"
                              alt={`${file.cateName}`}
                              // src={`https://desolate-hollows-16342.herokuapp.com/${file.filePath}`}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </>
            );
          })}
        </div> */}
      </div>
    </>
  );
}
