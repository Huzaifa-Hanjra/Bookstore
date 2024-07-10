    import React from 'react'
import list from "../../public/list.json"
const Cards = ({item}) => {
  return (
    <>
    <div className='mt-6'>
    <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white">
  <figure>
    <img className='px-3 flex flex-col'
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${item.price}</div>
      <div className="badge px-2 py-1 rounded-lg badge-outline bg-black hover:bg-pink-600 text-white duration-200">Buy Now</div>
    </div>
  </div>
</div>
    </div>
    
    </>
  )
}

export default Cards