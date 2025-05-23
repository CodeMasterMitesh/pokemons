import { configureStore } from '@reduxjs/toolkit'
import auth from './auth'
import battle from './battle'
import chat from './chat'
import friend from './friends'
import packages from './packages'
import pokemon from './pokemon'
import other from './other'
import extras from './extras'
import assistance from './assistance'
import pages  from './pages'
import settings  from './settings'
export const store = configureStore({
    reducer:{
        auth,
        assistance,
        extras,
        chat,
        friend,
        packages,
        pokemon,
        other,
        pages,
        settings,
        battle
    }
})