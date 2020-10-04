import React, { ReactElement } from "react";
import Header from "../../organisms/Header";
import GisContainer from "../../organisms/GisContainer";

function GisPage(): ReactElement {
  return (
    <div>
      <Header title="test app" />
      <GisContainer />
    </div>
  );
}

export default GisPage;
