import React, { Component } from 'react';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import Table from './components/Table';
import InsertForm from './components/InsertForm';
import data from "./data/data.json";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonStatus : false,
      dataUser : data
    }
  }
  changeButtonStatus = () => {
      this.setState({
          buttonStatus : !this.state.buttonStatus
      })
  };
  getSearchValue = (val) => {
    this.setState({
      searchVal : val
  });
  };
  render(){
    var result = [];
    this.state.dataUser.forEach((item) => {
      if(item.name.indexOf(this.state.searchVal) !== -1){
        result.push(item);
      }
    });
    return (
      <div>
        <Header/>
        <SearchForm changeStatus ={() => this.changeButtonStatus()} buttonStatus={this.state.buttonStatus} getSearchValue = {(val) => this.getSearchValue(val)}/>
        <div className="container">
          <div className="row">
            <Table dataUser = {this.state.searchVal ? result : this.state.dataUser}/>
            <InsertForm buttonStatus={this.state.buttonStatus}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
