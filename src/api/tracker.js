import axios from 'axios';
const baseURL = 'http://e0ee06dd96f8.ngrok.io';
export default axios.create({
  baseURL,
});
