import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home, Admin } from "./views";
import { AppContextProvider } from "./context/app.context";

const App = () => {
  return (
    <div className="App">
      <AppContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="admin" element={<Admin />} />
          </Routes>
        </BrowserRouter>
      </AppContextProvider>
    </div>
  );
};

export default App;
