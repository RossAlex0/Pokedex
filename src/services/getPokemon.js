import axios from "axios";

export default function getPokemon({ params }){
    const { generation } = params
    if(generation){
    return axios
    .get(`https://tyradex.tech/api/v1/gen/${generation}`)
    .then((response) => response.data)
    .catch((err) => console.info(err))
    }else{
        return axios
    .get(`https://tyradex.tech/api/v1/gen/1`)
    .then((response) => response.data)
    .catch((err) => console.info(err))
    }
}

