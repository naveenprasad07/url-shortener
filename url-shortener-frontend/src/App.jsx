import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import LandingPage from "./components/LandingPage";
import AboutPage from "./components/AboutPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import RegisterPage from "./components/RegisterPage";
import LoginPage from "./components/LoginPage";
import DashboardLayout from "./components/DashBoard/DashboardLayout";

function App() {

  return (
   <Router>
   <NavBar/>
   <Toaster position="bottom-center"/>
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/dashboard" element={<DashboardLayout/>}/>
    </Routes>
    <Footer/>
   </Router>
  )
}
export default App
