import axios from 'axios';
const baseURL = 'http://49ff5758ab86.ngrok.io';
export default axios.create({
  baseURL,
});
