import { createContext, useState } from "react"

const CurrentUserContext = createContext()

export const CurrentUserContextProvider = ({ children }) => {
  const [currentUserName, setCurrentUserName] = useState("")
  const [currentUserAvatar, setCurrentUserAvatar] = useState("")

  return (
    <CurrentUserContext.Provider
      value={{
        currentUserName,
        setCurrentUserName,
        currentUserAvatar,
        setCurrentUserAvatar,
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  )
}

export default CurrentUserContext
