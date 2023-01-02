import React, { useState, memo } from "react";
import { Link } from "react-router-dom";
import {
  Drawer,
  IconButton,
  ListItemIcon,
  List,
  ListItemButton,
  ListItemAvatar,
  Avatar,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import "./header.css";
import Dropdown from "./dropdown/Dropdown";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../../features/auth/authSlice";
import MenuIcon from "@mui/icons-material/Menu";
import LanguageIcon from "@mui/icons-material/Language";
const pages = ["Products", "Services", "ABoutUs", "ContactUs"];
const DrawerComp = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
  };
  const { categories, isLoading, isError, message } = useSelector(
    (state) => state.categories
  );
  return (
    <React.Fragment>
      <Drawer
        anchor="right"
        open={openDrawer}
        color="rgb(21, 86, 142)"
        onClose={() => setOpenDrawer(false)}
      >
        <List sx={{ width: "200px", alignItems: "center" }}>
          <Link to="/" className=" hoverclor navli">
            <ListItem sx={{ padding: "0 16px" }}>
              <ListItemButton>
                <ListItemIcon>
                  <ListItemAvatar>
                    <Avatar>
                      <i className="uil uil-home"></i>
                    </Avatar>
                  </ListItemAvatar>
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>
          </Link>
          
          <Link to="/search" className=" hoverclor navli">
            <ListItem sx={{ padding: "0 16px" }}>
              <ListItemButton>
                <ListItemIcon>
                  <ListItemAvatar>
                    <Avatar>
                      <i className="uil uil-search"></i>
                    </Avatar>
                  </ListItemAvatar>
                </ListItemIcon>
                <ListItemText primary=" Search" />
              </ListItemButton>
            </ListItem>
          </Link>
          <ListItem
            className="homeMenu navli"
            sx={{ padding: "0 16px" }}
            onMouseOver={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
          >
            <ListItemButton>
              <ListItemIcon>
                <ListItemAvatar>
                  <Avatar>
                    <i className="uil uil-list-ul"></i>
                  </Avatar>
                </ListItemAvatar>
              </ListItemIcon>
              <ListItemText primary="Menu" />
            </ListItemButton>
          </ListItem>
          {dropdown && (
            <Dropdown
              user={user}
              categories={categories && categories}
              className="dropdownWrap"
            />
          )}

          <Link to="/post" className=" hoverclor navli">
            <ListItem sx={{ padding: "0 16px" }}>
              <ListItemButton>
                <ListItemIcon>
                  <ListItemAvatar>
                    <Avatar>
                      <i className="uil uil-plus-circle"></i>
                    </Avatar>
                  </ListItemAvatar>
                </ListItemIcon>
                <ListItemText primary="Post" />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to="/post" className=" hoverclor navli">
            <ListItem sx={{ padding: "0 16px" }}>
              <ListItemButton>
                <ListItemIcon>
                  <ListItemAvatar>
                    <Avatar>
                      <LanguageIcon />
                    </Avatar>
                  </ListItemAvatar>
                </ListItemIcon>
                <ListItemText primary="Languages" />
              </ListItemButton>
            </ListItem>
          </Link>
          {user !== null && user.isAdmin === true ? (
            <Link to="/admin" className=" hoverclor navli">
              <Link to="/post" className=" hoverclor navli">
                <ListItem sx={{ padding: "0 16px" }}>
                  <ListItemButton>
                    <ListItemIcon>
                      <ListItemAvatar>
                        <Avatar>
                          <i className="uil uil-user-square"></i>
                        </Avatar>
                      </ListItemAvatar>
                    </ListItemIcon>
                    <ListItemText primary="Admin" />
                  </ListItemButton>
                </ListItem>
              </Link>
            </Link>
          ) : (
            " "
          )}
        </List>
      </Drawer>

      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon color="white" sx={{ fontSize: "25px" }} />
      </IconButton>
    </React.Fragment>
  );
};

export default memo(DrawerComp);
