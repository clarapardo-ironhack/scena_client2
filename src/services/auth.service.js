import axios from 'axios'

class AuthService {

    constructor() {
        this.app = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/auth`
        })
    }

    artistRegister = user => {
        return this.app.post('/register/artist', user)
    }

    venueRegister = user => {
        return this.app.post('/register/venue', user)
    }

    labelRegister = user => {
        return this.app.post('/register/label', user)
    }

    fanRegister = user => {
        return this.app.post('/register/fan', user)
    }

    login = ({ role, loginData }) => {
        return this.app.post(`/login/${role}`, loginData)
    }

    verify = token => {
        return this.app.get('/verify', { headers: { Authorization: `Bearer ${token}` } })
    }

    addArtist = ({ role, artistId, loggedUserId }) => {
        return this.app.post(`/${role}/addArtist/${artistId}`, { loggedUserId })
    }

    addEvent = ({ role, eventId, loggedUserId }) => {
        return this.app.post(`/${role}/addEvent/${eventId}`, { loggedUserId })
    }

    addVenue = ({ role, venueId, loggedUserId }) => {
        return this.app.post(`/${role}/addVenue/${venueId}`, { loggedUserId })
    }
    checkArtist = ({ role, artistId, loggedUserId }) => {
        return this.app.post(`/${role}/checkArtist/${artistId}`, { loggedUserId })
    }
}

const authService = new AuthService()

export default authService