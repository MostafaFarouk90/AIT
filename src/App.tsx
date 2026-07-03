import { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ClientsBand from './components/ClientsBand'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import ProjectsPage from './components/ProjectsPage'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [hash, setHash] = useState(window.location.hash)

  useEffect(() => {
    const onHash = () => setHash(window.location.hash)
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  const isProjectsPage = hash.startsWith('#/projects')

  useEffect(() => {
    if (isProjectsPage) {
      window.scrollTo(0, 0)
    } else if (hash.length > 1) {
      document.getElementById(hash.slice(1))?.scrollIntoView()
    }
  }, [hash, isProjectsPage])

  return (
    <>
      <Header solid={isProjectsPage} />
      {isProjectsPage ? (
        <main>
          <ProjectsPage />
        </main>
      ) : (
        <main>
          <Hero />
          <ClientsBand />
          <About />
          <Services />
          <Projects />
          <Contact />
        </main>
      )}
      <Footer />
    </>
  )
}
