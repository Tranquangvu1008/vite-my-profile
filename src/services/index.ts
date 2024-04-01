import axios from "axios";
import { ERROR_STATUS_CODE, NETWORK_ERROR_CODE, NETWORK_ERROR_MSG } from "../lib/constants";

const instance = axios.create({
  baseURL: import.meta.env.VITE_SPOTIFY_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem('token');
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    handleErrorResponse(error);
    if (error?.response?.status === 401) {
      localStorage.removeItem("token");
    }

    return Promise.reject(error.response.data);
  }
);


const handleErrorResponse = (error: any) => {
  const errorStatus = Object.values(ERROR_STATUS_CODE);
  const hasError = errorStatus.includes(error?.response?.status);
  const hasServerError =
    (error?.code === NETWORK_ERROR_CODE && error?.message === NETWORK_ERROR_MSG)
  if (hasError || hasServerError) {
    // window.isRedirectToErrorPage = true;

    if (error?.response?.status === ERROR_STATUS_CODE[401]) {
      window.open('/music', '_self');
    }

    if (hasServerError && error?.code === NETWORK_ERROR_CODE) {
      window.open('/pageNotFound', '_self');
    }

    // if (error?.response?.status === ERROR_STATUS_CODE[405]) {
    //   window.open('/PageNotFound', '_self');
    // }

    // if (error?.response?.status === ERROR_STATUS_CODE[406]) {
    //   window.open('/PageNotFound', '_self');
    // }

    // if (error?.response?.status === ERROR_STATUS_CODE[408]) {
    //   window.open('/PageNotFound', '_self');
    // }

    // if (error?.response?.status === ERROR_STATUS_CODE[411]) {
    //   window.open('/PageNotFound', '_self');
    // }

    // if (error?.response?.status === ERROR_STATUS_CODE[412]) {
    //   window.open('/PageNotFound', '_self');
    // }

    // if (error?.response?.status === ERROR_STATUS_CODE[413]) {
    //   window.open('/PageNotFound', '_self');
    // }

    // if (error?.response?.status === ERROR_STATUS_CODE[414]) {
    //   window.open('/PageNotFound', '_self');
    // }

    // if (error?.response?.status === ERROR_STATUS_CODE[415]) {
    //   window.open('/PageNotFound', '_self');
    // }

    // if (error?.response?.status === ERROR_STATUS_CODE[416]) {
    //   window.open('/PageNotFound', '_self');
    // }

    // if (error?.response?.status === ERROR_STATUS_CODE[421]) {
    //   window.open('/PageNotFound', '_self');
    // }

    // if (error?.response?.status === ERROR_STATUS_CODE[422]) {
    //   window.open('/PageNotFound', '_self');
    // }

    // if (error?.response?.status === ERROR_STATUS_CODE[425]) {
    //   window.open('/PageNotFound', '_self');
    // }

    // if (error?.response?.status === ERROR_STATUS_CODE[428]) {
    //   window.open('/PageNotFound', '_self');
    // }

    // if (error?.response?.status === ERROR_STATUS_CODE[429]) {
    //   window.open('/PageNotFound', '_self');
    // }

    // if (error?.response?.status === ERROR_STATUS_CODE[431]) {
    //   window.open('/PageNotFound', '_self');
    // }

    // if (error?.response?.status === ERROR_STATUS_CODE[500]) {
    //   window.open('/PageNotFound', '_self');
    // }

    // if (
    //   hasServerError ||
    //   error?.response?.status === ERROR_STATUS_CODE[501] ||
    //   error?.response?.status === ERROR_STATUS_CODE[502] ||
    //   error?.response?.status === ERROR_STATUS_CODE[503] ||
    //   error?.response?.status === ERROR_STATUS_CODE[504] ||
    //   error?.response?.status === ERROR_STATUS_CODE[505]
    // ) {
    //   window.open('/PageNotFound', '_self');
    // }
  }
};


export default instance;
