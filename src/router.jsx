import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./helpers/ProtectedRoute";

// Pages
import Signin from "./pages/SignIn";
import Signup from "./pages/SignUp";
import Account from "./pages/Account";

function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/cadastro" element={<Signup />} />
      <Route
        path="/account"
        element={
          <ProtectedRoute>
            <Account />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
export default MyRoutes;
