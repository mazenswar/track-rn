import axios from 'axios';
const baseURL = 'http://6dd399a7ab5f.ngrok.io';
export default axios.create({
  baseURL,
});
