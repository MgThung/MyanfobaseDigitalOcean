import React, { useState, useEffect } from "react";
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

export default function CategoryCount() {
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
                  <SwiperSlide className="cate-swiper">
                    <div className="per-cate">
                      <div className="cate-image">
                        {/* {console.log("cate id", cate._id)} */}
                        {images.map((data, index) => {
                          if (data.id == cate._id)
                            return <img src={data.cateimage} alt="" />;
                        })}
                      </div>

                      <div className="swiperbody">
                        <h3>{cate._id}</h3>
                        <h5>{cate.count} Articles</h5>

                        <Link to={cate._id}>
                          <span>C</span>heck Here
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })
            ) : (
              <div>
                <h4>Loading....</h4>
              </div>
            )}
          </Swiper>
        </div>
      </section>
    </>
  );
}
