import { Route, Routes } from 'react-router-dom';
import Home from './routes/home';
import LayoutDesign from './routes/layout-design';

export default function AppRoutes() {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path='/layout' element={<LayoutDesign />} />
        </Routes>
    );
}
