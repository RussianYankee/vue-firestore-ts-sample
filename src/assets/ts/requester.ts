import Axios from "axios"

Axios.interceptors.response.use(
    response => response,
    error => {
        if (!!error || !error.response || error.response.status !== 401) {
            return Promise.reject(error)
        }
    }
)

export var request = {
    doGet(url: string) {
        return Axios.get(url)
            .then(req => req.data);
    },
    doPost(url: string, body: unknown) {
        return Axios.post(url, body, {headers: {"Content-Type": "application/json"}})
            .then(req => req.data);
    }
}
