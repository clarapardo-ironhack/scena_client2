import axios from 'axios'

class MessagesService {

    constructor() {

        this.app = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/messages`
        })

    }

    getAllUserMessages = (userId) => {
        return this.app.get(`/${userId}`)
    }

    createNewMessage = (message) => {
        return this.app.post(`/create`, message)
    }

    answerMessage = (messageId) => {
        return this.app.post(`/edit/${messageId}`)
    }

    deleteAMessage = (messageId) => {
        return this.app.post(`/delete/${messsageId}`)
    }

}

const messagesService = new MessagesService()

export default messagesService