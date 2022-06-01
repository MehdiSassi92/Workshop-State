import React, { Component } from "react";
import MyPic from "./MyPic.png";
import "./Profile.css"

class Profile extends Component {
  constructor(props) {
    console.log("constructor()");
    super(props);
    this.state = {
      timer: 0,
      intervall: null,
    };
  }

  componentDidMount() {
    this.setState({
      intervall: setInterval(() => {
        this.setState({ timer: this.state.timer + 1 });
      }, 1000),
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervall);
  }

  Person = {
    fullName: "Mehdi Sassi",
    bio: "Hi, i'm Mehdi and i love Manchester United :)",
    imgSrc: MyPic,
    profession: "Full Stack JS-Developer",
  };

  render() {
    return (
      <div className="profile-card">
        <img style={{ borderRadius:"10px", width: "200px", height: "200px" }} src={MyPic} alt="pic"></img>
        <div className="info-container">
        <div>
          <h4>
            <span className="label">Name: </span>
            {this.Person.fullName}
          </h4>
        </div>
        <div>
          <p>
            <span className="label">Bio: </span>
            {this.Person.bio}
          </p>
        </div>
        <div>
          <p>
            <span className="label">Profession: </span>
            {this.Person.profession}{" "}
          </p>
        </div>
        <div>
          <h5>
            <span className="label">Time: </span>
            {this.state.timer}{" "}
          </h5>
        </div>
        </div>

      </div>
    );
  }
}
export default Profile;
