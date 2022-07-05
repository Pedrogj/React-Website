import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { SignIn } from "../pages/signIn/SignIn";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signin" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
};
