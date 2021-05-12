import axios from 'axios';
const ipLoc = '127.0.0.1';
const backendPort = '9015';

export const backendUrl = `http://${ipLoc}:${backendPort}/`;

export default axios.create({
  baseURL: `http://${ipLoc}:${backendPort}/`,
  headers: {
    'Content-Type': 'application/json',
  },
  validateStatus: function(status) {
    return status < 500; // Reject only if the status code is greater than or equal to 500
  }
});
