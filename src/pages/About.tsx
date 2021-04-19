import { useContext } from "react"
import { UserContext } from "../UserContext"
import { login } from "../utils/login"

export default function About() {
  const { user, setUser } = useContext(UserContext)
  return (
    <>
      <h2>About</h2>
      <div>{JSON.stringify(user, null, 2)}</div>
      {user === null ? (
        <button
          onClick={async () => {
            setUser(await login())
          }}
        >
          Login as william
        </button>
      ) : (
        <button
          onClick={() => {
            setUser(null)
          }}
        >
          Logout
        </button>
      )}
    </>
  )
}
