import React from 'react'
const Context = React.createContext()

function ContextProvider(props){

    const [photos,setPhotos ] = React.useState([])
    const [cartItems,setCartItems] = React.useState([])
    const [ordered,setOrdered] = React.useState(false)

    

    React.useEffect(()=>{
        fetch('https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json')
        .then(res=>res.json())
        .then(data=> setPhotos(data))

    },[ContextProvider])
   
    function addToTheCart(newItem){
        setCartItems( prevValue=>[...prevValue,newItem])
        console.log(cartItems)
       
    }
    function order(){
       setOrdered(true)
       setTimeout(()=>{
        console.log('ordered')
        setOrdered(false)
        setCartItems([])
       },3000)
    }

 
    function toggleFavorited(id){
        
        const updatedArr = photos.map(photo => {
            if(photo.id === id) {
                
                return {...photo, isFavorite: !photo.isFavorite}
              
            }else {
                return {...photo}
            }
             
        })
        
       
         setPhotos(updatedArr) 
      
      }

      function findInCart(id){
        const event = (el)=> el.id === id
        return cartItems.some(event)
      }
      function removeFromCart(id){
            
            const newArrItems = cartItems.filter(el=>el.id !== id)
            setCartItems(newArrItems)
        }
        
    return(
        <Context.Provider value=
        {{
            photos,
            toggleFavorited,
            addToTheCart,
            findInCart,
            removeFromCart,
            order
            ,ordered,
            cartItems
        }}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider , Context} 