import axios from 'axios'

class FansService {

    constructor() {

        this.app = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/fans`
        })

        // this.app.interceptors.request.use((config) => {

        //     const storedToken = localStorage.getItem("authToken");

        //     if (storedToken) {
        //         config.headers = { Authorization: `Bearer ${storedToken}` }
        //     }

        //     return config
        // })
    }

    getAllFans = () => {
        return this.app.get('/')
    }

    getOneFan = fanId => {
        return this.app.get(`/details/${fanId}`)
    }

    searchFanByStyle = fanId => {
        return this.app.post(`/delete/${fanId}`)
    }

}

const fansService = new FansService()

export default fansService