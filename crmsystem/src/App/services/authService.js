import React from 'react';
import axios from 'axios';
import { environment } from '../../environment/environment';



export default class AuthService extends React.Component{
    
    static getValue() {
        // axios.get('http://localhost:57024/api/v1/crmsys/values')
        // .then(function (res) {
        //     return res;
        // })
        // .catch(function (err) {
        //     return err;
        // });

        return new Promise( (res, rej) => {
            axios.get(`${environment.apiURL}/values`)
                .then(
                    (data) => {
                        res(data);
                    }, (err) => {
                        rej(err);
                    }
                )
        });
    }
}
