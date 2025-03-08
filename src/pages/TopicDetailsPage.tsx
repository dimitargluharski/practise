import { useContext } from "react"
import { UserContext } from "../context/UserContext"

export const TopicDetailsPage = () => {
  const isLoggedIn = useContext(UserContext);

  if (!isLoggedIn) {
    return (
      <div>
        You can't comment because you are not logged in.
      </div>
    )
  }

  return (
    <div>
    </div>
  )
}