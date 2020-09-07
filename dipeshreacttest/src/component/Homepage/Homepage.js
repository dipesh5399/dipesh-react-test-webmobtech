import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import * as Bootstrap from "react-bootstrap";
import * as Icons from "react-bootstrap-icons";
import { FormControl, Button } from "react-bootstrap";
import Logo from "../../images/logo.png";
import axios from "axios";
import List from "../List/List";
import "../../css/style.css";

class Homepage extends Component {
  state = {
    companies: [],
    search: "",
  };
  componentDidMount() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/550?api_key=603fcec81d503f17ec10942ac0df9ebb`
      )
      .then((response) => {
        console.log(response);
        this.setState({ companies: response.data.production_companies });
      });
  }
  searchHandler = () => {
    let filter = this.state.companies.filter((company) => {
      return company.name.indexOf(this.state.search) !== -1;
    });
    this.setState({ companies: filter });
  };
  onChangeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state);
  };
  render() {
    return (
      <React.Fragment>
        {" "}
        <header id="header" class="fixed-top">
          <div class="container">
            <nav className="nav-menu float-left d-none d-lg-block">
              <ul>
                <li>
                  <img src={Logo} alt="Company Logo" />
                </li>

                <li>
                  <a href="Latest">Latest</a>
                </li>
                <li>
                  <a href="#NowPlaying">Now Playing</a>
                </li>
                <li>
                  <a href="#Upcoming">Upcoming</a>
                </li>
                <li style={{ paddingLeft: "250px" }}>
                  <Bootstrap.InputGroup>
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="basic-addon1">
                        <Icons.Search></Icons.Search>
                      </span>
                    </div>
                    <FormControl
                      placeholder="Search"
                      type="search"
                      value={this.state.search}
                      onChange={this.onChangeHandler}
                      name="search"
                    ></FormControl>
                    <Button onClick={this.searchHandler}>Search</Button>
                  </Bootstrap.InputGroup>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <div style={{ paddingTop: "100px" }}>
          <div style={{ height: "200px" }}>
            {" "}
            <section id="Latest">
              Latest
              <List data={this.state.companies} />
            </section>
          </div>
          <div style={{ height: "200px", paddingTop: "23px" }}>
            <section id="NowPlaying">
              Now Playing
              <List data={this.state.companies} />
            </section>
          </div>
          <div style={{ height: "200px", paddingTop: "23px" }}>
            <section id="Upcoming">
              Upcoming
              <List data={this.state.companies} />
            </section>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Homepage;
