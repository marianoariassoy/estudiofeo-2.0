import { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../../layout/Layout'
import Landing from '../../components/Landing'
import Tienda from '../../components/Tienda'
import { useDataContext } from '../../context/lanContext'
import { Link } from 'react-router-dom'

const Shop = () => {
  const { lan, setSection } = useDataContext()
  const id = 130

  useEffect(() => {
    setSection('shop')
    window.scrollTo(0, 0)
  }, [setSection])

  return (
    <Layout>
      <Helmet>
        <title>{lan === 'es' ? 'Tienda' : 'Shop'} FEO</title>
      </Helmet>
      <section className='px-12 pt-32 pb-10'>
        <div className='flex justify-between items-center'>
          <div>
            <h1 className='font-bold text-6xl'>
              {lan === 'es' ? 'tienda' : 'shop'}{' '}
              <span className='font-extraitalic'>feo</span>
            </h1>
          </div>
          <div>
            <Link
              to={`/shop/${id}`}
              className='border-2 border-black rounded-full px-4 py-2 font-bold hover:bg-black hover:text-white'
            >
              {lan === 'es' ? 'VER MÁS' : 'MORE'}
            </Link>
          </div>
        </div>
      </section>
      <Landing
        id={id}
        section='shop'
      />
      <Tienda
        section='shop'
        title={lan === 'es' ? 'catálogo' : 'catalogue'}
      />
    </Layout>
  )
}

export default Shop
