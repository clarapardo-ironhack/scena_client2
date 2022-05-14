import { Routes, Route } from "react-router-dom"
import HomePage from "../pages/basics/HomePage/HomePage"
import LoginPage from "../pages/basics/LoginPage/LoginPage"
import SignupPage from "../pages/basics/SignupPage/SignupPage"
import ProfileEditPage from "../pages/basics/ProfileEditPage/ProfileEditPage"
import FavoritesPage from "../pages/basics/FavoritesPage/FavoritesPage"

const BasicRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage state={true} />} />
            <Route path="/register" element={<SignupPage />} />
            <Route path="/my-profile" element={<ProfileEditPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
    )
}

export default BasicRoutes