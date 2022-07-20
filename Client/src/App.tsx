import { Home } from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignUpPage } from './pages/SignUpPage';
import { SignInPage } from './pages/SignInPage';
import { FindVolunteerPage } from './pages/FindVolunteerPage';

export function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/signup' element={<SignUpPage />} />
                <Route path='/signin' element={<SignInPage />} />
                <Route path='/findvolunteer' element={<FindVolunteerPage />} />
            </Routes>
        </BrowserRouter>
    )
}