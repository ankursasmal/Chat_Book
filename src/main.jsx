import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
  import Middlepart from './components/Middlepart.jsx';
 import Slider from './components/Slider.jsx';
import SearchBar from './components/SearchBar.jsx';
 import Grid2 from './components/Grid2.jsx';
import SecondUiPage from './friends/SecondUiPage.jsx';
import Friend_request from './friends/Friend_request.jsx';
import Friends from './friends/Friends.jsx';
import Suggestion from './friends/Suggestion.jsx';
import AllFriend from './friends/AllFriend.jsx';
import BirthDay from './friends/BirthDay.jsx';
import CustomList from './friends/Customlist/CustomList.jsx';
import CloseFriend from './friends/Customlist/CloseFriend.jsx';
import Restction from './friends/Customlist/Restction.jsx';
import Acquaintances from './friends/Customlist/Acquaintances.jsx';
import CreateList from './friends/Customlist/CreateList.jsx';
import Vedio from './video/Vedio.jsx';
import VedioContant from './video/VedioContant.jsx';
 const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
       children: [
        {
        path: "/",
    element:<Middlepart/>,
       },{
       path: "/home",
       element:<Middlepart/>,
          },
     
        {
      path: "/marketplace",
    element:<SearchBar/>,
    },
    {
      path: "/groups",
    element:<Grid2/>,
    },
  ]
  },
  {
    path: "/vedios",
    element:<Vedio/>,
    children:[
      {
        path: "/vedios",
    element:<VedioContant/>,
      }
    ]
  },
  {
    path: "/friends",
  element:<SecondUiPage/>,
  children:[
    {
      path: "/friends",
  element:<Friends/>,
    },
    {
    path: "/friends/friend-request",
  element:<Friend_request/>,
  },
  {
    path: "/friends/suggestion",
  element:<Suggestion/>,
  },
  {
    path: "/friends/all-friend",
  element:<AllFriend/>,
  },
  {
    path: "/friends/birthday",
  element:<BirthDay/>,
  }
  
  ]
},

{
    path: "/friends/custom",
  element:<CustomList/>,
  children:[
     
    {
      path: "/friends/custom",
      element:<CloseFriend/>,
    },
    {
      path: "/friends/custom/restriction",
      element:<Restction/>,
    },
    {
      path: "/friends/custom/Acquaintances",
      element:<Acquaintances/>,
    },
    {
      path: "/friends/custom/createlist",
      element:<CreateList/>,
    },
  ]
   },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
