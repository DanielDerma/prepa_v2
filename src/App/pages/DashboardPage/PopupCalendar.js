import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import ListSubheader from "@mui/material/ListSubheader";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

export default function GroupedSelect() {
  const [subject, setSubject] = React.useState("");
  const [grade, setGrade] = React.useState("");
  return (
    <Box sx={{}}>
      <Typography>Control de grafica</Typography>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel htmlFor="grouped-select">Materia</InputLabel>
        <Select defaultValue="" id="grouped-select" label="Grouping">
          <ListSubheader>Primero</ListSubheader>
          <MenuItem value={1}>Mate 1</MenuItem>
          <MenuItem value={2}>Fisica 1</MenuItem>
          <MenuItem value={3}>Filosofia </MenuItem>
          <ListSubheader>Segundo</ListSubheader>
          <MenuItem value={4}>Mate 2</MenuItem>
          <MenuItem value={5}>Fisica 2</MenuItem>
          <MenuItem value={6}>Computacion</MenuItem>
          <ListSubheader>Tercera</ListSubheader>
          <MenuItem value={7}>Mate 3</MenuItem>
          <MenuItem value={8}>Fisica 3</MenuItem>
          <MenuItem value={9}>Ingles</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel htmlFor="grouped-select">Grupo</InputLabel>
        <Select defaultValue="" id="grouped-select" label="Grouping">
          <MenuItem value={1}>A</MenuItem>
          <MenuItem value={2}>B</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
