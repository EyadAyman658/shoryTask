
import "./App.css";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/index";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import UserStore from "./store/userContext";

export const App = () => {
  return (
    <Router forceRefresh={false}>
      <HelmetProvider>
        <UserStore>
          <ToastContainer
            className={"toasts-container"}
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <AppRoutes />
        </UserStore>
      </HelmetProvider>
    </Router>
  );
};

export default App;
