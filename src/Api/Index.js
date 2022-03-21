import axios from "axios";

const url = "https://hospital30.herokuapp.com/";
const Lurl = "http://localhost:5001/";

const apiUrl = {
  getDepartment: "departments/getDepartment?page=",
  postDepartment: "departments/postDepartment",
  singleDepartment: "departments/singleDepartment",
  upddateDepartment: "departments/updateDepartment",
  deleteDepartment: "departments/deleteDepartment",
  postUser: "user/postUser",
  getUser: "user/getUser",
  postCart: "cart/postCart",
  getCart: "cart/getCart?page=",
  allCart: "cart/allCart?page=",
  deleteCart: "cart/deleteCart",
  getReview: "review/getReview",
  postReview: "review/addReview",
  deleteReview: "review/deleteReview",
  updateReview: "review/updateReview",
};

export const updateReview = async (body) => {
  try {
    const res = await axios.post(url + apiUrl.updateReview, body);
    return res.data;
  } catch (err) {
    console.error({ err });
  }
};

export const postReviewApi = async (body) => {
  try {
    const res = await axios.post(url + apiUrl.postReview, body);
    return res.data;
  } catch (err) {
    console.error({ err });
  }
};
export const deleteReviewApi = async (body) => {
  try {
    const res = await axios.post(url + apiUrl.deleteReview, body);
    return res.data;
  } catch (err) {
    console.error({ err });
  }
};

export const getReviewApi = async () => {
  try {
    const res = await axios.get(url + apiUrl.getReview);
    return res.data;
  } catch (err) {
    console.error({ err });
  }
};
export const AllCartApi = async (pageNo, size) => {
  const cartUrl = `${url}${apiUrl.allCart}${pageNo}&&size=${size}`;
  try {
    const res = await axios.post(cartUrl);
    return res.data;
  } catch (err) {
    console.error({ err });
  }
};

export const postCartApi = async (body) => {
  try {
    const res = await axios.post(url + apiUrl.postCart, body);
    return res.data;
  } catch (err) {
    console.error({ err });
  }
};

export const getCartApi = async (mail, pageNo, size) => {
  const cartUrl = `${url}${apiUrl.getCart}${pageNo}&&size=${size}`;
  try {
    const res = await axios.post(cartUrl, mail);
    return res.data;
  } catch (err) {
    console.error({ err });
  }
};

export const deleteCartApi = async (body) => {
  try {
    const res = await axios.post(url + apiUrl.deleteCart, body);
    return res.data;
  } catch (err) {
    console.error({ err });
  }
};
export const postUserApi = async (body) => {
  try {
    const res = await axios.post(url + apiUrl.postUser, body);
    return res.data;
  } catch (err) {
    console.error({ err });
  }
};
export const getUserApi = async (body) => {
  try {
    const res = await axios.post(url + apiUrl.getUser, body);
    return res.data;
  } catch (err) {
    console.error({ err });
  }
};

export const getDepartmentsApi = async (pageNo, size) => {
  const getUrl = `${url}${apiUrl.getDepartment}${pageNo}&&size=${size}`;
  try {
    const res = await axios.get(getUrl);
    return res.data;
  } catch (err) {
    console.error({ err });
  }
};
export const postDepartmentsApi = async (data) => {
  try {
    const res = await axios.post(url + apiUrl.postDepartment, data);
    return res.data;
  } catch (err) {
    console.error({ err });
  }
};
export const SingleDepartmentApi = async (data) => {
  try {
    const res = await axios.post(url + apiUrl.singleDepartment, data);
    return res.data;
  } catch (err) {
    console.error({ err });
  }
};
export const updateDepartmentApi = async (data) => {
  try {
    const res = await axios.post(url + apiUrl.upddateDepartment, data);
    return res.data;
  } catch (err) {
    console.error({ err });
  }
};
export const deleteDepartmentApi = async (data) => {
  try {
    const res = await axios.post(url + apiUrl.deleteDepartment, data);
    return res.data;
  } catch (err) {
    console.error({ err });
  }
};
