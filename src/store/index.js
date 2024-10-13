import { configureStore } from '@reduxjs/toolkit'
import auth from './auth'
import chat from './chat'
import friend from './friends'
import packages from './packages'
import pokemon from './pokemon'
export const store = configureStore({
    reducer:{
        auth,
        chat,
        friend,
        packages,
        pokemon 
    }
})