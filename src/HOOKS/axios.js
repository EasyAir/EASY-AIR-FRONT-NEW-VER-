import axios from 'axios'

function Axios(method, url, headers, data) {
    axios({
        method: method,
        url: 'http://easyair.herokuapp.com/' + url,
        headers:{
            "Authorization": "Bearer " + window.localStorage.getItem("token"),
            headers
        },
        data:{
            data
        }
    }).then((e)=>{
        console.log(e)
        return e;
    }).catch((err)=>{
        console.log(err)
    })
}

export default Axios;