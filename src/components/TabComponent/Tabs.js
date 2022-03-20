import React, { useState } from "react";
import TabNavItem from "../V2/TabNavItem";
import TabContent from "../V2/TabContent";
import FirstTab from "../AllTabs/FirstTab.js";
import SecondTab from "../AllTabs/SecondTab.js";
import TabContext from "../../context/tabContext";
import ThirdTab from "../AllTabs/ThirdTab.js";
import Result from "../result";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [correctAnswers,setCorrectAnswers] = useState(0);

  const handleActiveTab = (tab) => setActiveTab(tab);
  
  const updateCorrectAnswers = (count) => {
    setCorrectAnswers((existingCounts) =>  count + existingCounts
    );
  }
 
  return (
    <TabContext.Provider value={{
      activeTab:activeTab,
      toggleTab:handleActiveTab,
      correctAnswers,
      updateCorrectAnswers
    }}>
    <div className="Tabs">
      <ul className="nav">
        <TabNavItem title="Tab 1" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <TabNavItem title="Tab 2" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <TabNavItem title="Tab 3" id="tab3" activeTab={activeTab} setActiveTab={setActiveTab}/>
      </ul>
 
      <div className="outlet">
        <TabContent id="tab1" activeTab={activeTab}>
          <FirstTab/>
        </TabContent>
        <TabContent id="tab2" activeTab={activeTab}>
          <SecondTab/>
        </TabContent>
        <TabContent id="tab3" activeTab={activeTab}>
          <ThirdTab/>
        </TabContent>
        <TabContent id="result" activeTab={activeTab}>
          <Result />
        </TabContent>
      </div>
    </div>
    </TabContext.Provider>
  );
};
 
export default Tabs;