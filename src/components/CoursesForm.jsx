import React, { Component } from "react";
import "./StudentPortal.css";

class CoursesForm extends Component {
  state = {
    ...this.returnStateObject()
  };

  returnStateObject() {
    if (this.props.currentIndex === -1)
      return {
        CourseId: "",
        CourseName: "",
        LessonPlans: "",
        Status: ""
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
      <form onSubmit={this.handleSubmit} autoComplete="off">
        <i class="fas fa-hashtag"></i><input
          name="CourseId"
          placeholder="CourseId"
          onChange={this.handleInputChange}
          value={this.state.CourseId}
          className = "inputBorder"
        />
        <br />
        <i class="fas fa-signature"></i><input
          name="CourseName"
          placeholder="CourseName"
          onChange={this.handleInputChange}
          value={this.state.CourseName}
          className = "inputBorder"

        />
        <br />
        <i class="fas fa-folder"></i><input
          name="LessonPlans"
          placeholder="LessonPlans"
          onChange={this.handleInputChange}
          value={this.state.LessonPlans}
          className = "inputBorder"
        />
        <br />
        <i class="fas fa-shield-alt"></i><input
          name="Status"
          placeholder="Status"
          onChange={this.handleInputChange}
          value={this.state.Status}
          className = "inputBorder"
        />
        <br />

        <button className = "btn" type="submit">Submit</button>
      </form>
    );
  }
}

export default CoursesForm;
