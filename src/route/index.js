import MainComponent from '../view/MainComponent/MainComponent';
import LoginComponent from '../view/LoginComponent/LoginComponent';
import ForgotPassword from '../view/ForgotPassword/ForgotPassword';
import RegisterComponent from '../view/RegisterComponent/RegisterComponent';
import Home from '../view/HomePage/Home';
import ProtectedRoute from '../ProtectedRoute.js';
import Battle from '../view/HomePage/Battle';
import { useRoutes } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Packages from '../view/HomePage/Packages';
import SubLayout from '../layout/SubLayout';
import Settings from '../view/Settings/Settings';
import Notification from '../view/Settings/Notification';
import Character from '../view/Settings/Character';
import Profile from '../view/Settings/Profile';
import Create from '../view/Pages/Create';
import Fortune from '../view/Pages/Fortune';
import Hospital from '../view/Pages/Hospital';
import Modal from '../view/Pages/Modal';
import Pokebag from '../view/Pages/Pokebag';
import Pokedex from '../view/Pages/extras/Pokedex';
import Pvp from '../view/Pages/Pvp';
import RaceInvite from '../view/Pages/RaceInvite';
import Select from '../view/Pages/Select';
import Steal from '../view/Pages/Steal';
import Town from '../view/Pages/Town';
import Works from '../view/Pages/Works';
import FriendRequest from '../view/Pages/FriendRequest';
import BlockList from '../view/Pages/BlockList';
import InBox from '../view/Pages/InBox';
import Friends from '../view/Pages/social/Friends';
import FindCoach from '../view/Pages/social/FindCoach';
import ChallengeTrainer from '../view/Pages/social/ChallengeTrainer';
import Badges from '../view/Pages/extras/Badges';
import Fishery from '../view/Pages/extras/Fishery';
import Calculator from '../view/Pages/assistance/Calculator';
import PokemonGuide from '../view/Pages/assistance/PokemonGuide';
import PokemonJudge from '../view/Pages/assistance/PokemonJudge';
import GeneralStatistics from '../view/Pages/others/GeneralStatistics';
import PokemonSpecialist from '../view/Pages/others/PokemonSpecialist';
import HouseSeller from '../view/Pages/others/HouseSeller';
import GoldMarket from '../view/Pages/GoldMarket';
import Classification from '../view/Pages/Classification';
import City from '../view/Pages/city/City';
import Backpack from '../view/Pages/Backpack';
import Map from '../view/Pages/Map';
import PokemonProfile from '../view/Pages/PokemonProfile';
import NPCs from '../view/Pages/NPCs';
import TransferValue from '../view/Pages/TransferValue';
import Conversation from '../view/Pages/conversation';
import PokemonBox from '../view/Pages/pokemonbox/PokemonBox';
import ChallangeRequest from '../view/Pages/ChallangeRequest';
import GYMs from '../view/Pages/city/GYMs';
import PockemonMarket from 'view/Pages/PockemonMarket';
import Travel from 'view/Pages/city/Travel';
import Fountain from 'view/Pages/city/Fountain';
import Casino from 'view/Pages/city/Casino';
import Traders from 'view/Pages/city/Traders';
import Daycare from 'view/Pages/city/Daycare';
import Moves from 'view/Pages/city/Moves';

const MainRoutes = {
    path: '/',
    element: <MainLayout />,  // MainLayout wraps all child components
    children: [
        {
            path: '/',    
            element: <MainComponent />
        },
        {
            path: '/login',    
            element: <LoginComponent />
        },
        {
            path: '/register', 
            element: <RegisterComponent />
        },
        {
            path: '/forgot-password', 
            element: <ForgotPassword />
        },
        {
            path: '/', 
            element: <ProtectedRoute />,
            children:[
                {
                    path: '/home', 
                    element: <Home />
                },
                {
                    path: '/', 
                    element: <SubLayout />,
                    children:[
                        {
                            path: '/gold-market', 
                            element: <GoldMarket />
                        },
                        {
                            path: '/casino', 
                            element: <Casino />
                        },
                        {
                            path: '/moves', 
                            element: <Moves />
                        },
                        {
                            path: '/daycare', 
                            element: <Daycare />
                        },
                        {
                            path: '/traders', 
                            element: <Traders />
                        },
                        {
                            path: '/market', 
                            element: <PockemonMarket />
                        },
                        {
                            path: '/travel', 
                            element: <Travel />
                        },
                        {
                            path: '/fountain', 
                            element: <Fountain />
                        },
                        {
                            path: '/challange-request', 
                            element: <ChallangeRequest />
                        },
                        {
                            path: '/conversation', 
                            element: <Conversation />
                        },
                        {
                            path: '/pokemon-box', 
                            element: <PokemonBox />
                        },
                        {
                            path: '/classification', 
                            element: <Classification />
                        },
                        {
                            path: '/pokemon-profile', 
                            element: <PokemonProfile />
                        },
                        {
                            path: '/transfer-value', 
                            element: <TransferValue />
                        },
                        {
                            path: '/gym', 
                            element: <GYMs />
                        },
                        {
                            path: '/map', 
                            element: <Map />
                        },
                        {
                            path: '/npcs', 
                            element: <NPCs />
                        },
                        {
                            path: '/backpack', 
                            element: <Backpack />
                        },
                        {
                            path: '/city', 
                            element: <City />
                        },
                        {
                            path: '/battle', 
                            element: <Battle />
                        },
                        {
                            path: '/friend-requests', 
                            element: <FriendRequest />
                        },
                        {
                            path: '/block-list', 
                            element: <BlockList />
                        },
                        {
                            path: '/inbox', 
                            element: <InBox />
                        },
                        {
                            path: '/packages', 
                            element: <Packages />,
                        },
                        {
                            path: '/settings', 
                            element: <Settings />,
                        },
                        {
                            path: '/profile', 
                            element: <Profile />,
                        },
                        {
                            path: '/character', 
                            element: <Character />,
                        },
                        {
                            path: '/notification', 
                            element: <Notification />,
                        },
                        {
                            path: '/create', 
                            element: <Create />,
                        },
                        {
                            path: '/fortune',
                            element: <Fortune />,
                        },
                        {
                            path: '/hospital',
                            element: <Hospital />,
                        },
                        {
                            path: '/modal', 
                            element: <Modal />,
                        },
                        {
                            path: '/pokebag' ,
                            element: <Pokebag />,
                        },
                        {
                            path: '/pokedex', 
                            element: <Pokedex />,
                        },
                        {
                            path: '/pvp', 
                            element: <Pvp />,
                        },
                        {
                            path: '/raceInvite' ,
                            element: <RaceInvite />,
                        },
                        {
                            path: '/select' ,
                            element: <Select />,
                        },
                        {
                            path: '/steal', 
                            element: <Steal />,
                        },
                        {
                            path: '/town',
                            element: <Town />,
                        },
                        {
                            path: '/works', 
                            element: <Works />,
                        },
                        {
                            path: '/social',
                            children:[
                                {
                                    path: '/social/friends', 
                                    element: <Friends />,
                                },
                                {
                                    path: '/social/find-coach', 
                                    element: <FindCoach />,
                                },
                                {
                                    path: '/social/challenge-trainer', 
                                    element: <ChallengeTrainer />,
                                },
                            ] 
                        },
                        {
                            path: '/extras',
                            children:[
                                {
                                    path: '/extras/badges', 
                                    element: <Badges />,
                                },
                                {
                                    path: '/extras/fishery', 
                                    element: <Fishery />,
                                },
                                {
                                    path: '/extras/pokedex', 
                                    element: <Pokedex />,
                                },
                            ] 
                        },
                        {
                            path: '/assistance',
                            children:[
                                {
                                    path: '/assistance/calculator', 
                                    element: <Calculator />
                                },
                                {
                                    path: '/assistance/pokemon-guide', 
                                    element: <PokemonGuide />,
                                },
                                {
                                    path: '/assistance/pokemon-judge', 
                                    element: <PokemonJudge />,
                                },
                            ] 
                        },
                        {
                            path: '/others',
                            children:[
                                {
                                    path: '/others/buy-house', 
                                    element: <HouseSeller />
                                },
                                {
                                    path: '/others/pokemon-specialist', 
                                    element: <PokemonSpecialist />,
                                },
                                {
                                    path: '/others/general-statistics', 
                                    element: <GeneralStatistics />,
                                },
                            ] 
                        },
                     
                    ]
                },
            ]
        },
    ]
};

export default function ThemeRoutes() {
    return useRoutes([MainRoutes]);
};
