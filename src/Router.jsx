import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Welcome from './pages/Welcome';

function Router () {
    return (
        <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/welcome" element={<Welcome />}></Route>
        </Routes>
    );
}

export default Router;