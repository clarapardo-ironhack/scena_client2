import { useContext } from 'react'
import { Toast, ToastContainer } from 'react-bootstrap'
import { MessageContext } from '../../context/message.context'
import './UserMessage.css'

const UserMessage = () => {

    const { show, setShow, messageInfo } = useContext(MessageContext)

    // autohide delay = { 3000}

    return (
        <ToastContainer className="p-5"  position={'bottom-start'}>
            <Toast className='theToast' autohide delay={3000} show={show}  onClose={() => setShow(false)} >
                <Toast.Header className='toastTitle'>
                    
                    <strong className="me-auto">{messageInfo.title}</strong>
                </Toast.Header>
                <Toast.Body className='toastBody'>{messageInfo.description}</Toast.Body>
            </Toast>
        </ToastContainer>
    )
}

export default UserMessage