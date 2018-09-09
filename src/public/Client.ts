/// <reference path="../../node_modules/axios/index.d.ts" />

import axios from 'axios';

class Client
{
    async post(data: object)
    {
        return axios.post('/shortner/create', data);
    }
}