import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Table from "../../LayoutTable/LayoutTable";
import axios from "axios";
import { infoPropsStudent } from "../../services/data";

const Admin = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStud = async () => {
      const data = await axios("http://localhost:5000/students");
      console.log(data.data);
      setStudents(data.data);
      setIsLoading(false);
    };
    fetchStud();
  }, []);

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <Grid container spacing={3}>
      <Table
        rows={students}
        infoProps={infoPropsStudent}
        title="Estudiantil"
        isSiiMain={false}
      />
    </Grid>
  );
};

export default Admin;
