import { useDataContext } from '../../context/lanContext'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import TextHTML from '../../hooks/useHTML'
import ImageComponent from '../../components/ImageComponent'

const Post = () => {
  let id = 77
  const { lan } = useDataContext()
  const { data: dataImages, loading: loadingImages } = useFetch(
    `/imagenes/${id}`,
  )

  return (
    <section className='px-12 flex flex-wrap'>
      {loadingImages ? (
        <div className='mt-32'>
          <Loader />
        </div>
      ) : (
        dataImages &&
        dataImages.map((item, index) => {
          return (
            <div
              key={index}
              className={item.square > 0 ? 'w-1/2' : 'w-full'}
            >
              <div
                className={
                  item.square > 0
                    ? 'w-full aspect-square object-cover mb-6'
                    : 'w-full mb-6'
                }
              >
                <ImageComponent
                  src={item.image}
                  alt='Los feos'
                />
              </div>
              {item.text && (
                <div className='pb-8 lg:p-14'>
                  <TextHTML text={lan === 'es' ? item.text : item.text_eng} />
                </div>
              )}
            </div>
          )
        })
      )}
    </section>
  )
}

export default Post
