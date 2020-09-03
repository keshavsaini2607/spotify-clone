import React from 'react'
import './SongRow.css'
import { useDataLayerValue } from './DataLayer'


function SongRow({ track = "test" }) {

    const [{ item, playing}, dispatch] = useDataLayerValue()

   const getSongInfo = event => {
        dispatch({
            type: "SET_SONG",
            item: track
        })
        console.log(track)
       
   }

    return (
        <div className="songRow" onClick={getSongInfo}>
            <img
            className="songRow__album"
            src={track.album.images[0].url} alt="" />
            <div className="songRow__info">
                <h1>{track.name}</h1>
                <p>
                    {track.artists.map((artist) => artist.name).join(",")} -{" "}
                    {track.album.name}
                </p>
            </div>
        </div>
    )
}

export default SongRow
