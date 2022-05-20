import './ProfileEditPage.css'
import { AuthContext } from './../../../context/auth.context'
import { useContext } from 'react'
import LabelSignupForm from '../../../components/Forms/SignupForm/LabelSignupForm/LabelSignupForm'
import FanSignupForm from './../../../components/Forms/SignupForm/FanSignupForm/FanSignupForm'
import ArtistSignupForm from '../../../components/Forms/SignupForm/ArtistSignupForm/ArtistSignupForm'
import VenueSignupForm from '../../../components/Forms/SignupForm/VenueSignupForm/VenueSignupForm'
import { Container } from 'react-bootstrap'
import ScenaNav from './../../../components/Navbar/ScenaNav'


const ProfileEditPage = ({ fireFinalActions }) => {

    const { user, logOutUser, isLoggedIn } = useContext(AuthContext)

    return (
        <>
            <Container>

                {user.role === 'Fan' && <FanSignupForm edit={user._id} fireFinalActions={fireFinalActions}/>}
                {user.role === 'Label' && <LabelSignupForm edit={user._id} fireFinalActions={fireFinalActions}/>}
                {user.role === 'Venue' && <VenueSignupForm edit={user._id} fireFinalActions={fireFinalActions}/>}
                {user.role === 'Artist' && <ArtistSignupForm edit={user._id} fireFinalActions={fireFinalActions}/>}

            </Container>
        </>
    )
}

export default ProfileEditPage