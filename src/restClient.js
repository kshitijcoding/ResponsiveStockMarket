import axios from 'axios';

function get(url, onSuccess, onFailure) {
    return axios.get(url)
        .then(onSuccess)
        .catch(onFailure)
}