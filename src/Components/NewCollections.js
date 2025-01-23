import React from 'react'
import Item from './Item'
import new_collection from '../Assets/new_collections.js'

export default function NewCollections() {
  return (
    <div>
        <div>
            <div className='container'>
                <h1 className='fw-bold text-center my-lg-5 my-3 text'>NEW COLLECTIONS</h1>
                <div className='row mx-lg-0 mx-2'>
                {new_collection.map((item,i) =>{
                            return(<Item key={i} id={item.id} name={item.name} image={item.image} oldPrice={item.old_price} newPrice={item.new_price}></Item>)
                        }
                        )}
                </div>
            </div>   
        </div>      
    </div>
  )
}
