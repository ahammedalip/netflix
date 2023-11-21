import React, { useEffect, useState } from 'react'
import {API_KEY, imageUrl} from "../../constants/constants";
import './Banner.css'
import axios from '../../axios'  /* axios created in file is imported*/


function Banner() {

const [movie, setMovie] = useState()

    useEffect(() => {

        const randomIndex = Math.floor(Math.random()*25)
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
            console.log(response.data.results[randomIndex])

            setMovie(response.data.results[randomIndex])
        })
   
    },[])
    
    

    
    return (
        <>  
        <div className='banner' style={{backgroundImage: `url(${movie? imageUrl+movie.backdrop_path : ""})`}}>
 
                
                <div className='content'>
                    <h1 className='title'>{movie ? movie.title : " "}</h1>
                    <div className='banner_buttons'>
                        <button className='buttons'>Play</button>
                        <button className='buttons'> My list</button>
                    </div>
                    <h1 className='description'>{movie ? movie.overview : ""}</h1>

                </div>
                <div className="fade-bottom">

                </div>
           
            </div>
        </>
    
    
    )


}
// "/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg"

export default Banner