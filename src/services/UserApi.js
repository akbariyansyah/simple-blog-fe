import axios from "axios";
import swal from "sweetalert";

const loginUser = user => {
    return axios.post('/login', user)
    .then(res => res)
    .catch(function (error) {
        console.log(error);
    });
}

export {loginUser}