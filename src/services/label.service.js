import axios from 'axios'

class LabelsService {

    constructor() {

        this.app = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/labels`
        })

        // this.app.interceptors.request.use((config) => {

        //     const storedToken = localStorage.getItem("authToken");

        //     if (storedToken) {
        //         config.headers = { Authorization: `Bearer ${storedToken}` }
        //     }

        //     return config
        // })
    }

    getAllLabels = () => {
        return this.app.get('/')
    }

    getOneLabel = labelId => {
        return this.app.get(`/details/${labelId}`)
    }

    searchByName = labelName => {
        return this.app.get(`/search/${labelName}`)
    }

    searchLabelByStyle = labelId => {
        return this.app.post(`/delete/${labelId}`)
    }

    editLabel = (editedData) => {
        const { _id } = editedData
        return this.app.post(`/edit/${_id}`, editedData)
    }

}

const labelsService = new LabelsService()

export default labelsService