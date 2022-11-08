import axios from "axios";

//Base URL: https://api.themoviedb.org/3/
//URL API https://api.themoviedb.org/3/movie/550?api_key=04f01c3ffa770167e9111ee100a44462

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export default api;
