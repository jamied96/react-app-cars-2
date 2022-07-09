import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { ThemeProvider } from '@mui/system';

import theme from './theme';

import CssBaseline from '@mui/material/CssBaseline'


import PageLayout from './components/PageLayout';

import Home from "./pages/Home";
import AddCar from "./pages/AddCar";
import UpdateCar from "./pages/UpdateCar";
import NotFound from "./pages/NotFound";


function App() {
  return (
    <>
      <Router>
        <CssBaseline />
        <ThemeProvider theme={theme} >
          <Routes>
            <Route path="/" element={<PageLayout />}>
              <Route index element={<Home />} />
              <Route path="/add" element={<AddCar />} />
              <Route path="/update:id" element={<UpdateCar />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
