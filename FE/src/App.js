import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Landing from "./pages/Landing";
import UserCalendar from "./pages/Calendar";
import SignUp from "./pages/SignUp";
import Notfound from "./pages/NotFound";

function App() {
  return (
    <div align="center">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/cal/:userid" element={<UserCalendar />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="*" element={<Notfound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
