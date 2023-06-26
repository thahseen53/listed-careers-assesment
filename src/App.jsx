import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInPage from "./Pages/SignInPage";
import HomePage from "./Pages/HomePage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<SignInPage />} />
          <Route path="dashboard" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
