import { Link } from 'react-router-dom'
import { useDataContext } from '../context/lanContext'
import ImageComponent from './ImageComponent'
import useFetch from '../hooks/useFetch'
import Loader from './Loader'
import TextHTML from '../hooks/useHTML'

const Landing = ({ id, section }) => {
  const { lan } = useDataContext()

  const { data, loading } = useFetch(`/landings/${lan}/${id}`)

  return (
    <section className='galeria-item'>
      {loading ? (
        <Loader />
      ) : (
        <article className='grid lg:grid-cols-2'>
          <div className='bg-black p-12 text-secondary flex flex-col justify-between aspect-square lg:aspect-auto'>
            <div>
              <h3 className='text-xl'>{data[0].subtitle}</h3>
              <h1 className='text-6xl lg:text-7xl font-bold mb-8'>
                {data[0].title}
              </h1>
            </div>
            <div>
              <div className='font-bold mb-8'>
                <TextHTML text={data[0].text} />
              </div>
            </div>
          </div>
          <div>
            {id === 77 ? (
              <div className='block galeria-item aspect-square lg:aspect-auto'>
                <ImageComponent src={`${data[0].image}`} />
              </div>
            ) : (
              <Link
                to={`/${section}/${id}`}
                className='relative block galeria-item aspect-square lg:aspect-auto'
              >
                <div className='absolute top-0 left-0 w-full h-full hover:backdrop-blur-md z-10 transition-all'></div>
                <ImageComponent src={`${data[0].image}`} />
              </Link>
            )}
          </div>
        </article>
      )}
    </section>
  )
}

export default Landing
