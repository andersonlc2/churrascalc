import axios from "axios";

export const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? "http://localhost:8080";

export function request(endPoint: string, setValues: Function) {
    axios.get(`${BASE_URL}/${endPoint}`)
        .then(response => {
            setValues(response.data);
        })
};