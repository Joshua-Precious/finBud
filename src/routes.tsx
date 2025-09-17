import { Route, Routes } from 'react-router';
import Home from './routes/home';
import LayoutDesign from './routes/layout-design';

export default function AppRoutes() {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path='/layout' index element={<LayoutDesign />} />
        </Routes>
    );
}
