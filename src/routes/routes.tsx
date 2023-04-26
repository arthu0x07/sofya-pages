import { Home } from '/src/pages/Home';
import { Presentation } from '/src/pages/Presentation';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export function AppRoutes() {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/presentation" element={<Presentation />}/>
            </Routes>
        </Router>
    )
}