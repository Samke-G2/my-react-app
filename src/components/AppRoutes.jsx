import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentDetails from "./StudentDetails";
import ManualCounter from "./ManualCounter"
import CountUp from "./CountUp";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<StudentDetails />} />
                <Route path="/manual-counter" element={<ManualCounter />} />
                <Route path="/count-up" element={<CountUp />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;