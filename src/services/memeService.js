import axios from "axios";
const key = process.env.REACT_APP_TENOR_API_KEY;

export const fetchMeme = async (memeQuerry) =>
  axios.get(`https://g.tenor.com/v1/search?q=${memeQuerry}&key=${key}&limit=1`);
