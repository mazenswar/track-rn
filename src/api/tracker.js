import axios from 'axios';
const baseURL = 'http://c7ecbddd0105.ngrok.io';
export default axios.create({
  baseURL,
});
