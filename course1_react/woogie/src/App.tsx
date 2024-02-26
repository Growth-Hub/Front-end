import ErrorBoundary from '@components/Error/ErrorBoundary'
import Home from './page/Home'

function App() {
  return (
    <main className="App">
      <ErrorBoundary>
        <Home />
      </ErrorBoundary>
    </main>
  )
}

export default App
