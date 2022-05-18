import './App.css'
import AppRoutes from './routes/AppRoutes'
import ScenaNav from './components/Navbar/ScenaNav'
import UserMessage from './components/UserMessage/UserMessage'


function App() {
  return (
    <div className="App">
      <ScenaNav />
      <AppRoutes />
      <UserMessage/>
    </div>
  )
}

export default App
