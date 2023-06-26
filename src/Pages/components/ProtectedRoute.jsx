import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const email = JSON.parse(sessionStorage.getItem("email"));
  const password = JSON.parse(sessionStorage.getItem("password"));
  const id = JSON.parse(sessionStorage.getItem("id"));
  console.log(email);
  return (email && password) || id ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
