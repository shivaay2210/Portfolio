import {BrowserRouter} from 'react-router-dom'
// A <BrowserRouter> stores the current location in the browser's address bar 
// using clean URLs and navigates using the browser's built-in history stack.

import {About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas} from './components'

function App() {

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        {/* <Experience /> education */}
        <Tech />
        <Works /> {/* project */}
        {/* <Feedbacks /> */}
        <div className='relative z-0'>
          <Contact /> 
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
