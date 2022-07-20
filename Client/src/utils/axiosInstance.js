import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3333'
});

const addAuthTokenInterceptor = (req) => {
    const token = JSON.parse(localStorage.getItem("token") || "");
    if (token) {
        req.headers = {
            authorization: token
        }
    } else {
        console.log("token não informado no localstorage")
    }
    console.log(req.headers)
    return req
}

axiosInstance.interceptors.request.use(addAuthTokenInterceptor)

export default axiosInstance