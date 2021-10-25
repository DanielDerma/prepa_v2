import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import ChartRadar from "./Chart/ChartRadar";
import ChartBar from "./Chart/ChartBar";
import ChartBarControls from "./Chart/ChartBarControls";
import ChartRadarControls from "./Chart/ChartRadarControls";
import ChartNumbers from "./Chart/ChartNumbers";

const MedicionX = () => {
  return (
    <>
      <Grid item xs={12} md={4} lg={4}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            // height: 600,
          }}
        >
          <ChartNumbers />
        </Paper>
      </Grid>
      <Grid item xs={12} md={4} lg={4}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            // height: 600,
          }}
        >
          <ChartNumbers />
        </Paper>
      </Grid>
      <Grid item xs={12} md={4} lg={4}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            // height: 600,
          }}
        >
          <ChartBarControls />
        </Paper>
      </Grid>
    </>
  );
};

const DashboardPage = () => {
  return (
    <Grid container spacing={3}>
      {/* Chart */}
      <MedicionX />
      <Grid item xs={12} md={4} lg={12}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: 450,
          }}
        >
          <ChartBar />
        </Paper>
      </Grid>
      <Grid item xs={12} md={4} lg={4}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: 600,
          }}
        >
          <ChartRadarControls />
        </Paper>
      </Grid>
      {/* Chart */}
      <Grid item xs={12} md={8} lg={8}>
        <Paper
          sx={{
            display: "flex",
            justifyContent: "center",
            height: 600,
            mx: "auto",
          }}
        >
          <ChartRadar />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default DashboardPage;
