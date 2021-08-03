import React, { Component } from "react";
import "./StudentPortal.css";

class StudentForm extends Component {
  state = {
    ...this.returnStateObject()
  };

  returnStateObject() {
    if (this.props.currentIndex === -1)
      return {
        RoleNo: "",
        FirstName: "",
        LastName: "",
        UserName: "",
        Password: "",
        Class: "",
        Courses: ""
      };
    else return this.props.list[this.props.currentIndex];
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.currentIndex !== this.props.currentIndex ||
      prevProps.list !== this.props.list
    ) {
      this.setState({ ...this.returnStateObject() });
      console.log(prevProps, this.props);
    }
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onAddOrEdit(this.state);
  };

  render() {
    return (
      <section className = "content">
      <div className = "row">
      <form onSubmit={this.handleSubmit} autoComplete="off">
      <i class="fas fa-hashtag"></i><input
          name="RollNo"
          placeholder="RollNo"
          onChange={this.handleInputChange}
          value={this.state.RollNo}
          className = "inputBorder"
        />
        <br />
        <i class="fas fa-signature"></i><input className = "inputBorder"
          name="FirstName"
          placeholder="FirstName"
          onChange={this.handleInputChange}
          value={this.state.FirstName}
        />
        <br />
        <i class="fas fa-signature"></i><input className = "inputBorder"
          name="LastName"
          placeholder="LastName"
          onChange={this.handleInputChange}
          value={this.state.LastName}
        />
        <br />
        <i class="fas fa-user"></i><input className = "inputBorder"
          name="UserName"
          placeholder="UserName"
          onChange={this.handleInputChange}
          value={this.state.UserName}
        />
        <br />
        <i class="fas fa-lock"></i><input className = "inputBorder"
          name="Password"
          placeholder="Password"
          onChange={this.handleInputChange}
          value={this.state.Password}
        />
        <br />
      <i class="fas fa-chalkboard"></i><input className = "inputBorder"
          name="Class"
          placeholder="Class"
          onChange={this.handleInputChange}
          value={this.state.Class}
        />
        <br />
        <i class="fas fa-book-open"></i><input className = "inputBorder"
          name="Courses"
          placeholder="Courses"
          onChange={this.handleInputChange}
          value={this.state.Courses}
        />
        <br />
        <button className = "btn" type="submit">Submit</button>
      </form>
      </div>
      </section>
    );
  }
}

export default StudentForm;
