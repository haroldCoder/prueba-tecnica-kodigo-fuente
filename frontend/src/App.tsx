import './App.css'
import { NavBar } from '@features/nav-bar/presentation'
import { RecordsHeader } from '@features/records-header/presentation'
import { MainPresentation } from '@features/main/presentation'

function App() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <NavBar />

      <main className="py-8 max-h-[calc(100vh-64px)] overflow-y-auto">
        <RecordsHeader />
        <MainPresentation />
      </main>
    </div>
  )
}


export default App;
