import { Box } from "@mui/system";
import React from "react";
import { Button, Divider, Grid, Typography } from "@mui/material";
import TableSet from "./Tables/DataTable";
import Search from "./Search";

const LayoutTable = ({ title = "Personal del Instituto", rows, infoProps }) => {
  return (
    <>
      <Grid item xs={12}>
        <Grid item xs={12}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h5" component="h2" sx={{ display: "inline" }}>
              {title}
            </Typography>
            <Box>
              <Search size="medium" />
            </Box>
          </Box>
          <Divider sx={{ mb: 1 }} />
        </Grid>
        <Grid item xs={12}>
          <TableSet rows={rows} infoProps={infoProps} />
        </Grid>

        <Grid
          item
          xs={12}
          sx={{ display: "flex", flexDirection: "row-reverse" }}
        >
          <Button variant="outlined" size="large" sx={{ mr: 2 }}>
            Añadir
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default LayoutTable;
