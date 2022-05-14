import axios from "axios";

class MapsService {

    constructor() {

        this.app = axios.create({
            baseURL: `https://maps.googleapis.com/maps/api/`
        })

        // this.app.interceptors.request.use((config) => {

        //     const storedToken = localStorage.getItem("authToken");

        //     if (storedToken) {
        //         config.headers = { Authorization: `Bearer ${storedToken}` }
        //     }

        //     return config
        // })
    }

    getCords = () => {
        this.app
            .get('geocode/json?address=C/%20de%20las%20eras%209%20-%20Iscar&key=AIzaSyBIi25v4-JoTyK0y0BM2wVKxutNUwqDb8w')
            .then(({data}) => console.log(data))
    }

}

const mapsService = new MapsService()

export default mapsService