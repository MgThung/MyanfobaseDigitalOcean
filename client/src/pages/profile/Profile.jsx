import React from "react";
import ProImg from "../../components/profile/ProImg";
import ProLeft from "../../components/profile/ProLeft";
import ProRight from "../../components/profile/ProRight";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./profilepage.css";
import { Box, Tab, Grid } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import ProAbout from "../../components/profile/ProAbout";
import Savepost from "../../components/profile/Savepost";

export default function Profile() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const [value, setValue] = useState("mypost");
  const handleChange = (e, newvalue) => {
    setValue(newvalue);
  };
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);
  return (
    <>
      <ProImg user={user} />
      <section className="container proFiledet">
        <Grid container my={2} spacing={5} sx={{ margin: "auto" }}>
          <Grid item sm={3.6} md={3.6} xl={3.6}>
            <ProLeft />
          </Grid>
          <Grid item sm={8.4} md={8.4} xl={8.4}>
            <ProRight />
          </Grid>
        </Grid>
      </section>
      <section className="container proFilemobile">
        <Box>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="My Post" value="mypost" />
                <Tab label="About Profile" value="aboutprofile" />
                <Tab label="Save Post" value="savepost" />
              </TabList>
            </Box>
            <TabPanel value="mypost">
              <ProRight />
            </TabPanel>
            <TabPanel value="aboutprofile">
              <ProAbout />
            </TabPanel>
            <TabPanel value="savepost">
              <Savepost />
            </TabPanel>
          </TabContext>
        </Box>
      </section>
    </>
  );
}
