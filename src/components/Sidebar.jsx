import React, { useState } from "react";
import {
  Home as HomeIcon,
  Subscriptions as SubscriptionsIcon,
  History as HistoryIcon,
  PlaylistPlay as PlaylistPlayIcon,
  WatchLater as WatchLaterIcon,
  ThumbUp as ThumbUpIcon,
  Download as DownloadIcon,
  VideoLibrary as VideoLibraryIcon,
  MusicNote as MusicNoteIcon,
  SportsEsports as SportsEsportsIcon,
  Movie as MovieIcon,
  LiveTv as LiveTvIcon,
  Newspaper as NewspaperIcon,
  Settings as SettingsIcon,
  Flag as FlagIcon,
  HelpOutline as HelpOutlineIcon,
  Feedback as FeedbackIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";

const Sidebar = () =>{
    const [isExpanded, setIsExpanded] = useState(true)
    return (
       
        <div className= {` bg-white  shadow-lg border-r border-gray-200 transition-all duration-300 ${isExpanded ? "w-60" :"w-20"} `}>
            <div className=" flex justify-between items-center p-3 border-b border-gray-200">
                
            <ul className="">
                
                <li className=" "> <HomeIcon/>Home</li>
                <li> Shorts</li>
                <li> <SubscriptionsIcon/>Subscriptions</li>
               
            </ul>
            </div>

            <div className="p-2 border-b border-gray-300 pb-4">
                <h1>You</h1>
            <ul>
                <li><HistoryIcon/>History</li>
                <li><PlaylistPlayIcon/>Paylists</li>
                <li><VideoLibraryIcon/>Your videos</li>
                <li><WatchLaterIcon/>Watch Later</li>
                <li><ThumbUpIcon/>Liked videos</li>
                <li><DownloadIcon/>Downloads</li>
            </ul>
            </div>
            <div className="p-2 border-b border-gray-300 pb-4">
                <h1>Subscriptions</h1>
                <ul>
                    <li>TEDx Talks</li>
                    <li>Codeevolution</li>
                    <li>Brototype Malayalam</li>
                    <li>Show More</li>
                </ul>
            </div>
            <div className="p-2 border-b border-gray-300 pb-4">
                <h1>Explore</h1>
                <ul>
                    <li>Shopping</li>
                    <li><MusicNoteIcon/>Music</li>
                    <li><MovieIcon/>Movies</li>
                    <li><LiveTvIcon/>Live</li>
                    <li>Gaming</li>
                    <li><SportsEsportsIcon/>Sports</li>
                    <li><NewspaperIcon/>News</li>
                </ul>
            </div>
            <div className="p-2 border-b border-gray-300 pb-4">
                <h1>More from Youtube</h1>
                <ul>
                    <li>Youtube Premium</li>
                    <li>Youtube Studio</li>
                    <li>Youtube Music</li>
                    <li>Youtube Kids</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li><SettingsIcon/>Settings</li>
                    <li><FlagIcon/>Report history</li>
                    <li> <HelpOutlineIcon/>Help</li>
                    <li><FeedbackIcon/>send feedback</li>
                </ul>
            </div>
            
        </div>
    )
}

export default Sidebar