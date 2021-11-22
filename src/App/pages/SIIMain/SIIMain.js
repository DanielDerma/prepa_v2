import React from "react";
import Grid from "@mui/material/Grid";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { infoPropsStudent, students } from "../../services/data";
import Table from "../../LayoutTable/LayoutTable";

const SIIMain = () => {
  return (
    <Grid container spacing={3}>
      <Table
        rows={students}
        infoProps={infoPropsStudent}
        title="Fisica Primero B"
        isSiiMain={true}
      />
      <Table
        rows={students}
        infoProps={infoPropsStudent}
        title="Fisica Primero B"
        isSiiMain={true}
      />
      <Table
        rows={students}
        infoProps={infoPropsStudent}
        title="Fisica Primero B"
        isSiiMain={true}
      />
      <Table
        rows={students}
        infoProps={infoPropsStudent}
        title="Fisica Primero B"
        isSiiMain={true}
      />
      <Table
        rows={students}
        infoProps={infoPropsStudent}
        title="Fisica Primero B"
        isSiiMain={false}
      />
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
