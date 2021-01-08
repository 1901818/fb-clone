import React from 'react'
import "./Sidebar.css";
import SidebarRow from './SidebarRow';
import ChatIcon from '@material-ui/icons/Chat';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
function Sidebar() {
  return (
    <div className ="sidebar">
      <SidebarRow
        src="https://www.nicepng.com/png/full/115-1150176_employee-avatar-png-transparent-image-avatar-male.png"
        title="duziduzi"
      />
      <SidebarRow
        Icon={LocalHospitalIcon}
        title="COVID-19 Information Center"
      />  
      <SidebarRow Icon ={EmojiFlagsIcon} title="pages" />
      <SidebarRow Icon ={PeopleIcon} title ="Friends" />
      <SidebarRow Icon ={ChatIcon} title ="Messager" />
      <SidebarRow Icon ={StorefrontIcon} title="Marketplace" />
      <SidebarRow Icon = {VideoLibraryIcon} title ="Videos" />
      <SidebarRow Icon ={ExpandMoreIcon} title ="Marketplace"/>
      
    </div>
  );
}

export default Sidebar;
