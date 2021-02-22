import axios from 'axios';
const baseURL = 'http://9c921aaea472.ngrok.io';
export default axios.create({
  baseURL,
});
