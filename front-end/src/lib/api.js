import axios from "axios";

const URL = `/api/recipe`

export const recipe = async () => {
  try {
    const data = await axios.get(`${URL}`);
    console.log(data);
    
    return data
} catch (e) {
    return null;
  }
};
