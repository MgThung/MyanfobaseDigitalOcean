import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import "./profile.css";
const ProAbout = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <>
      {/* <div className="ProAbout">
        <div className="About">
          <h3>About Profile</h3>
          <span className="lasttitleline About-line"></span>
        </div>
        <div className="ProAData">
          <h4>{user.username}</h4>
          <p>" {user.bio} "</p>
          <p>{user.email}</p>
          <p>{user.bod}</p>
          <p>{user.gender}</p>
          <p>{user.address}</p>
        </div>
      </div> */}

      <Box width="95%" className="profileBox">
        <Card>
          <CardContent>
            <Typography
              gutterBottom
              variant="h3"
              sx={{
                fontSize: {
                  xs: "2.5rem",
                  sm: "3rem",
                  md: "2rem",
                  lg: "2.5rem",
                },
              }}
              component="div"
            >
              About Profile
            </Typography>
            <Typography variant="h5">{user.username}</Typography>
            <Typography variant="body1">{user.bio} </Typography>
            <Typography variant="body1">{user.email}</Typography>
            <Typography variant="body1">{user.bod}</Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default ProAbout;
