import axios from 'axios';
import * as Config from './../constants/Config';

export default function callApi(endpoint, method, body) {

    let headers ={
        'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGQwZmFiMTFjOWQ0NDAwMDA2OWRmZjMiLCJleHAiOjE1NzU4MjEzMjYsImlhdCI6MTU3NTY0ODUyNn0.xl8AFMLE5RcUtj7aAMT5On0yyaBdr-UTw2xdYJOb8N0',
        // 'Content-Type': 'multipart/form-data'
    }

    return axios({
        method: method,
        url: `${Config.API_URL}/${endpoint}`,
        data: body,
        headers : headers
    }).catch(err => {
        console.log(err);
    });
};