import { useState } from "react";
import { EXAMPLES } from "../data.js";
import TabButton from "./TabButton.jsx";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";
export default function Examples() {
  const [noSelectBtn, selectBtn] = useState("");
  function handleClick(selectButton) {
    selectBtn(selectButton);
    console.log(selectBtn);
  }

  let tabContent = <p>Please select a topic</p>;
  if (noSelectBtn) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[noSelectBtn].title}</h3>
        <p>{EXAMPLES[noSelectBtn].description}</p>
        <pre>
          <code>{EXAMPLES[noSelectBtn].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <Section title="Examples" id="examples">
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={noSelectBtn === "components"}
              onClick={() => handleClick("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={noSelectBtn === "jsx"}
              onClick={() => handleClick("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={noSelectBtn === "props"}
              onClick={() => handleClick("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={noSelectBtn === "state"}
              onClick={() => handleClick("state")}
            >
              State
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}
