import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDataContext } from '../../context/lanContext'
import BeatLoader from 'react-spinners/BeatLoader'

const Item = ({ data, mask }) => {
  const { imageURL } = useDataContext()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const image = new Image()
    image.src = imageURL + data.image
    image.onload = () => {
      setIsLoading(false)
    }
  }, [data.image])

  return (
    <Link
      to={`/studio/${data.id}`}
      className='item-mask items-center justify-center relative inline-flex'
    >
      <div className={`item-mask-txt absolute left-0 w-full z-30 opacity-0`}>
        <h3 className='font-bold'>{data.number}</h3>
        <h2 className='text-xl font-bold leading-5'>{data.title}</h2>
        <h3>{data.subtitle}</h3>
      </div>

      {isLoading ? (
        <div className='item-mask-image item-loader aspect-square flex items-center justify-center'>
          <BeatLoader />
        </div>
      ) : (
        <img
          src={`${imageURL}${data.image}`}
          className={`item-mask-image mask mask-${mask}`}
        />
      )}
    </Link>
  )
}

export default Item
