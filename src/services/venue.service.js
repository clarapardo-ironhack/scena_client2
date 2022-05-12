import axios from 'axios'

class VenuesService {

    constructor() {

        this.app = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/venues`
        })

        // this.app.interceptors.request.use((config) => {

        //     const storedToken = localStorage.getItem("authToken");

        //     if (storedToken) {
        //         config.headers = { Authorization: `Bearer ${storedToken}` }
        //     }

        //     return config
        // })
    }

    getAllVenues = () => {
        return this.app.get('/')
    }

    getOneVenue = venueId => {
        return this.app.get(`/${venueId}`)
    }

    searchVenueByName = venueName => {
        return this.app.get(`/search/${venueName}`)
    }

    searchVenueByLocation = venueLocation => {
        return this.app.get(`/search/location/${venueLocation}`)
    }

    deleteVenue = venueId => {
        return this.app.post(`/delete/${venueId}`)
    }

    editVenue = (venueId, venueBody) => {
        return this.app.post(`/edit/${venueId}`,venueBody)
    }

}

const venuesService = new VenuesService()

export default venuesService