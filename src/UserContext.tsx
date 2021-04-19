import { createContext } from "react"
import { User } from "./utils/login"

type ContextType = {
  user: User | null
  setUser: React.Dispatch<React.SetStateAction<User | null>>
}

export const UserContext = createContext<ContextType>({
  user: null,
  setUser: () => null,
})
