import axios from "axios";
import coordinatesMachine from "../utils/coordinatesMachine";



class MapsService {

    constructor() {

        this.app = axios.create({
            baseURL: `https://maps.googleapis.com/maps/api/`
        })
    }

    getCords = (street, number, city) => {

        const address = coordinatesMachine(street, number, city)

        const prueba = this.app.get(`geocode/json?address=${address}&key=AIzaSyBIi25v4-JoTyK0y0BM2wVKxutNUwqDb8w`)
        return prueba
    }

}

const mapsService = new MapsService()

export default mapsService