import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://mm-react-fe-interview-task.herokuapp.com',
})

export default instance
