import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Problem from './components/Problem'
import Programs from './components/Programs'
import News from './components/News'
import GetInvolved from './components/GetInvolved'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Problem />
        <Programs />
        <News />
        <GetInvolved />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
