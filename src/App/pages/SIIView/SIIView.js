import React from "react";
import Grid from "@mui/material/Grid";

import TableSet from "../../LayoutTable/Tables/InfoTable";
const SIIView = () => {
  return (
    <Grid
      container
      spacing={3}
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      {/* Recent Orders */}
      <Grid item xs={9}>
        <TableSet />
      </Grid>
    </Grid>
  );
};

export default SIIView;
