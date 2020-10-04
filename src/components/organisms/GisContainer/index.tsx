import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import GisMap from "../../molecules/GisMap";



function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary.dark,
    border: 1,
    borderColor: "grey.500",
    borderRadius: "borderRadius",
    margin: "10px",
    // backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          indicatorColor="secondary"
          textColor="secondary"
          color="secondary"
        >
          <Tab label="Map01" {...a11yProps(0)} />
          <Tab label="Map02" {...a11yProps(1)} />
          <Tab label="Map03" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <GisMap value={value} index={0} title="Image of Map01" />
      <GisMap value={value} index={1} title="Image of Map02" />
      <GisMap value={value} index={2} title="Image of Map03" />
    </div>
  );
}
