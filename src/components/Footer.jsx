import { useContext } from "react"

import CurrentUserContext from "../contexts/userContext"

export default function Footer() {
  const { currentUserName } = useContext(CurrentUserContext)

  return <footer>Glad to see you back {currentUserName}</footer>
}
