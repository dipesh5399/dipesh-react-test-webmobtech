import React, { Component } from "react";

class List extends Component {
  render() {
    return (
      <div>
        <table class="table table-hover table-borderLess table-responsive-lg">
          <thead></thead>
          <tbody>
            {this.props.data.length !== 0
              ? this.props.data.map((userobj, id) => {
                  var path = userobj.logo_path;
                  return (
                    <td>
                      <img src={path}></img>
                      <td>{userobj.name}</td>
                    </td>
                  );
                })
              : "No data Avalible"}
          </tbody>
        </table>
      </div>
    );
  }
}

export default List;
