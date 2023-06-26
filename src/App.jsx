import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInPage from "./Pages/SignInPage";
import HomePage from "./Pages/HomePage";
import ProtectedRoute from "./Pages/components/ProtectedRoute";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<SignInPage />} />
          <Route
            path="dashboard"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
