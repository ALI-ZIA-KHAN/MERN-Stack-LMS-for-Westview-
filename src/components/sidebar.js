import React from "react";
import clsx from "clsx";
import  {makeStyles}  from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";


import EditSharpIcon from '@material-ui/icons/EditSharp';
import FaceSharpIcon from '@material-ui/icons/FaceSharp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ClassRoundedIcon from '@material-ui/icons/ClassRounded';
import LockRoundedIcon from '@material-ui/icons/LockRounded';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import avatar from "../images/avatar.png"
import "./StudentPortal.css";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles({
  list: {
    width: 350,
  },
  fullList: {
    width: "auto"
  }
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    
    left: false,
   
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom"
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
    <div className = "avatartwo">
    <img src = {avatar}  />
    </div>       
      <List  className = "divmovement" >
      
        {[
          "Personlize Your Avatar",
          "Name: Nimrah Altaf Adam",
          "Class: 1-B",
          "Username: NimrahAltafAdam",
          "Password: 101"
        ].map((text, index) => (
          <ListItem  button key={text}>
            {index === 0 && <FaceSharpIcon />} 
            {index === 1 && <AccountCircleIcon />}
            
            {index === 2 && <ClassRoundedIcon />}
            {index === 3 && <AccountTreeIcon />}
            {index === 4 && <LockRoundedIcon />}
            <ListItemText   className = "sidebartext" primary={text}  /> <i class = "fas fa-edit hoverEffect" />
             
            
            
          </ListItem>
        ))}
      </List>
      
      
    </div>
  );

  return (
    <div>
      
        <React.Fragment key= "left">
          
          <IconButton onClick={toggleDrawer("left", true)}>
          <img
            style={{ zIndex:"1",width: "50px", height: "50px", borderRadius: "50px",left:"1360px", position:"absolute", top:"-110px"}}
            src={avatar}
          />
        </IconButton>
          <Drawer
            anchor="left"
            open={state["left"]}
            onClose={toggleDrawer("left", false)}>
            {list("left")}
          </Drawer>
        </React.Fragment>
      
    </div>
  );
}
