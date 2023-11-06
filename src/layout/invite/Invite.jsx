import React, { useState } from "react";
import "./Invite.scss";
import {
  inviteClose,
  inviteContact,
  inviteAccount,
  inviteAccountDesc,
} from "../../assets/img";

const Invite = () => {
  const [isClose, setIsClose] = useState(false);
  return isClose ? (
    <></>
  ) : (
    <div className="invite">
      <div className="container">
        <div className="invite__wrapper">
          <div className="invite__title">
            <h2>Friend Activity</h2>
            <div className="invite__actions">
              <img src={inviteContact} alt="" />
              <img className="close" onClick={() => setIsClose(true)} src={inviteClose} alt="" />
            </div>
          </div>
          <div className="invite__description">
            Let friends and followers on Spotify see what you’re listening to.
          </div>
          <div className="invite__friends">
            <div className="friend">
              <img src={inviteAccount} alt="" />
              <img src={inviteAccountDesc} alt="" />
            </div>
            <div className="friend">
              <img src={inviteAccount} alt="" />
              <img src={inviteAccountDesc} alt="" />
            </div>
            <div className="friend">
              <img src={inviteAccount} alt="" />
              <img src={inviteAccountDesc} alt="" />
            </div>
          </div>
          <div className="invite__settings">
            <h2>
              Go to Settings &#62; Social and enable “Share my listening
              activity on Spotify.’ You can turn this off at any time.
            </h2>
            <button>settings</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invite;
