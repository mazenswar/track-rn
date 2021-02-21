import axios from 'axios';
const baseURL = 'http://d6f24dd2f777.ngrok.io';
export default axios.create({
  baseURL,
});
