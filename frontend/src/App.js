import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavBar";
import Products from "./pages/Products";
import Recipes from "./pages/Recipes";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import Login from "./pages/Login";

const dummyUser = {
  userId: 1,
  name: "Jane Doe",
  email: "jane.doe@example.com"
};

function App() {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <NavigationBar user={user} onLogout={() => setUser(null)} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile user={dummyUser}/>} />
        <Route path="/login" element={<Login onLogin={setUser} />} />
        <Route path="/profile" element={<Profile user={user} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
