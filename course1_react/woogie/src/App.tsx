import ErrorBoundary from '@components/Error/ErrorBoundary'
import Navbar from '@components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <main className="App">
        <ErrorBoundary>
          <Outlet />
        </ErrorBoundary>
      </main>
    </>
  )
}

export default App
