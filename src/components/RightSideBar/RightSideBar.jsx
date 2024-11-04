import React from "react";
import "./RightSideBar.scss";
import { CIcon } from "@coreui/icons-react";
import { cilBug } from "@coreui/icons";
import Broadcast from "../../../src/assets/images/Broadcast.svg";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import person1 from "../../../src/assets/images/3D05.svg";
import Female1 from "../../../src/assets/images/Female05.svg";
import person2 from "../../../src/assets/images/3D08.svg";
import person3 from "../../../src/assets/images/Male07.svg";
import person4 from "../../../src/assets/images/Male11.svg"
import Natali from "../../../src/assets/images/Natali.svg"
import Drew from "../../../src/assets/images/Drew.svg"
import Orlando from "../../../src/assets/images/Orlando.svg"
import Andi from "../../../src/assets/images/Andi.svg"
import Kate from "../../../src/assets/images/Kate.svg"
import Koray from "../../../src/assets/images/Koray.svg"
const RightSideBar = () => {
  const notifications = [
    {
      id: 1,
      icon: <CIcon icon={cilBug} className="core_icon" />,
      text: "You have a bug that needs ....",
      subtext: "Just now",
    },
    {
      id: 2,
      icon: <PersonOutlineIcon className="core_icon" />,
      text: "New user registered",
      subtext: "59 minutes ago",
    },
    {
      id: 3,
      icon: <CIcon icon={cilBug} className="core_icon" />,
      text: "You have a bug that needs ....",
      subtext: "12 hours ago",
    },
    {
      id: 4,
      icon: <img src={Broadcast} alt="Broadcast" />,
      text: "Andi Lane subscribed to you",
      subtext: "Today, 11:59 AM",
    },
  ];
  const activities = [
    { image: person1, text: "You have a bug that needs...", subtext: "Just now" },
    { image: Female1, text: "Released a new version", subtext: "59 minutes ago" },
    { image: person2, text: "Submitted a bug", subtext: "12 hours ago" },
    { image: person3, text: "Modified A data in Page X", subtext: "Today, 11:59 AM" },
    { image: person4, text: "Deleted a page in Project X", subtext: "Feb 2, 2023" },
  ];

  const contacts = [
    { name: "Natali Craig", image: Natali },
    { name: "Drew Cano", image: Drew },
    { name: "Orlando Diggs", image: Orlando },
    { name: "Andi Lane", image: Andi },
    { name: "Kate Morrison", image: Kate },
    { name: "Koray Okumus", image: Koray },
  ];
  return (
    <div className="rightsidebar1">
      <div className="first">
        <div className="title">Notifications</div>

        {notifications.map((notification) => (
          <div className="notifications_tab" key={notification.id}>
            <div className="notifications_icon">{notification.icon}</div>
            <div className="notification_subtab">
              <div className="notification_text">{notification.text}</div>
              <div className="notification_subtext">{notification.subtext}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="second">
        <div className="title">Activities</div>

        {activities.map((activity, index) => (
          <React.Fragment key={index}>
            <div className="activites_tab">
              <div className="activities_icon">
                <img src={activity.image} alt="Activity Icon" />
              </div>
              <div className="activities_subtab">
                <div className="activities_text">{activity.text}</div>
                <div className="activities_subtext">{activity.subtext}</div>
              </div>
            </div>
            {index < activities.length - 1 && <hr className="vertical_line" />} 
          </React.Fragment>
        ))}
        
      </div>

      <div className="third">
        <div className="title">Contacts</div>
        {contacts.map((contact, index) => (
          <div className="contacts_tab" key={index}>
            <div className="contacts_icon">
              <img src={contact.image} alt={`${contact.name} Icon`} />
            </div>
            <div className="contact_text">{contact.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightSideBar;
