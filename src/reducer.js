import { act } from "react-dom/test-utils"

export const initialState = {
    user:null,
    playlist:[],
    playing:false,
    item:null,
    uri: '',
    token: ""
}

const reducer = (state, action) => {
    console.log(action)

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        
        case "SET_TOKEN":
            return{
                ...state,
                token: action.token
            } 
        case "SET_MUSIC":
            return{
                ...state,
                music: action.music
            }    

        case 'SET_PLAYLIST':
            return{
                ...state,
                playlist: action.playlist
            }
         
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly
            }  
            
        case 'SET_SONG':
            return {
                ...state,
                item: action.item
            } 
       
            
        case 'SET_PLAYING':
            return {
                ...state,
                playing: action.playing
            }    

        case 'SET_USER_PLAYLIST':
            return{
                ...state,
                userPlay: action.userPlay
            }    
        default:
            return state
    }
}

export default reducer