import './App.css'
import ScenaNav from './components/Navbar/ScenaNav'
import UserMessage from './components/UserMessage/UserMessage'
import AppRoutesT from "./routes/AppRoutes"


function App() {
  return (
    <div className="App">
      <ScenaNav />
      <AppRoutesT />
      <UserMessage />
    </div>
  )
}

export default App
