import axios from "axios";

// const API_URL = "https://desolate-hollows-16342.herokuapp.com/api/post/";
// const API_URL = "http://localhost:8080/api/post/";
const API_URL = "https://www.myanfobase.com/api/post/";
// const API_URL = "http://178.128.56.127/api/post/";

//Create new Post
const creatPosts = async (postData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL, postData, config);
  return response.data;
};

//Getting All Post
const getAllPosts = async () => {
  // const config = {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // };
  /*with checking login token */
  // const response = await axios.get(API_URL, config);
  /*without checking login token */
  const response = await axios.get(API_URL);
  return response.data;
};

//Delete user post
const deletePosts = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(API_URL + id, config);
  return response.data;
};

//Edit user post
const editPosts = async (postData, token) => {
  let id;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  if (postData.postAccept === true) {
    id = postData._id;
    const response = await axios.put(API_URL + `admin/${id}`, postData, config);

    return response.data;
  } else {
    const resultData = Object.fromEntries(postData.entries());
    id = resultData.id;
    const response = await axios.put(API_URL + id, postData, config);

    return response.data;
  }
};

//get detail post
const postDetailData = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL + id, config);

  return response.data;
};

const postService = {
  creatPosts,
  getAllPosts,
  deletePosts,
  editPosts,
  postDetailData,
};

export default postService;
