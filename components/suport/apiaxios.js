import axios from 'axios';

export default axios.create({
  baseURL: `http://fastapitreino.herokuapp.com/`
});