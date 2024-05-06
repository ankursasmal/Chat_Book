import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
  import Middlepart from './components/Middlepart.jsx';
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
import Live from './video/Live.jsx';
import SaveVedio from './video/SaveVedio.jsx';
import Explore from './video/Explore.jsx';
import SaveUi from './Grid1Save/SaveUi.jsx';
import SaveHome from './Grid1Save/SaveHome.jsx';
import ForLaterYou from './Grid1Save/ForLaterYou.jsx';
import MemoryHome from './Grid1Memory.jsx/MemoryHome.jsx';
import MemoryUi from './Grid1Memory.jsx/MemoryUi.jsx';
import Notification from './Grid1Memory.jsx/Notification.jsx';
import Hide_people from './Grid1Memory.jsx/Hide_people.jsx';
import Hide_Date from './Grid1Memory.jsx/Hide_Date.jsx';
import FeedUi from './Feed/FeedUi.jsx';
import Allfeed from './Feed/Allfeed.jsx';
import FavoriteFeed from './Feed/FavoriteFeed.jsx';
import FriendFeeds from './Feed/FriendFeeds.jsx';
import GroupFeed from './Feed/GroupFeed.jsx';
import PagesFeed from './Feed/PagesFeed.jsx';
import MarketplaceUi from './MarketPlace/MarketplaceUi.jsx';
import NotificationMarketplace from './MarketPlace/NotificationMarketplace.jsx';
import InboxMarketplace from './MarketPlace/InboxMarketplace.jsx';
import GroupUi from './Groups/GroupUi.jsx';
import Your_feed_Groups from './Groups/Your_feed_Groups.jsx';
import DiscoveriesGroup from './Groups/DiscoveriesGroup.jsx';
import Your_groups from './Groups/Your_groups.jsx';
import Modal_profile from './components/Modal_profile.jsx';
import VedioSearch from './video/VedioSearch.jsx';
import AllMarketThing from './MarketPlace/AllMarketThing.jsx';
import CategoriesItems from './MarketPlace/CategoriesItems.jsx';

 const router = createBrowserRouter([
 //for nav routing
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
      path: "/test",
    element:<Modal_profile/>,
    },
  ]
  },
  //for nav under vedio section routing
  {
    path: "/vedios",
    element:<Vedio/>,
    children:[
      {
        // under child by default <VedioContant/> at sama rout
        path: "/vedios",
    element:<VedioContant/>,
      },
      {
        path: "/vedios/search",
        element:<VedioSearch/>,
          },
      {
      path: "/vedios/vedioContant",
      element:<VedioContant/>,
        },
      ,{
        path: "/vedios/live",
        element:<Live/>,
          
      }
      ,{
        path: "/vedios/shows",
        element:<Live/>,
          
      },{
        path: "/vedios/savevideo",
        element:<SaveVedio/>,
          
      }
      ,{
        path: "/vedios/explore",
        element:<Explore/>,
          
      }
    ]
  },
  //for nav under friend section roution
  {
    path: "/friends",
  element:<SecondUiPage/>,
  children:[
    {
      path: "/friends",
  element:<Friends/>,
    },
    {
      path: "/friends/closefriend",
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
//for nav->friend->custom section routing
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
// for grid1-> save section routing
{
  path: "/save",
      element:<SaveUi/>,
      children:[
        {
          path: "/save",
          element:<SaveHome/>,
        
        },{
          path: "/save/for-later",
          element:<ForLaterYou/>,
        
        },
      ]
},
// for grid1 -> memories section
{
  path: "/memories",
      element:<MemoryUi/>,
      children:[
        {
          path: "/memories",
          element:<MemoryHome/>,
        
        },
        {
          path: "/memories/notification",
          element:<Notification/>,
        
        },
        {
          path: "/memories/hide-people",
          element:<Hide_people/>,
        
        },
        {
          path: "/memories/hide-date",
          element:<Hide_Date/>,
        
        },
           
      ]
},
// for grid1-> feed section routing
{
  path: "/feeds",
      element:<FeedUi/>,
      children:[
        {
          path: "/feeds",
          element:<Allfeed/>,
        
        },
        {
          path:'/feeds/favorite',
          element:<FavoriteFeed/>
        },{
          path:'/feeds/friend',
          element:<FriendFeeds/>
        },
        {
          path:'/feeds/groups',
          element:<GroupFeed/>
        },
        {
          path:'/feeds/pages',
          element:<PagesFeed/>
        }, 
           
      ]
},
// for nav/grid1-> marketplace routing
{
  path: "/market-place",
      element:<MarketplaceUi/>,
      children:[
        {
          path: "/market-place",
          element:<AllMarketThing/>,
        
        },
        {
          path: "/market-place/notification",
          element:<NotificationMarketplace/>,
        
        },
        {
          path: "/market-place/Inbox",
          element:<InboxMarketplace/>,
        
        },
        {
          path: "/market-place/Categories/:itemsType",
          element:<CategoriesItems/>,
        
        },

      ]
      },
      {
        path: "/groups",
            element:<GroupUi/>,
            children:[
              {
                path: "/groups",
                element:<Your_feed_Groups/>,
              
              },
              {
                path: "/groups/discover",
                element:<DiscoveriesGroup/>,
              
              },
              {
                path: "/groups/your-groups",
                element:<Your_groups/>,
              
              },
            ]
            }

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
