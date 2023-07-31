import { useEffect } from 'react'
import Layout from '../../layout/Layout'
import Landing from '../../components/Landing'
import { useDataContext } from '../../context/lanContext'
import { Helmet } from 'react-helmet'
import Post from './Post'
const About = () => {
  const { lan, setSection } = useDataContext()
  const id = 77

  useEffect(() => {
    setSection('about')
    window.scrollTo(0, 0)
  }, [setSection])

  return (
    <Layout>
      <Helmet>
        <title>{lan === 'es' ? 'Nosotros' : 'About'} FEO</title>
      </Helmet>
      <section className='px-12 pt-32 pb-10'>
        <h1 className='font-bold text-6xl'>
          {lan === 'es' ? 'nosotros' : 'about'}{' '}
          <span className='font-extraitalic'>feo</span>
        </h1>
      </section>
      <Landing
        id={id}
        section='about'
      />
      <Post />
    </Layout>
  )
}

export default About
