import axios from "axios"

class VenuesService {

    constructor() {
    
        this.app = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}/venues`
})
}



}