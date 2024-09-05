import StartMenu from "./components/StartMenu"
import Taskbar from "./components/Taskbar"

function App() {
  return (
    <main className="w-screen h-screen bg-no-repeat bg-center bg-cover bg-background flex flex-col select-none">
      <Taskbar />
      <StartMenu />
    </main>
  )
}

export default App
