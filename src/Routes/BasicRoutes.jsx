import { Routes, Route } from "react-router-dom"
import HomePage from "../pages/basics/HomePage/HomePage"
import LoginPage from "../pages/basics/LoginPage/LoginPage"
import SignupPage from "../pages/basics/SignupPage/SignupPage"
import ProfileEditPage from "../pages/basics/ProfileEditPage/ProfileEditPage"
import FavoritesPage from "../pages/basics/FavoritesPage/FavoritesPage"
import MessagesPage from "../pages/basics/MessagesPage/MessagesPage"


const BasicRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<SignupPage />} />
            <Route path="/my-profile" element={<ProfileEditPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/my-messages" element={<MessagesPage />} />
        </Routes>
    )
}

export default BasicRoutes