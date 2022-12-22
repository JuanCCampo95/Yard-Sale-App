import React, {useContext} from 'react'
import AppContext from '@context/AppContext';
import iconcart from '@icons/bt_add_to_cart.svg'

const ProductItem = ({product}) => {

    const { addToCart } = useContext(AppContext);
    
    const handleClick = producto =>{
        addToCart(producto)
    }
    // console.log(product.product.id)
    return (
        <article className="product-card">
            <img src={product.images[0]} alt={product.title} />
            <div className="product-card-info">
                <div className="details-container">
                    <p>${product.price}</p>
                    <p>{product.title}</p>
                </div>
                <figure onClick={()=>handleClick(product)}>
                    <img src={iconcart} alt="botón de añadir a carrito de compras" />
                </figure>
            </div>
        </article>
    )
}

export default ProductItem;