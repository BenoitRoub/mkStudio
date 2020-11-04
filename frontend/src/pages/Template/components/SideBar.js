import React, { useContext, useState } from "react";
import { UserContext } from "../../../hoc/UserContext";
import { Typography, makeStyles, Menu, MenuItem } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

import { MdKeyboardArrowDown } from "react-icons/md";
import { AuthContext } from "../../../hoc/Authorization";

function SideBar({ children }) {
  const { user, setUser } = useContext(UserContext);
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  return (
    <div className={classes.SideBar}>
      <div className={classes.avatarContainer}>
        <AvatarDefault />
        <Typography className={classes.name}>
          {user ? user.email : <Skeleton width={160} />}
        </Typography>
        <MdKeyboardArrowDown
          className={classes.dropDown}
          onClick={(e) => setAnchorEl(e.currentTarget)}
        />
        <AvatarMenu anchorEl={anchorEl} handleClose={() => setAnchorEl(null)} />
      </div>
      {children}
    </div>
  );
}

const useStyles = makeStyles((theme) => {
  return {
    SideBar: {
      width: "20%",
      position: 'relative',
      overflow: 'hidden',
    },
    avatarContainer: {
      position: "absolute",
      top: theme.value.absoluteTop,
      left: 16,
      display: "flex",
      alignItems: "center",
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
    name: {
      width: 'calc(100% - 12px - 12px - 40px - 50px)',
      marginLeft: 12,
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: "hidden"
    },
    dropDown: {
      marginLeft: 12,
      fontSize: 16,
      cursor: "pointer",
    },
    menu: {
      marginTop: 12,
      "& .MuiPaper-root": {
        borderRadius: 12,
      },
    },
    menuItem: {
      color: "#5348E3",
      "&:hover": {
        background: "white",
      },
    },
  };
});

function AvatarMenu({ anchorEl, handleClose }) {
  const authContext = useContext(AuthContext);
  const classes = useStyles();
  return (
    <Menu
      id="simple-menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      className={classes.menu}
    >
      <MenuItem
        onClick={() => authContext.setAuthToken()}
        className={classes.menuItem}
      >
        Déconnexion
      </MenuItem>
    </Menu>
  );
}

function AvatarDefault() {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 40 40"
      xmlSpace="preserve"
      width={40}
      height={40}
    >
      <g>
        <path
          fill="#ffbe16"
          d="M19.1,20c-7.3-5.8-16-8.5-16.1-8.5c-1.4,2.6-2.2,5.6-2.2,8.8c0,10.5,8.5,19,19,19c2.2,0,4.3-0.4,6.3-1.1
		C19.9,33.6,18.5,26.6,19.1,20z"
        />
        <path
          fill="#b6d0e6"
          d="M24.2,1.8c-1.4-0.3-2.9-0.6-4.5-0.6c-7.3,0-13.7,4.1-16.8,10.2c0.1,0,8.9,2.7,16.1,8.5
		C19.8,10.6,24.1,2,24.2,1.8z"
        />
        <path
          fill="#5348e3"
          d="M24.2,1.8C24.2,1.8,24.2,1.8,24.2,1.8C24.1,2,19.8,10.6,19.1,20c2.4,1.9,4.7,4.2,6.4,6.9
		c1.9,2.9,3.2,6.3,3.2,10.2c6-3.2,10.1-9.5,10.1-16.8C38.8,11.3,32.6,3.8,24.2,1.8z"
        />
        <path
          fill="#f98e73"
          d="M25.5,26.8c-1.7-2.7-4-4.9-6.4-6.9c-0.5,6.7,0.9,13.7,7,18.2c0,0,0,0,0,0c0.9-0.3,1.8-0.7,2.6-1.1
		C28.6,33.2,27.4,29.8,25.5,26.8z"
        />
      </g>
    </svg>
  );
}

export default SideBar;
