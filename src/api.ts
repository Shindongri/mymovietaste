import Axios, { AxiosInstance } from 'axios'

const API: AxiosInstance = Axios.create({
    baseURL: `https://api.themoviedb.org/${ process.env.REACT_APP_API_VERSION }`,
    params: {
        api_key: process.env.REACT_APP_API_KEY,
        language: 'en-US'
    }
})

export const MovieAPIs = {
    latest: () => API.get('/movie/latest') ,
    upcoming: () => API.get('/movie/upcoming'),
    nowPlaying: () => API.get('/movie/now_playing'),
    topRated: () => API.get('/movie/top_rated'),
    popular: () => API.get('/movie/popular'),
    detail: (id: string) => API.get(`/movie/${ id }`)
}

export const TvAPIs = {
    latest: () => API.get('/tv/latest'),
    airingToday: () => API.get('/tv/airing_today'),
    onTheAir: () => API.get('/tv/on_the_air'),
    popular: () => API.get('/tv/popular'),
    topRated: () => API.get('/tv/top_rated'),
    detail: (id: string) => API.get(`/tv/${ id }`)
}
