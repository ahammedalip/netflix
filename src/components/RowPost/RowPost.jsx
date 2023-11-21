import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import Youtube from 'react-youtube'
import { API_KEY, imageUrl } from '../../constants/constants'
import './RowPost.css'
import YouTube from 'react-youtube'


function RowPost(props) {
    const [movies, setMovies] = useState([])
    const [urlId, setUrlId] = useState()

    useEffect(() => {
        axios.get(props.url).then((response) => {
            console.log(response.data)
            setMovies(response.data.results)
        }).catch(err => {
            alert('Network error', err)
        })
    }, [])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        }
    }
    const handleMovie = (id)=>{
        axios.get(`/movie/${id}/videos?language=en-US&api_key=${API_KEY}`).then(response=>{
            if(response.data.results.length!== 0){
                setUrlId(response.data.results[0])
            }else{
                console.log('Video not found')
            }
        })
    }

    return (
        <>
            <div className='row'>
                <h2>{props.title}</h2>
                <div className='posters'>
                    {movies.map((obj) =>(
                        <div>
                        <img onClick={()=>(handleMovie(obj.id))} className={ props.isSmall ? 'smallPoster' : 'poster'} alt='poster' src={`${imageUrl + obj.backdrop_path}`} />
                        <h4 className='movieTitle'>{obj.original_name? obj.original_name : obj.original_title}</h4>
                        </div>
                    )
               
                )}
               

                </div>
                <div>
                    {urlId  && <YouTube opts={opts} videoId= {urlId.key} />}
                
                </div>
                       
            </div>
        </>
    )
}


export default RowPost