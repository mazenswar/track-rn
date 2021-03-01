import axios from 'axios';
const baseURL = 'http://e65cb34becc5.ngrok.io';
export default axios.create({
  baseURL,
});
