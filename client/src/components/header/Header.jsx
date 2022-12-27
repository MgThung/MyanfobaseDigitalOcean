import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Dropdown from "./dropdown/Dropdown";
import Language from "./dropdown/Language";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../../features/auth/authSlice";
import "./header.css";
import {
  AppBar,
  Toolbar,
  Stack,
  Typography,
  Button,
  IconButton,
  useMediaQuery,
  useTheme,
  Grid,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Toggle from "../toggle/Toggle";
import { getCate } from "../../features/categories/categorySlice";
import DrawerComp from "./Darwer";

export default function Header() {
  const [dropdown, setDropdown] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [open, setOpen] = useState(false);

  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  const { categories, isLoading, isError, message } = useSelector(
    (state) => state.categories
  );
  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    dispatch(getCate());
  }, []);

  return (
    <>
      <AppBar
        position="fixed"
        z-index="999"
        style={{ backgroundColor: "#15568e", padding: "0 30px" }}
      >
        <Toolbar color="#15568e">
          {isMatch ? (
            <>
              <Grid
                container
                my={2}
                sx={{ margin: "auto", alignItems: "center", height: "6rem" }}
              >
                <Grid item xs={5} sm={8} className="headerGrid">
                  <Link to="/" className="nav-logo">
                    <img src="./images/homeimgs/logo2.png" alt="" />
                  </Link>
                </Grid>
                <Grid item xs={7} sm={4} className="headerGrid">
                  <Grid
                    container
                    my={3}
                    sx={{ margin: "0", alignItems: "center" }}
                  >
                    <Grid item xs={6}>
                      <Link to="/subscribe" className="flex">
                        <Button
                          sx={{
                            color: "white",
                            border: "2px solid white",
                            padding: "5px 10px",
                            borderRadius: "4px",
                            fontSize: "12px",
                            "&:hover": {
                              backgroundColor: "rgb(255, 174, 0)",
                              color: "black",
                            },
                          }}
                          style={{ color: "white", border: "2px solid white" }}
                        >
                          Subscribe
                        </Button>
                        {/* <button className="subscribebtn">Subscribe</button> */}
                      </Link>
                    </Grid>

                    <Grid item xs={6}>
                      {user !== null && user.login === true ? (
                        <>
                          <div className="dorpmenu-container">
                            <div
                              className="login"
                              onClose={() => setOpen(false)}
                            >
                              <div className="profile-img">
                                {user.profilePicture === [] ||
                                user.profilePicture[0] === "" ||
                                user.profilePicture.length === 0 ? (
                                  <img
                                    onClick={() => {
                                      setOpen(!open);
                                    }}
                                    src="./images/userprofile/defaultuserprofile.png"
                                    alt=""
                                  />
                                ) : (
                                  <img
                                    onClick={() => {
                                      setOpen(!open);
                                    }}
                                    src={user.profilePicture[0].filePath}
                                    // src={`https://desolate-hollows-16342.herokuapp.com/${user.profilePicture[0].filePath}`}
                                    // src={`http://localhost:8080/${user.profilePicture[0].filePath}`}
                                    alt=""
                                  />
                                )}
                              </div>

                              {/* <i
                      id="loginsetting"
                      class="fa-solid fa-bars"
                      onClick={() => {
                        setOpen(!open);
                      }}
                    ></i> */}
                            </div>
                            <div
                              id="dropdown-menu"
                              className={` ${open ? "active" : "inactive"}`}
                            >
                              <h3>{user.username}</h3>
                              <ul>
                                <DropdownItem
                                  data={"fa-solid fa-user"}
                                  text={"My Profile"}
                                  pathLink={"/profile"}
                                />
                                <DropdownItem
                                  data={"fa-solid fa-user-pen"}
                                  text={"Edit Profile"}
                                  pathLink={"/editprofile"}
                                />
                                <Toggle />

                                <li className="dropdownItem">
                                  <i class="fa-solid fa-right-from-bracket"></i>
                                  <button onClick={onLogout}>Logout</button>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          <Link to="/login" className="login">
                            <Typography
                              variant="h6"
                              color="white"
                              fontSize={17}
                            >
                              <i class="fa-solid fa-right-to-bracket"></i>
                              Login
                            </Typography>
                            {/* <span className="capitalize">Login</span> */}
                          </Link>
                        </>
                      )}
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>

              <DrawerComp />
            </>
          ) : (
            <>
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                sx={{ flexGrow: 1 }}
              >
                <Link to="/" className="nav-logo">
                  <img src="./images/homeimgs/logo2.png" alt="" />
                </Link>
                <Link to="/" className="flex hoverclor navli">
                  <Typography variant="h6" color="white" fontSize={17}>
                    <i class="uil uil-home headericon"></i>
                  </Typography>
                  <Typography variant="h6" color="white" fontSize={17}>
                    Home
                  </Typography>
                  {/* <span className="capitalize">Home</span> */}
                </Link>
                <Link to="/search" className="flex hoverclor navli">
                  <Typography variant="h6" color="white" fontSize={17}>
                    <i class="uil uil-search headericon"></i>
                  </Typography>
                  <Typography variant="h6" color="white" fontSize={17}>
                    Search
                  </Typography>
                  {/* <span className="capitalize">Search</span> */}
                </Link>
                <div
                  className="homeMenu navli"
                  onMouseOver={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <div className="flex hoverclor">
                    <Typography variant="h6" color="white" fontSize={17}>
                      <i class="uil uil-list-ul headericon"></i>
                    </Typography>
                    <Typography variant="h6" color="white" fontSize={17}>
                      Menu
                    </Typography>

                    {/* <span className="capitalize">Menu</span> */}
                  </div>
                  {dropdown && (
                    <Dropdown
                      user={user}
                      categories={categories && categories}
                      className="dropdownWrap"
                    />
                  )}
                </div>

                <Link to="/post" className="flex hoverclor navli">
                  <Typography variant="h6" color="white" fontSize={17}>
                    <i class="uil uil-plus-circle headericon"></i>
                  </Typography>
                  <Typography variant="h6" color="white" fontSize={17}>
                    Post
                  </Typography>
                  {/* <span className="capitalize">Post</span> */}
                </Link>

                {user !== null && user.isAdmin === true ? (
                  <Link to="/admin" className="flex hoverclor navli">
                    <Typography variant="subtitle1" color="white" fontSize={17}>
                      <i class="uil uil-user-square headericon"></i>
                    </Typography>
                    <Typography variant="subtitle1" color="white" fontSize={17}>
                      Admin
                    </Typography>

                    {/* <span className="capitalize">Admin</span> */}
                  </Link>
                ) : (
                  " "
                )}
              </Stack>
              <Stack direction="row" spacing={6} alignItems="center">
                <Link to="/subscribe" className="flex">
                  <Button
                    className="btnSubs"
                    sx={{
                      color: "white",
                      border: "2px solid white",
                      padding: { md: "6px 5px", lg: "8px 17px" },
                      borderRadius: "4px",
                      fontSize: { md: "14px", lg: "17px" },
                      "&:hover": {
                        backgroundColor: "rgb(255, 174, 0)",
                        color: "black",
                      },
                    }}
                    style={{ color: "white", border: "2px solid white" }}
                  >
                    Subscribe
                  </Button>
                  {/* <button className="subscribebtn">Subscribe</button> */}
                </Link>
                <div className="language">
                  <Language label="choose an language" />
                </div>
                {user !== null && user.login === true ? (
                  <>
                    <div className="dorpmenu-container">
                      <div className="login" onClose={() => setOpen(false)}>
                        <div className="profile-img">
                          {user.profilePicture === [] ||
                          user.profilePicture[0] === "" ||
                          user.profilePicture.length === 0 ? (
                            <Link to={"/profile"}>
                              <img
                                src="./images/userprofile/defaultuserprofile.png"
                                alt=""
                              />
                            </Link>
                          ) : (
                            <Link to={"/profile"}>
                              <img
                                src={user.profilePicture[0].filePath}
                                // src={`http://localhost:8080/${user.profilePicture[0].filePath}`}
                                alt=""
                              />
                            </Link>
                          )}
                        </div>
                        <IconButton
                          sx={{
                            color: "white",
                            marginLeft: "auto",
                            width: "1.5em",
                            height: "1.5em",
                          }}
                          onClick={() => {
                            setOpen(!open);
                          }}
                        >
                          <MenuIcon color="white" sx={{ fontSize: "25px" }} />
                        </IconButton>
                        {/* <i
                      id="loginsetting"
                      class="fa-solid fa-bars"
                      onClick={() => {
                        setOpen(!open);
                      }}
                    ></i> */}
                      </div>
                      <div
                        id="dropdown-menu"
                        className={` ${open ? "active" : "inactive"}`}
                      >
                        <h3>{user.username}</h3>
                        <ul>
                          <DropdownItem
                            data={"fa-solid fa-user"}
                            text={"My Profile"}
                            pathLink={"/profile"}
                          />
                          <DropdownItem
                            data={"fa-solid fa-user-pen"}
                            text={"Edit Profile"}
                            pathLink={"/editprofile"}
                          />
                          <Toggle />

                          <li className="dropdownItem">
                            <i class="fa-solid fa-right-from-bracket"></i>
                            <button onClick={onLogout}>Logout</button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <Link to="/login" className="login">
                      <Typography variant="h6" color="white" fontSize={17}>
                        <i class="fa-solid fa-right-to-bracket"></i>
                        Login
                      </Typography>
                      {/* <span className="capitalize">Login</span> */}
                    </Link>
                  </>
                )}
              </Stack>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}

function DropdownItem(props) {
  return (
    <li className="dropdownItem">
      {/* <img src={props.img}></img> */}
      <i class={props.data}></i>
      <Link to={`${props.pathLink}`}>{props.text}</Link>
    </li>
  );
}
