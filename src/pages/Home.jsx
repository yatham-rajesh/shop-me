import { useContext, useEffect } from 'react'
import Card from '../components/Card.jsx'
import FilterProducts from '../components/FilterProducts.jsx'
import { ProductContex } from '../context/Product'
import '../App.css'



export default function Home() {

    const {products} = useContext(ProductContex);

    return (<div className='main-container'>
        <div>
           <FilterProducts/>
        </div>
        <div className="cards">
          
            {products.map((product) => {
                return (
                    <Card key={product.id} product={product} />
                )
            })}
        </div>
    </div>)
}