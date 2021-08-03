import React, { Component } from "react";
import CourseForm from "./CoursesForm";
import "./StudentPortal.css";

class StudentData extends Component {
  state = {
    currentIndex: -1,
    list: this.returnList()
  };

  returnList() {
    if (localStorage.getItem("transactions") == null)
      localStorage.setItem("transactions", JSON.stringify([]));
    return JSON.parse(localStorage.getItem("transactions"));
  }

  handleEdit = (index) => {
    this.setState({
      currentIndex: index
    });
  };

  handleDelete = (index) => {
    var list = this.returnList();
    list.splice(index, 1);
    localStorage.setItem("transactions", JSON.stringify(list));
    this.setState({ list, currentIndex: -1 });
  };

  onAddOrEdit = (data) => {
    var list = this.returnList();
    if (this.state.currentIndex == -1) list.push(data);
    else list[this.state.currentIndex] = data;
    localStorage.setItem("transactions", JSON.stringify(list));
    this.setState({ list, currentIndex: -1 });
  };

  render() {
    return (
      <div>
        <CourseForm
          currentIndex={this.state.currentIndex}
          list={this.state.list}
          onAddOrEdit={this.onAddOrEdit}
        />
        <div className = "Divider">
        <i class="fas fa-cubes"></i><i class="fas fa-cubes"></i><i class="fas fa-cubes"></i>
        </div>
        <div className = "container" >
        <table className = "neumorphic">
          <thead>
            <tr>
              <th>CourseId </th>
              <th>CourseName</th>
              <th>LessonPlans</th>
              <th>Status</th>
              <th colSpan="2">Operations</th>
            </tr>
          </thead>
          <tbody>
            {this.state.list.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.CourseId}</td>
                  <td>{item.CourseName}</td>
                  <td>{item.LessonPlans}</td>
                  <td>{item.Status}</td>
                  
                  <td>
                    <button onClick={() => this.handleEdit(index)}><i class="fas fa-edit editBtn"></i></button>
                  </td>
                  <td>
                    <button onClick={() => this.handleDelete(index)}>
                    <i class="fas fa-trash-alt"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      </div>
    );
  }
}

export default StudentData;
