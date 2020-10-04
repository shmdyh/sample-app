import React from "react";
import Typography from "@material-ui/core/Typography";
import InfoModal from "../../organisms/InfoModalWindow";

import mapImage from "../../../common/map_open.png";

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
  title: string;
}

export default function TabPanel(props: TabPanelProps) {
  const { children, value, index, title, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Typography>{props.title}</Typography>
      <img src={mapImage} alt="map" width="400px" height="300px" />
      <InfoModal title={"Open Modal: " + index}/>
    </div>
  );
}
