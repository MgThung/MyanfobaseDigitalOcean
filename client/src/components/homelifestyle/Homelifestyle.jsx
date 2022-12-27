import { Box, Container, Grid, Typography } from "@mui/material";
import "./homelifestyle.css";
import Lifestylenew from "./Lifestylenew";
import SponserContent from "./SponserContent";

export default function Homelifestyle() {
  return (
    <section className="container LifestyleSect">
      <Typography variant="h4" fontWeight="bold" className="popular-title">
        Lifestyle News
      </Typography>
      <span className="Lifeline"></span>
      <Box>
        <div id="lifestyles-New">
          <Container maxWidth="lg">
            <Grid container direction="row" spacing={3}>
              <Grid item xl={8} lg={8} md={12} sm={12} xs={12}>
                <Lifestylenew />
              </Grid>
              <Grid item xl={4} lg={4} md={12} sm={12} xs={12}>
                <SponserContent />
              </Grid>
            </Grid>
          </Container>
        </div>
      </Box>
    </section>
  );
}
