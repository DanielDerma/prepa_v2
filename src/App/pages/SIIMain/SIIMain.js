import React from "react";
import Grid from "@mui/material/Grid";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import LayoutTable from "../../LayoutTable/LayoutTable";

function createData(id, fname, lname, grade, group, email) {
  return { id, fname, lname, grade, group, email };
}

const rows = [
  createData(
    "1",
    "Ludovico luis",
    "Vipan derma",
    "3",
    "B",
    "lvipan0@seattletimes.com"
  ),
  createData(
    "2",
    "Ludovico luis",
    "Vipan derma",
    "3",
    "B",
    "lvipan0@seattletimes.com"
  ),
  createData(
    "3",
    "Ludovico luis",
    "Vipan derma",
    "3",
    "B",
    "lvipan0@seattletimes.com"
  ),
  createData(
    "4",
    "Ludovico luis",
    "Vipan derma",
    "3",
    "B",
    "lvipan0@seattletimes.com"
  ),
  createData(
    "5",
    "Ludovico luis",
    "Vipan derma",
    "3",
    "B",
    "lvipan0@seattletimes.com"
  ),
  createData(
    "6",
    "Ludovico luis",
    "Vipan derma",
    "3",
    "B",
    "lvipan0@seattletimes.com"
  ),
  createData(
    "7",
    "Ludovico luis",
    "Vipan derma",
    "3",
    "B",
    "lvipan0@seattletimes.com"
  ),
  createData(
    "8",
    "Ludovico luis",
    "Vipan derma",
    "3",
    "B",
    "lvipan0@seattletimes.com"
  ),
  createData("9", "Amelie", "Vipan", "3", "B", "lvipan0@seattletimes.com"),
];
const SIIMain = () => {
  return (
    <Grid container spacing={3}>
      {/* <LayoutTable title="Primero B" rows={rows} />
      <LayoutTable title="Segundo B" rows={rows} />
      <LayoutTable title="Tercero B" rows={rows} /> */}
      <Fab
        color="primary"
        aria-label="add"
        sx={{
          position: "absolute",
          bottom: "3em",
          right: "3em",
        }}
      >
        <AddIcon />
      </Fab>
    </Grid>
  );
};

export default SIIMain;
