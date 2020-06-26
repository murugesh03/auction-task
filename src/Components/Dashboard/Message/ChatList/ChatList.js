import React from "react";
import { FiSearch } from "react-icons/fi";
import { chatList } from "./../../../../Data";
import "./ChatList.scss";
const ChatList = () => {
  return (
    <div className="chatlist">
      <ul>
        <li className="chatlist-search py-4">
          <FiSearch className="chatlist-search-icon" />
        </li>
        {chatList.map((c) => (
          <li key={c.altImg}>
            <img src={c.imgSrc} alt={c.altImg} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatList;
