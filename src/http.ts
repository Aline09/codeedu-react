import axios from "axios";
console.log("degug axios", process.env.NEXT_PUBLIC_API_URL)
const http = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api`
})

export default http;