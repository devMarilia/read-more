import { AuthContextProvider } from "./context/AuthContext";
import { BrowserRouter } from "react-router-dom";
import MyRoutes from "./router";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <BrowserRouter>
          <MyRoutes />
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;
