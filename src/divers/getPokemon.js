import axios from "axios";

export default function getPokemon(){
    return axios
    .get('https://tyradex.tech/api/v1/gen/1')
    .then((response) => response.data)
    .catch((err) => console.info(err))
}

