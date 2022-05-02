import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Profile from "./components/Profile"
import Header from "./components/Header"
import Footer from "./components/Footer"

export default function App() {
  const [currentUserName, setCurrentUserName] = useState("")
  const [currentUserAvatar, setCurrentUserAvatar] = useState("")

  return (
    <>
      <Header
        currentUserAvatar={currentUserAvatar}
        currentUserName={currentUserName}
      />
      <main>
        <Routes>
          <Route exact path="/" component={Home} />
          <Route
            path="/profile"
            element={
              <Profile
                currentUserName={currentUserName}
                setCurrentUserName={setCurrentUserName}
                setCurrentUserAvatar={setCurrentUserAvatar}
                currentUserAvatar={currentUserAvatar}
              />
            }
          />
        </Routes>
      </main>
      <Footer currentUserName={currentUserName} />
    </>
  )
}
