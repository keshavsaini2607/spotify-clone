import React from 'react'
import './Footer.css'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline'
import SkipPreiousIcon from '@material-ui/icons/SkipPrevious'
import SkipNextIcon from '@material-ui/icons/SkipNext'
import ShuffleIcon from '@material-ui/icons/Shuffle'
import RepeatIcon from '@material-ui/icons/Repeat'
import { Grid, Slider } from '@material-ui/core'
import PlayListPlayIcon from '@material-ui/icons/PlaylistPlay'
import VolumeDownIcon from '@material-ui/icons/VolumeDown'
import { useDataLayerValue } from './DataLayer'
import PauseIcon from '@material-ui/icons/Pause';


function Footer() {

    const [{ item }, dispatch] = useDataLayerValue()

    return (
        <div className="footer">
            <div className="footer__left">
                <img
                className="footer__albumLogo"
                src={item?.album?.images[0].url} alt="" />
                <div className="footer__songInfo">
                    <h4>{item?.name}</h4>
                    <p>{item?.artists[0].name}</p>
                </div>
            </div>
            <div className="footer__center">
                <ShuffleIcon className="footer__green" />
                <SkipPreiousIcon className="footer__icon" />
                {item && (
                    <PauseIcon fontSize="large" className="footer__icon" />
                    
                )}
                
                
                {!item && (
                    <PlayCircleOutlineIcon fontSize="large" className="footer__icon" />
                )}
                <SkipNextIcon className="footer__icon" />
                <RepeatIcon className="footer__green" />
            </div>
            <div className="footer__right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlayListPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer