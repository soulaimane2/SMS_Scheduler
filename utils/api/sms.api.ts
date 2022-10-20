import axios from "axios"

const api = "http://kr8tif.lawaapp.com:1338/"

export default axios.create({
    baseURL: api,
})