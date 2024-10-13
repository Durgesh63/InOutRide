import axios from 'axios';

class Service {
    constructor(access_token) {
        // eslint-disable-next-line no-sequences
        this.access_token = access_token,
        // Axios instance with authorization
        this.authClient = axios.create({
            baseURL: import.meta.env.SERVER_URI,
            withCredentials: true,
            headers: {
                Authorization: `Bearer ${this.access_token}`,
            },
        });

        // Axios instance without authorization
        this.client = axios.create({

            baseURL: import.meta.env.SERVER_URI,
            withCredentials: true,
        });
    }


    // Method for GET request with optional authorization
    get(endpoint, params = {}, useAuth = true, headers = {}, callback) {
        const client = useAuth ? this.authClient : this.client;
        client
            .get(endpoint, { params, headers })
            .then(response => {
                if (callback) {callback(null, response.data);}
            })
            .catch(error => {
                console.error('GET request failed', error);
                if (callback) {callback(error);}
            });
    }

    // Method for POST request with optional authorization
    post(endpoint, data, useAuth = true, headers = {}, callback) {
        const client = useAuth ? this.authClient : this.client;
        client
            .post(endpoint, data, {
                headers,
            })
            .then(response => {
                if (callback) {callback(null, response.data);}
            })
            .catch(error => {
                console.error('POST request failed', error);
                if (callback) {callback(error);}
            });
    }

}

export default Service;
