import React, { useState, useEffect, memo } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./categories.css";

// import required modules
import { Pagination, Navigation, A11y } from "swiper";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Spinner from "../login/Spinner";

export default memo(function CategoryCount() {
  const [categories, setCategories] = useState("");
  const { posts } = useSelector((state) => state.posts);

  const images = [
    {
      id: "Entertainment",
      cateimage: "./images/categoryimages/entertainment.jpg",
    },
    {
      id: "Technology",
      cateimage: "./images/categoryimages/technology.jpg",
    },
    {
      id: "Beauty",
      cateimage: "./images/categoryimages/beauty.jpg",
    },
    {
      id: "Government",
      cateimage: "./images/categoryimages/government.jpg",
    },
    {
      id: "Travel",
      cateimage: "./images/categoryimages/travel.jpg",
    },
    {
      id: "History",
      cateimage: "./images/categoryimages/history.jpg",
    },
    {
      id: "Health",
      cateimage: "./images/categoryimages/health.jpg",
    },
    {
      id: "Literature",
      cateimage: "./images/categoryimages/literature.jpg",
    },
    {
      id: "Lifestyles",
      cateimage: "./images/categoryimages/lifestyle.jpg",
    },
    {
      id: "Science",
      cateimage: "./images/categoryimages/science.jpg",
    },
    {
      id: "Sports",
      cateimage: "./images/categoryimages/sport.jpg",
    },
    {
      id: "Arts",
      cateimage: "./images/categoryimages/arts.jpg",
    },
    {
      id: "Education",
      cateimage: "./images/categoryimages/education.jpg",
    },
    {
      id: "Business",
      cateimage: "./images/categoryimages/business.jpeg",
    },
  ];

  const getAlldata = async () => {
    const reqdata = await fetch(`https://www.myanfobase.com/api/catecount`);
    // const reqdata = await fetch(`http://localhost:8080/api/catecount`);
    // const reqdata = await fetch(
    //   `https://desolate-hollows-16342.herokuapp.com/api/catecount`
    // );
    const res = await reqdata.json(); // JSON.parse(json);

    return res;
  };
  useEffect(() => {
    getAlldata().then((data) => {
      setCategories(data);
    });
  }, [posts]);

  return (
    <>
      <section className="categories container">
        <div className="categoriescolor">
          <div className="categories-header">
            <h2>Categories</h2>
            <span className="cate-para-line"></span>
          </div>
          <Swiper
            id="swiperdiv"
            spaceBetween={20}
            breakpoints={{
              600: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1000: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation, A11y]}
            className="cates-swiper"
          >
            {categories.length !== 0 ? (
              categories.map((cate, index) => {
                return (
                  <div key={index}>
                    {images.map((data, indexdata) => {
                      return (
                        <div key={indexdata}>
                          {data.id == cate._id ? (
                            <SwiperSlide
                              className="cate-swiper"
                              key={indexdata}
                            >
                              <div className="per-cate" key={indexdata}>
                                <div>
                                  <div key={indexdata} className="cate-image">
                                    <img src={data.cateimage} alt="" />
                                  </div>
                                </div>
                                <div className="swiperbody">
                                  <h3>{data.id}</h3>
                                  <h5>{cate.count} Articles</h5>

                                  <Link to={data.id}>
                                    <span>C</span>heck Here
                                  </Link>
                                </div>
                              </div>
                            </SwiperSlide>
                          ) : (
                            ""
                          )}
                        </div>
                      );
                    })}
                  </div>
                );
              })
            ) : (
              <div>
                <Spinner />
              </div>
            )}
          </Swiper>
        </div>
      </section>
    </>
  );
});

// return (
//   <SwiperSlide className="cate-swiper" key={index}>
//     <div className="per-cate" key={index}>
//       <div>
//         {/* {console.log("cate id", cate._id)} */}
//         {images.map((data, index) => {
//           if (data.id == cate._id)
//             return (
//               <div key={index} className="cate-image">
//                 <img src={data.cateimage} alt="" />
//               </div>
//             );
//         })}
//       </div>

//       <div className="swiperbody">
//         <h3>{cate._id}</h3>
//         <h5>{cate.count} Articles</h5>

//         <Link to={cate._id}>
//           <span>C</span>heck Here
//         </Link>
//       </div>
//     </div>
//   </SwiperSlide>
// );
