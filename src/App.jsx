import './App.css'
import AppRoutes from './routes/AppRoutes'
import ScenaNav from './components/Navbar/ScenaNav'


function App() {
  return (
    <div className="App">
      <ScenaNav />
      <AppRoutes />
    </div>
  )
}

export default App
