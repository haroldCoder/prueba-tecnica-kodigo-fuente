import './App.css'
import { NavBar } from '@features/nav-bar/presentation'
import { RecordsHeader } from '@features/records-header/presentation'

function App() {

  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <NavBar />
      <RecordsHeader />
      <main className="container mx-auto py-8 flex flex-col items-center">

      </main>
    </div>
  )
}

export default App;
