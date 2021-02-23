import axios from "axios";

const DOMAIN = "http://easyair.herokuapp.com/";
export const Request = (method, url, data,head, m) => {
  return axios({
    method:method,
    url: DOMAIN + url,
    headers: head,
    data: data
  })
    .then((res)=>{console.log(res.data); console.log(m + "성공"); return res.data})
    .catch((err) => {
      console.log(err);
      console.log(m + "실패")
    });
};

//"Authorization": "Bearer " + window.localStorage.getItem("token")