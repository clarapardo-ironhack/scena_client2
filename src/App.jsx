import './App.css'
import ScenaNav from './components/Navbar/ScenaNav'
import UserMessage from './components/UserMessage/UserMessage'
import AppMain from "./routing_/AppMain"


function App() {
  return (
    <div className="App">
      <ScenaNav />
      <AppMain />
      <UserMessage />
    </div>
  )
}

export default App
