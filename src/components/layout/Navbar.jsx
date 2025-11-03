import React from 'react';
import NavItem from './NavItem';
import homeIcon from "../../assets/navbar/home.svg"
import activeHomeIcon from "../../assets/navbar/active_home.svg"
import communityIcon from "../../assets/navbar/community.svg"
import activeCommunityIcon from "../../assets/navbar/active_community.svg"
import reservationIcon from "../../assets/navbar/reservation.svg"
import activeReservationIcon from "../../assets/navbar/active_reservation.svg"
import chatIcon from "../../assets/navbar/chat.svg"
import activeChatIcon from "../../assets/navbar/active_chat.svg"
import moreIcon from "../../assets/navbar/more.svg"
import activeMoreIcon from "../../assets/navbar/active_more.svg"

const Navbar = () => {
  return (
    <nav className="bottom-nav">
      <NavItem to="/" label="홈" icon={homeIcon} activeIcon={activeHomeIcon}/>
      <NavItem to="/community" label="커뮤니티" icon={communityIcon} activeIcon={activeCommunityIcon}/>
      <NavItem to="/reservation" label="예약" icon={reservationIcon} activeIcon={activeReservationIcon}/>
      <NavItem to="/chat" label="채팅" icon={chatIcon} activeIcon={activeChatIcon}/>
      <NavItem to="/more" label="더보기" icon={moreIcon} activeIcon={activeMoreIcon}/>
    </nav>
  );
};

export default Navbar;