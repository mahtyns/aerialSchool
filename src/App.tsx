import Navbar from '@/components/scenes/Navbar'
import { useState } from 'react'

enum SelectedPage {
  Home = "home",
  WhyUs = "whyus",
  OurClasses = "ourclasses",
  ContactUs = "contactus"
}

function App() {

  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  )

  return (
    <div className="app bg-gradient-cream">
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage} />
    </div>
  )
}

export default App
