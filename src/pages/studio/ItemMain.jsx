import { useDataContext } from '../../context/lanContext'

const Item = ({ data, categorie, setCategorie }) => {
  const { lan } = useDataContext()

  return (
    <div
      className={`item-mask items-center justify-center relative flex flex-col gap-y-2 ${
        data.id === categorie && 'opacity-0'
      } `}
      onClick={() => setCategorie(data.id)}
    >
      <div
        className={`item-mask-txt absolute left-0 w-full z-30 px-8 opacity-0`}
      >
        <h3 className='text-xl text-center font-bold'>
          {lan === 'es' ? data.title : data.title_eng}
        </h3>
      </div>
      <img
        src={`/assets/images/${data.image}`}
        className='item-mask-image mask-outline'
      />

      <div className={`text-xl text-center font-bold lg:hidden`}>
        {lan === 'es' ? data.title : data.title_eng}
      </div>
    </div>
  )
}

export default Item
