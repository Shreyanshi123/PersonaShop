import "./App.css";
import { Toaster } from "react-hot-toast"; 
import Footer from "./components/Footer.js";
import Navbar from "./components/Navbar.js";
import AboutPage from "./pages/About.js";
import { Routes, Route } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage.js";
import LoginPage from "./pages/LoginPage.js";
import ContactPage from "./pages/ContactPage.js"
import Cart from "./pages/Cart.js";
import Home from "./pages/Home.js"
import { Provider } from "react-redux";
import store from "./redux/store.js";
function App() {
  return (
    <div className="min-h-screen bg-purple-palette text-light-lavender relative overflow-hidden">
      <div className="relative z-50 pt-20">
        <Navbar />
        <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        </Provider>
        <Toaster />
        <Footer />
      </div>
    </div>
  );
}

export default App;
