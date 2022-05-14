import LoginForm from '../../../components/Forms/LoginForm/LoginForm'
import './LoginPage.css'
import { Button } from 'react-bootstrap'
import { useState } from 'react'


const LoginPage = ({ state }) => {
    
    const [showButtons, setShowButtons] = useState(state)
    const [showForm, setShowForm] = useState('')

    const openLoginForm = role => {
        setShowForm(role)
        setShowButtons(false)
    }

    return (
        <>
            <h1>loguinpeich</h1>

            {showButtons
                ?
                <>
                    <Button onClick={() => openLoginForm('fan')}>Fan</Button>
                    <Button onClick={() => openLoginForm('venue')}>Venue</Button>
                    <Button onClick={() => openLoginForm('artist')}>Artist</Button>
                    <Button onClick={() => openLoginForm('label')}>Label</Button>
                </>
                :
                <>
                    {showForm === 'fan' && <LoginForm role={showForm} />}
                    {showForm === 'venue' && <LoginForm role={showForm} />}
                    {showForm === 'artist' && <LoginForm role={showForm} />}
                    {showForm === 'label' && <LoginForm role={showForm} />}
                </>

            }

        </>
    )
}

export default LoginPage