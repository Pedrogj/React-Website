import { BrowserRouter } from "react-router-dom";
import { Home } from "../pages/home/Home";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
};
