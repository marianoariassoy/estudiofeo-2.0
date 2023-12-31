import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../layout/Layout'
import Landing from '../../components/Landing'
import Creaciones from './Creaciones'
import { useDataContext } from '../../context/lanContext'
import { Helmet } from 'react-helmet'

const Studio = () => {
  const { lan, setSection } = useDataContext()
  const id = 135

  useEffect(() => {
    setSection('studio')
    window.scrollTo(0, 0)
  }, [setSection])

  return (
    <Layout>
      <Helmet>
        <title>{lan === 'es' ? 'Estudio' : 'Studio'} FEO</title>
      </Helmet>
      <section className='px-12 pt-32 pb-10'>
        <div className='flex justify-between items-center'>
          <div>
            <h1 className='font-bold text-6xl'>
              {lan === 'es' ? 'estudio' : 'studio'}{' '}
              <span className='font-extraitalic'>feo</span>
            </h1>
          </div>
          <div>
            <Link
              to={`/studio/${id}`}
              className='border-2 border-black rounded-full px-4 py-2 font-bold hover:bg-black hover:text-white'
            >
              {lan === 'es' ? 'VER MÁS' : 'MORE'}
            </Link>
          </div>
        </div>
      </section>
      <Landing
        id={id}
        section='studio'
      />
      <Creaciones />
    </Layout>
  )
}

export default Studio
