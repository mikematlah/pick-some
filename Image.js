import React,{useContext,useRef} from "react"
import { Context } from "../components/Context"
import { FaHeart} from "react-icons/fa";
import { AiFillPlusCircle , AiOutlineCheckSquare } from "react-icons/ai"
import PropTypes from 'prop-types'




function Image({className,img}){
    const [hovered,setHovered] = React.useState(false)
    const {toggleFavorited,addToTheCart,findInCart,removeFromCart} = useContext(Context)

    
   
    const heartIcon = img.isFavorite ?
     <FaHeart className='ri-heart-fill favorite'
      onClick={() => toggleFavorited(img.id)}
      onMouseEnter={()=>setHovered(true)}
      onMouseLeave={()=>setHovered(false)}
    /> :hovered?
    <FaHeart className ='ri-heart-line favorite'
    onClick={() => toggleFavorited(img.id)}
    onMouseEnter={()=>setHovered(true)}
    onMouseLeave={()=>setHovered(false)}
    /> : ''

    const cartIcon = findInCart(img.id) ?
    <AiOutlineCheckSquare
    className="ri-shopping-cart-fill cart"
    onClick ={()=>{removeFromCart(img.id)}} 
    onMouseEnter={()=>setHovered(true)}
    onMouseLeave={()=>setHovered(false)}
    /> : hovered ?

    <AiFillPlusCircle
        className="ri-add-circle-line cart" 
        onMouseEnter={()=>setHovered(true)}
        onMouseLeave={()=>setHovered(false)}
        onClick = {() => addToTheCart(img)} 
     /> : ''
 
    
    
 
                               
    return(
        <div className={`${className} image-container`}>
           
            <img  
            src={img.url}
            className='image-grid'
            onMouseEnter={()=>setHovered(true)}
            onMouseLeave={()=>setHovered(false)}
           
            />
           
            {heartIcon}
            {cartIcon}
         
          
          
  
         </div>
    )
}
   Image.propTypes = {
    className:PropTypes.string,
    img: PropTypes.shape(
        {
            id: PropTypes.string.isRequired,
            url:PropTypes.string.isRequired,
            isFavorite: PropTypes.bool 
        }
    )
   } 
     
  

export default Image

