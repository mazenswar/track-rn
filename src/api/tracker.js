import axios from 'axios';
const baseURL = 'http://597260b3fa34.ngrok.io';
export default axios.create({
  baseURL,
});
