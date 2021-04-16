const axios = require('axios').default;

const api = axios.create({
  baseURL: "https://octupus-challenge.vercel.app/api/"
})

export default api;