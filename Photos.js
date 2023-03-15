import React,{useContext} from "react"
import {getClass} from '../utils/index'
import Image from '../components/Image'
import { Context } from "../components/Context"



function Photos() {
    const {photos} = useContext(Context)
    
    const imageElements = photos.map((img) => {
    
        return(
            <Image   key={img.id} img={img} className={getClass(photos.indexOf(img))} /> 
        )
       
        
        })
    
    return (
        <main className="photos">
            {imageElements}
        </main>
    )
}

export default Photos