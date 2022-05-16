import axios from 'axios'

class ArtistsService {

    constructor() {

        this.app = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/artists`
        })

        // this.app.interceptors.request.use((config) => {

        //     const storedToken = localStorage.getItem("authToken");

        //     if (storedToken) {
        //         config.headers = { Authorization: `Bearer ${storedToken}` }
        //     }

        //     return config
        // })
    }

    getAllArtists = () => {
        return this.app.get('/')
    }

    getOneArtist = artistId => {
        return this.app.get(`/details/${artistId}`)
    }

    searchArtist = username => {
        return this.app.get(`/search/${username}`)
    }

    searchArtistByStyle = style => {
        return this.app.get(`/search/style/${style}`)
    }

    editArtist = (editedData) => {
        const { _id } = editedData
        return this.app.post(`/edit/${_id}`, editedData)
    }

}

const artistsService = new ArtistsService()

export default artistsService