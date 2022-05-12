import axios from 'axios'

class AuthService {

    constructor() {
        this.app = axios.create({ baseURL: 'http://localhost:5005/api/auth' })
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
        console.log('----ESTOY AQUI----', loginData, role)
        return this.app.post(`/login/${role}`, loginData)
    }

    verify = token => {
        return this.app.get('/verify', { headers: { Authorization: `Bearer ${token}` } })
    }

}

const authService = new AuthService()

export default authService