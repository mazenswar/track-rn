import axios from 'axios';
const baseURL = 'http://45b04179c1bc.ngrok.io';
export default axios.create({
  baseURL,
});
