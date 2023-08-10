import { useEffect, useState } from 'react'
import { useDataContext } from '../../context/lanContext'
import { IconScroll } from '../../icons/icons'
import { categories } from '../../data/data'
import List from './List'
import Item from './ItemMain'

const Creaciones = () => {
  const { lan, category, setCategory } = useDataContext()

  useEffect(() => {
    if (category === 0) return
    const targetElement = document.querySelector('#list')
    window.scrollTo({
      top: targetElement.offsetTop - 100,
      behavior: 'smooth',
    })
  }, [category])

  return (
    <section className='px-12 py-28'>
      <div className='flex justify-between items-center mb-20'>
        <div>
          <h1 className='font-bold text-6xl'>
            {lan === 'es' ? 'creaciones' : 'creations'}{' '}
            <span className='font-extraitalic'>feas</span>
          </h1>
        </div>
        <div>
          <IconScroll />
        </div>
      </div>
      <div className='flex flex-wrap gap-y-12 justify-center'>
        {categories.map((item) => (
          <Item
            key={item.id}
            data={item}
            categorie={category}
            setCategorie={setCategory}
          />
        ))}
      </div>

      {category !== 0 && <List categorie={category} />}
    </section>
  )
}

export default Creaciones
