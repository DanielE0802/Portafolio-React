import React from "react";
import ReactFullpage from '@fullpage/react-fullpage';

function Fullpage() {

    return(
        <ReactFullpage
        scrollingSpeed={1000} /* Options here */
        scrollHorizontally={true} /* Because we are using the extension */
        licenseKey={"gplv3-license"}
        menu={"#myMenu"}
        anchors={["firstPage", "secondPage"]}
        navigationPosition={"left"}
        navigationTooltips={["Home", "Skills"]}
        showActiveTooltip={true}
        slidesNavigation={false}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <p>Section 1 (welcome to fullpage.js)</p>
                <button onClick={() => fullpageApi.moveSectionDown()}>
                  Click me to move down
                </button>
              </div>
              <div className="section">
                <p>Section 2</p>
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    )
 
}

export default Fullpage;

// ReactDOM.render(<Fullpage />, document.getElementById("react-root"));
