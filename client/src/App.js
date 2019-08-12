import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Table } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Author</th>
              <th>Description</th>
              <th>Image</th>
              <th>Link</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td>Book Title</td>
              <td>Susan</td>
              <td>Not Applicable</td>
              <td>N/A</td>
              <td>
                <button color="success" size="sm">Edit</button>
                <button color="danger" size="sm">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}


export default App;