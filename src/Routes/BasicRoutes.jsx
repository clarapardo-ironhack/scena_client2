import { Routes, Route } from "react-router-dom"
import HomePage from "../pages/BASICS/HomePage/HomePage"
import LoginPage from "../pages/BASICS/LoginPage/LoginPage"
import SignupPage from "../pages/BASICS/SignupPage/SignupPage"
import ProfileEditPage from "../pages/BASICS/ProfileEditPage/ProfileEditPage"
import FavoritesPage from "../pages/BASICS/FavoritesPage/FavoritesPage"


const BasicRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<SignupPage />} />
            <Route path="/my-profile" element={<ProfileEditPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
    )
}

export default BasicRoutes