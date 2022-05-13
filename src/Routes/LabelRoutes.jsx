import { Routes, Route } from "react-router-dom"
import LabelDetailsPage from "../pages/LABELS/LabelDetailsPage/LabelDetailsPage"
import LabelsPage from "../pages/LABELS/LabelsPage/LabelsPage"

const LabelsRoutes = () => {

    return (
        <Routes>
            <Route path="/labels" element={<LabelsPage />} />
            <Route path="/labels/details/:labelId" element={<LabelDetailsPage />} />
        </Routes>
    )
}

export default LabelsRoutes