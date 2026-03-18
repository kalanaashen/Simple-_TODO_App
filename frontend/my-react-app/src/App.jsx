import { MainPage } from "./pages/MainPage";
import { Loginpage } from "./pages/Loginpage";
import { RegisterPage } from "./pages/RegisterPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./layouts/Layout";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Loginpage />} />
              <Route path="register" element={<RegisterPage />} />
              <Route path="todos" element={<MainPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
