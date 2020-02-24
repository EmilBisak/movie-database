import { GETSINGLEMOVIE } from "../config.api/api"

const getSingleMovie = (id) => {
    return fetch(`${GETSINGLEMOVIE}${id}`).then(res => res.json())
}

export default getSingleMovie;