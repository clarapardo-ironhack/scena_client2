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

    getTotalUserMessages = (userId) => {
        return this.app.get(`/${userId}/total`)
    }

    createNewMessage = (message) => {
        return this.app.post(`/create`, message)
    }

    answerMessage = (messageId) => {
        return this.app.post(`/edit/${messageId}`)
    }

    deleteMessage = (messageId) => {
        return this.app.post(`/delete/${messageId}`)
    }

}

const messagesService = new MessagesService()

export default messagesService