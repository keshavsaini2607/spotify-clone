import React from 'react'
import './Body.css'
import Header from './Header'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'
import FavouriteIcon from '@material-ui/icons/FavoriteOutlined'
import MoreHorizIcon from '@material-ui/icons/MoreHorizOutlined'


import { useDataLayerValue } from './DataLayer';
import SongRow from './SongRow'

function Body({ spotify }) {

    const [{ discover_weekly, music, userPlay }, dispatch] = useDataLayerValue()

    const url = userPlay ? userPlay?.images[0].url : discover_weekly?.images[0].url
    const title = userPlay ? userPlay?.name : discover_weekly?.name
    const songs = music ? music?.tracks?.items : discover_weekly?.tracks?.items


    return (
        <div className="body">
            <Header spotify={spotify} />

            <div className="body__info">
                <img
                className="body__infoImage"
                src={url} 
                alt={discover_weekly?.images[0].url} />
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>{title}</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>
            <div className="body__songs">
                <div className="body__icons">
                    <PlayCircleFilledIcon className="body__shufflePlayBtn" />
                    <FavouriteIcon fontSize="large" />
                    <MoreHorizIcon />
                </div>

                {songs?.map(item => (
                    <SongRow track={item.track}  />
                ))}
                    
            </div>
        </div>
    )
}

export default Body
