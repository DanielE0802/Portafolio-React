import React from "react";
import ReactFullpage from '@fullpage/react-fullpage';
function Fullpage() {

    return(
        <ReactFullpage
        scrollingSpeed={1000} /* Options here */
        scrollHorizontally={true} /* Because we are using the extension */
        licenseKey={"gplv3-license"}
        menu={"#myMenu"}
        anchors={["Home", "Skills", "Proyects", "Contact"]}
        navigationTooltips={["Home", "Skills", "Proyects", "Contact"]}
        showActiveTooltip={true}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <p>Section 1 Home </p>
                <button onClick={() => fullpageApi.moveSectionDown()}>
                  Click me to move down
                </button>
              </div>
              <div className="section">
                <p>Section 2 Skilss</p>
              </div>
              <div className="section">
                <p>Section 3 Proyects</p>
              </div>
              <div className="section">
                <p>Section 4 Contact</p>
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    )
 
}

export default Fullpage;

// ReactDOM.render(<Fullpage />, document.getElementById("react-root"));
