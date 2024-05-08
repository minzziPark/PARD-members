import axios from "axios";

const server = process.env.REACT_APP_API_URL;

export const getMembersAPI = async (part) => {
  try {
    const response = await axios.get(`${server}${part}`);
    return response;
  } catch (err) {
    console.error(err);
  }
};

export const getMemberAPI = async (id) => {
  try {
    const response = await axios.get(`
      ${server}${id}`);
    return response;
  } catch (err) {
    console.error(err);
  }
};

export const postMemberAPI = async (data) => {
  try {
    const response = await axios.post(`${server}`, data);
    return response;
  } catch (err) {
    console.error(err);
  }
};

export const deleteMemberAPI = async (id) => {
  try {
    const response = await axios.delete(`${server}${id}`);
    return response;
  } catch (err) {
    console.error(err);
  }
};
