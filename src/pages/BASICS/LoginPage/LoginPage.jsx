import LoginForm from '../../../components/Forms/LoginForm/LoginForm'
import './LoginPage.css'
import { Button } from 'react-bootstrap'
import { useState } from 'react'


const LoginPage = () => {

    const [showButtons, setShowButtons] = useState(true)
    const [showForm, setShowForm] = useState('')

    const openSignupForm = role => {
        setShowForm(role)
        setShowButtons(false)
    }

    return (
        <>
            <h1>loguinpeich</h1>

            {showButtons &&
                <>
                    <Button onClick={() => openSignupForm('fan')}>Fan</Button>
                    <Button onClick={() => openSignupForm('venue')}>Venue</Button>
                    <Button onClick={() => openSignupForm('artist')}>Artist</Button>
                    <Button onClick={() => openSignupForm('label')}>Label</Button>
                </>}

            {showForm === 'fan' && <LoginForm role={showForm} />}
            {showForm === 'venue' && <LoginForm role={showForm} />}
            {showForm === 'artist' && <LoginForm role={showForm} />}
            {showForm === 'label' && <LoginForm role={showForm} />}
        </>
    )
}

export default LoginPage