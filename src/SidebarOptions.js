import React, { useEffect } from 'react'
import './SidebarOptions.css'
import {useDataLayerValue} from './DataLayer'
import SpotifyWebApi from 'spotify-web-api-js'

function SidebarOptions({ title, Icon, playlist }) {

    const spotify = new SpotifyWebApi()

    const [{uri, userPlay}, dispatch] = useDataLayerValue()
    
   
    const getUserPlaylist = event => {

        dispatch({
            type: "SET_USER_PLAYLIST",
            userPlay: playlist
        })
       
        dispatch({
            type: "SET_URI",
            uri: playlist.id
        })
        setUserPlay(playlist.id)
    }   

    const setUserPlay = (url) => {
        spotify.getPlaylist(url).then(
            response => {
                console.log("Sidebar>>>>>>>>>",response)
                dispatch({
                    type: "SET_MUSIC",
                    music: response
                })
            }
        )
        
    }
    

    return (
        <div className="sidebarOptions" onClick={getUserPlaylist} >
        {Icon && <Icon className="sidebar__icon" />}
           {Icon ? <h4>{title}</h4> : <p>{title}</p>}
        </div>
    )
}

export default SidebarOptions
