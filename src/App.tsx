import * as React from "react"
import { FirstPart } from "./FirstPart"
import { SecondPart } from "./SecondPart"
import { ThirdPart } from "./ThirdPart"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import About from "./pages/About"
import Home from "./pages/Home"
import { UserContext } from "./UserContext"
import { User } from "./utils/login"

function App() {
  const [user, setUser] = React.useState<User | null>(null)

  const providerUser = React.useMemo(() => ({ user, setUser }), [user, setUser])
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <UserContext.Provider value={providerUser}>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
        </UserContext.Provider>
      </div>
      <FirstPart />
      <SecondPart />
      <ThirdPart />
    </Router>
  )
}

export default App
