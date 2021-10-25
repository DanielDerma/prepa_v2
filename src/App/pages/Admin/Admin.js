import { Grid } from "@mui/material";
import React from "react";
import Table from "../../LayoutTable/LayoutTable";
import {
  infoPropsStudent,
  rowsStudents,
  infoPropsInstructor,
  rowsInstructor,
} from "../../services/data";

const Admin = () => {
  return (
    <Grid container spacing={3}>
      <Table
        rows={rowsInstructor}
        title="Personal Docente"
        infoProps={infoPropsInstructor}
      />
      <Table
        rows={rowsStudents}
        infoProps={infoPropsStudent}
        title="Estudiantil"
      />
    </Grid>
  );
};

export default Admin;
