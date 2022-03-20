import axios from "axios";

const url = "https://hospital30.herokuapp.com/";

const apiUrl = {
  getDepartment: "departments/getDepartment",
  postDepartment: "departments/postDepartment",
  singleDepartment: "departments/singleDepartment",
  upddateDepartment: "departments/updateDepartment",
  deleteDepartment: "departments/deleteDepartment",
};

export const getDepartmentsApi = async (data) => {
  try {
    const res = await axios.get(url + apiUrl.getDepartment);
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
    const res = await axios.post(url + apiUrl.singleDepartment, data);
    return res.data;
  } catch (err) {
    console.error({ err });
  }
};
export const deleteDepartmentApi = async (data) => {
  try {
    const res = await axios.post(url + apiUrl.singleDepartment, data);
    return res.data;
  } catch (err) {
    console.error({ err });
  }
};
