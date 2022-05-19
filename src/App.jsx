import './App.css'
import AppRoutes from './routes/AppRoutes'
import UserMessage from './components/UserMessage/UserMessage'


function App() {
  return (
    <div className="App">
      <AppRoutes />
      <UserMessage/>
    </div>
  )
}

export default App
