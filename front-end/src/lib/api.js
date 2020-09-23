import axios from "axios";

const URL = `/api`;

export const recipe = async () => {
  try {
    const data = await axios.get(`${URL}/recipe`);

    return data;
  } catch (e) {
    return null;
  }
};

export const info = async () => {
  try {
    const data = await axios.get(`${URL}/info`);

    return data;
  } catch (e) {
    return null;
  }
};

export const process = async () => {
  try {
    const data = await axios.get(`${URL}/process`);

    return data;
  } catch (e) {
    return null;
  }
};
