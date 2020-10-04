import React, { ReactNode, ReactElement } from "react";
import Typography from "@material-ui/core/Typography";
import InfoModal from "../../organisms/InfoModalWindow";

import mapImage from "../../../common/map_open.png";

interface TabPanelProps {
  children?: ReactNode; // eslint-disable-line react/require-default-props
  index: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  value: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  title: string;
}

export default function TabPanel(props: TabPanelProps): ReactElement {
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
      <InfoModal title={`Open Modal: ${index}`} />
    </div>
  );
}
