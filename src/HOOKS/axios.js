import axios from "axios";
import { useState } from "react";

const DOMAIN = "http://easyair.herokuapp.com/";
export const Request = (method, url, data,m) => {
  return axios({
    method:method,
    url: DOMAIN + url,
    headers: {"Authorization": "Bearer " + window.localStorage.getItem("token")
  },
    data: data
  })
    .then(res=>res.data)
    .catch((err) => console.log(err));
};