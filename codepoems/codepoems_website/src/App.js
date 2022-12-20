import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import PageOne from "./pages/PageOne";


const App = () => {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pageOne" element={<PageOne />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
