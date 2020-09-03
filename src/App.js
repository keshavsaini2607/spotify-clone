import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromResponse } from './spotify';
import Player from './Player'
import SpotifyWebApi from 'spotify-web-api-js'
import { useDataLayerValue } from './DataLayer';


const spotify = new SpotifyWebApi()

function App() {

  const [{ user, token, uri, userPlay }, dispatch] = useDataLayerValue()


  useEffect(() => {
    const hash = getTokenFromResponse()
    window.location.hash = ""
    const _token = hash.access_token
    
    if(_token){
      dispatch({
        type: "SET_TOKEN",
        token: _token
      })

      spotify.setAccessToken(_token)

      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user
        })
      })
      spotify.getUserPlaylists().then(playlist => {
        dispatch({
          type: "SET_PLAYLIST",
          playlist: playlist
        })
      })
      

      spotify.getPlaylist('37i9dQZF1EpyBTxGy95CvG').then(response => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response
          
        })
        console.log("Discover Weekly",response)
      })
      
    }
  },[])



  return (
    <div className="app">
    {
      token ? <Player spotify={spotify} /> : <Login />
    }
     
    </div>
  );
}

export default App;
