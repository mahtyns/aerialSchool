import Navbar from '@/components/scenes/Navbar'
import { useEffect, useState } from 'react'
import Home from '@/components/scenes/Home'
import { SelectedPage } from './shared/types'

function App() {

  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  )
  const [isTopPage, setTopPage] = useState<boolean>(true)


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setTopPage(true)
        setSelectedPage(SelectedPage.Home)
      }
      if (window.scrollY !== 0) {
        setTopPage(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="app bg-gradient-cream">
      <Navbar
        isTopPage={isTopPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage} />
      <Home
        setSelectedPage={setSelectedPage}
      />
    </div>
  )
}

export default App
