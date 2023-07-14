import { BrowserRouter} from 'react-router-dom'
import { About, Contact, Experience, Feedbacks, Hero, Tech, Works, StarsCanvas, Navbar, } from './components'

const App = () =>  {
  return (     
  <BrowserRouter>
    <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat'>
          <Navbar />
          <Hero />
        </div>
        <About />
        {/* <Experience /> */}
        <Tech />
        <Works />
        <Feedbacks />
        </div>
      <div className='relative z-0 bg-primary'>
        <Contact />
        <StarsCanvas />
    </div>
  </BrowserRouter>
  
  )
}

export default App
