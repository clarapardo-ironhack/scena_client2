import { Routes, Route } from "react-router-dom"
import LabelDetailsPage from "../pages/labels/LabelDetailsPage/LabelDetailsPage"
import LabelsPage from "../pages/labels/LabelsPage/LabelsPage"

const LabelsRoutes = () => {

    return (
        <Routes>
            <Route path="/labels" element={<LabelsPage />} />
            <Route path="/labels/details/:labelId" element={<LabelDetailsPage />} />
        </Routes>
    )
}

export default LabelsRoutes