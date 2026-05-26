import './App.css'
// import { DealCard } from "@/components/deals/DealCard";
// import type { Deal } from "@/types/deal.types";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import { Home } from "@/pages/Home";
import { DealDetail } from "@/pages/DealDetail";
import { Login } from "@/pages/Login";
import { Register } from "@/pages/Register";
import { CreateDeal } from "@/pages/CreateDeal";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/deals/:id" element={<DealDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create-deal" element={<CreateDeal />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;