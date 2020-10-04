// 例 Button.stories.js
import React, { ReactElement } from "react";
import Button from ".";

export default {
  title: "Button Component",
  component: Button,
};

export const Primary: React.FC = (): ReactElement => {
  return <Button />;
};
