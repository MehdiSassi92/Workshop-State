import React from "react";
import "./App.css";

import Profile from "./components/Profile";

class App extends React.Component {
  constructor(props) {
    console.log("constructor()");
    super(props);
    this.state = { isVisible: false };
  }

  toggleVisibility = () => {
    this.setState({ isVisible: !this.state.isVisible });
  };

  render() {
    return (
      <div>
        <div>
          <button className="btnn" onClick={this.toggleVisibility}>
            {" "}
            {this.state.isVisible ? "Hide" : "Show"}
          </button>
        </div>

        {this.state.isVisible && <Profile />}
      </div>
    );
  }
}
export default App;
