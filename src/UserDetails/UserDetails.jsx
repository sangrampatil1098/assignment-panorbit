import React, { useState } from "react";
import { useContext } from "react";
import { DataContext } from "../App";
import "./UserDetails.css";
import { Link } from "react-router-dom";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function UserDetails() {
  //setting flags,
  const [showChats, setShowChats] = useState(false);
  const [arrowFlag, setArrowFlag] = useState(false);
  const [anotherId1, setAnotherId1] = useState(1);
  const [anotherId2, setAnotherId2] = useState(2);
  const [id, setUserId] = useState(1);
  const data = useContext(DataContext);
  const [userInfosec, setUserInfoSec] = useState(false);
  const [flag, setFlag] = useState(true);

  //functions to set the ID's to filter users
  const fun1 = () => {
    if (flag) {
      setUserId(2);
      setAnotherId1(2);
      setAnotherId2(1);
      setFlag(!flag);
      setUserInfoSec(!userInfosec);
    }
    if (!flag) {
      setUserId(1);
      setAnotherId1(1);
      setAnotherId2(2);
      setFlag(!flag);
      setUserInfoSec(!userInfosec);
    }
  };
  const fun3 = () => {
    setUserInfoSec(!userInfosec);
  };

  return (
    <div>
      <div className="navbar-box">
        <div className="navbar-left">
          <p>Profile</p>
        </div>
        <div className="navbar-right">
          {data.map((ele) => {
            return (
              <>
                {ele.id === id && (
                  <div className="navbar-right-box">
                    <div stayle={{ alignItems: "center" }}>
                      <img
                        src={ele.profilepicture}
                        alt=""
                        className="userimg"
                        style={{ cursor: "pointer" }}
                        onClick={() => setUserInfoSec(!userInfosec)}
                      />
                    </div>
                    <div>
                      <p
                        onClick={() => setUserInfoSec(!userInfosec)}
                        style={{ paddingLeft: "15px", cursor: "pointer" }}
                      >
                        {ele.name}
                      </p>
                    </div>
                  </div>
                )}
              </>
            );
          })}
        </div>
        {userInfosec && (
          <>
            <div className="userinfosec">
              {data.map((item) => {
                return (
                  <>
                    {item.id === id && (
                      <div>
                        <div className="userinfosecbox">
                          <img
                            src={item.profilepicture}
                            alt=""
                            className="item-pf"
                          />
                          <div className="userinfoitem">
                            <p>{item.name}</p>
                          </div>
                          <div className="userinfoitem">
                            <p>{item.email}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                );
              })}
              {data.map((item) => {
                return (
                  <>
                    {item.id === anotherId2 && (
                      <div className="userpf">
                        <div style={{ width: "107px" }}>
                          <img
                            src={item.profilepicture}
                            alt=""
                            className="pf"
                            onClick={fun1}
                          />
                        </div>
                        <div>
                          <div
                            style={{ width: "100px", cursor: "pointer" }}
                            onClick={fun1}
                          >
                            {" "}
                            {item.name}
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                );
              })}
              {data.map((item) => {
                return (
                  <>
                    {item.id === 3 && (
                      <>
                        <div className="userpf">
                          <div style={{ width: "107px" }}>
                            <img
                              src={item.profilepicture}
                              alt=""
                              className="pf"
                              onClick={fun3}
                            />
                          </div>
                          <div>
                            <div
                              style={{ width: "100px", cursor: "pointer" }}
                              onClick={fun3}
                            >
                              {item.name}
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </>
                );
              })}
              <Link to="/">
                <button className="btn">Sign Out</button>
              </Link>
            </div>
          </>
        )}
      </div>
      <div className="userdata">
        <div className="user-data-left">
          <ul className="user-options-list">
            <Link
              to="/profile"
              style={{
                textDecoration: "none",
                color: "White",
                listStyleType: "none",
              }}
            >
              <div style={{ borderBottom: "2px solid white", width: "190px" }}>
                <li className="user-options-list-items">
                  Profile{" "}
                  <ArrowForwardIosIcon
                    style={{
                      position: "absolute",

                      color: "rgb(136,136,136)",
                      backgroundColor: "white",
                      right: "-76px",
                      padding: "3px",
                      borderTopLeftRadius: "10px",
                      borderBottomLeftRadius: "10px",
                    }}
                  >
                    {" "}
                  </ArrowForwardIosIcon>
                </li>
              </div>
              <span></span>
            </Link>

            <Link
              to="/post"
              style={{
                textDecoration: "none",
                color: "White",
                listStyleType: "none",
              }}
            >
              <div style={{ borderBottom: "2px solid white", width: "190px" }}>
                <li className="user-options-list-items">Posts</li>
              </div>
            </Link>
            <Link
              to="/gallery"
              style={{
                textDecoration: "none",
                color: "White",
                listStyleType: "none",
              }}
            >
              <div style={{ borderBottom: "2px solid white", width: "190px" }}>
                <li className="user-options-list-items">Gallery</li>
              </div>
            </Link>
            <Link
              to="/todo"
              style={{
                textDecoration: "none",
                color: "White",
                listStyleType: "none",
              }}
            >
              <div style={{ borderBottom: "2px solid white", width: "190px" }}>
                <li className="user-options-list-items">ToDo</li>
              </div>
            </Link>
          </ul>
        </div>
        <div className="user-data-middle">
          <div className="user-info">
            {data.map((ele) => {
              return (
                <>
                  {ele.id === id && (
                    <div className="user-middle-data">
                      <div className="user-middle-data-img">
                        <img
                          src={ele.profilepicture}
                          alt=""
                          className="user-pf"
                        />
                      </div>
                      <div className="user-middle-data-info">
                        <p>{ele.name}</p>
                        <p>Username: {ele.username} </p>
                        <p>email: {ele.email} </p>
                        <p>phone: {ele.phone}</p>
                        <p>Website: {ele.website}</p>
                      </div>
                    </div>
                  )}
                </>
              );
            })}
          </div>
          <div className="company-info">
            {data.map((ele) => {
              return (
                <>
                  {ele.id === id && (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                      }}
                    >
                      <p>company</p>
                      <p> Name: {ele.company.name}</p>
                      <p>catchPhrase: {ele.company.catchPhrase} </p>
                      <p>bs: {ele.company.bs} </p>
                    </div>
                  )}
                </>
              );
            })}
          </div>
        </div>
        <div className="user-data-right">
          <div className="user-data-address"></div>
          {data.map((ele) => {
            return (
              <>
                {ele.id === id && (
                  <div className="address">
                    <p>Address :</p>
                    <div className="address-info">
                      <p> Street : {ele.address.street}</p>
                      <p>Suite : {ele.address.suite} </p>
                      <p>City : {ele.address.city} </p>
                      <p>Zipcode : {ele.address.zipcode} </p>
                      <div
                        styel={{
                          width: "1200px",
                          height: "1200px",
                        }}
                      >
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123115.06821520934!2d75.0391069132727!3d15.35774300591286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8d6d3a2090b17%3A0xae803e207113397!2sHubballi%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1676661572327!5m2!1sen!2sin"
                          styel={{
                            width: "1200px",
                            height: "1200px",
                          }}
                        ></iframe>
                      </div>
                      <span>Lat : {ele.address.geo.lat + "   "}</span>
                      <span>&nbsp;&nbsp;</span>
                      <span>Lng : {ele.address.geo.lng}</span>
                    </div>
                  </div>
                )}
              </>
            );
          })}
        </div>
        <div className="chatbox">
          <ChatBubbleOutlineIcon className="chatsymbol" />
          <span className="chattext">Chats</span>
          <KeyboardArrowUpIcon
            className="arrow"
            onClick={() => {
              setArrowFlag(!arrowFlag);
            }}
          />
        </div>
        {arrowFlag && (
          <div>
            <div className="chatlist">
              <div className="chatbox2">
                <ChatBubbleOutlineIcon
                  className="chatsymbol"
                  onClick={() => {
                    setArrowFlag(!arrowFlag);
                  }}
                />
                <span
                  className="chattext"
                  onClick={() => {
                    setArrowFlag(!arrowFlag);
                  }}
                >
                  Chats
                </span>
                <ExpandMoreIcon
                  className="arrow"
                  onClick={() => {
                    setArrowFlag(!arrowFlag);
                  }}
                />
              </div>
              <div className="chatusersbox">
                {data.map((ele) => {
                  return (
                    <>
                      <div className="chatusers">
                        <div style={{ padding: "5px", cursor: "pointer" }}>
                          <img
                            src={ele.profilepicture}
                            alt=""
                            style={{
                              width: "40px",
                              height: "40px",
                              borderRadius: "50%",
                              cursor: "pointer",
                            }}
                            onClick={() => setShowChats(!showChats)}
                          />
                        </div>
                        <p
                          style={{ fontSize: "10px", cursor: "pointer" }}
                          onClick={() => setShowChats(!showChats)}
                        >
                          {ele.name}
                        </p>
                        <FiberManualRecordIcon
                          style={{
                            fontSize: "small",
                            padding: "11px",
                            color: "green",
                          }}
                        />
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
      <div>
        {showChats && (
          <div className="messages">
            <div className="chat">
              {data.map((ele) => {
                return (
                  <>
                    {ele.id === 1 && (
                      <div className="chatnavbar">
                        <div>
                          <img
                            src={ele.profilepicture}
                            alt=""
                            style={{
                              width: "30px",
                              height: "30px",
                              borderRadius: "50%",
                              margin: "5px",
                            }}
                          />
                        </div>
                        <p>{ele.name}</p>
                        <ExpandMoreIcon
                          onClick={() => setShowChats(!showChats)}
                          style={{ cursor: "pointer" }}
                        />
                        <CloseIcon
                          onClick={() => setShowChats(!showChats)}
                          style={{ cursor: "pointer" }}
                        />
                      </div>
                    )}
                  </>
                );
              })}
            </div>
            <div className="texts" style={{ borderBottom: "2px solid black" }}>
              <div
                style={{
                  backgroundColor: "wheat",
                  height: "30px",
                  width: "195px",
                  marginLeft: "10px",
                }}
              >
                <p>Lorem ipsum dolor sit.</p>
              </div>
              <div
                style={{
                  backgroundColor: "wheat",
                  height: "30px",
                  width: "195px",
                  marginLeft: "50px",
                }}
              >
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
              <div>
                <p style={{ textAlign: "center", color: "light" }}> 9:16 pm</p>
              </div>
              <div
                style={{
                  backgroundColor: "wheat",
                  height: "30px",
                  width: "195px",
                  marginLeft: "10px",
                }}
              >
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
              <div
                style={{
                  backgroundColor: "wheat",
                  height: "30px",
                  width: "195px",
                  marginLeft: "50px",
                }}
              >
                <p>Lorem, ipsum.</p>
              </div>
            </div>
            <div>
              <SendIcon
                style={{
                  position: "absolute",
                  botton: "0",
                  right: "0",
                  cursor: "pointer",
                }}
              ></SendIcon>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserDetails;
