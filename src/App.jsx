import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Profile from "./components/Profile"
import Header from "./components/Header"
import Footer from "./components/Footer"

import { CurrentUserContextProvider } from "./contexts/userContext"

export default function App() {
  return (
    <CurrentUserContextProvider>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
      <Footer />
    </CurrentUserContextProvider>
  )
}
