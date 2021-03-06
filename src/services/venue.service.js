import axios from 'axios'

class VenuesService {

    constructor() {

        this.app = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/venues`
        })

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

    editVenue = (editedData) => {
        const { _id } = editedData
        return this.app.post(`/edit/${_id}`, editedData)
    }

}

const venuesService = new VenuesService()

export default venuesService
