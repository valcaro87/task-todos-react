import { Routes, Route, Link} from "react-router-dom"
import { Create } from "./components/Tasks/Create"
import { Lists } from "./components/Tasks/Lists"
import { Update } from "./components/Tasks/Update"

function App() {
  return (
    <>
      <div className="App">
        <li> <Link to="/tasks">Tasks</Link> </li>
      </div>

      <Routes>
        <Route path="/tasks" element={<Lists />} />
        <Route path="/tasks/new" element={<Create />} />
        <Route path="/tasks/:id" element={<Update />} />
      </Routes>


    </>
  )
}

export default App;
