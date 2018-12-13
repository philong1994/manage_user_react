import React, { Component } from 'react';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import Table from './components/Table';
import InsertForm from './components/InsertForm';
import data from "./data/data.json";
const uuidv1 = require('uuid/v1');
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonStatus : false,
      formEditStatus : false,
      dataUser : data,
      dataEditUser : {}
    }
  }
  changeButtonStatus = () => {
      this.setState({
          buttonStatus : !this.state.buttonStatus
      })
  };
  changeEditFormStatus = () => {
    this.setState({
      formEditStatus : !this.state.formEditStatus
    })
};
  getSearchValue = (val) => {
    this.setState({
      searchVal : val
  });
  };
  getInsertData = (name,phone,role) => {
    var item = {};
    var items = {};
    item.id = uuidv1();
    item.name = name;
    item.phone = phone;
    item.role = role;  
    items = this.state.dataUser;
    items.push(item)
    this.setState({
      dataUser:items
    });
      
  };
  editUser = (editVal) => {
    this.setState({
      dataEditUser : editVal
    });
    this.changeEditFormStatus();
  }
  getEditUserData(info){
    //console.log('sửa thành công');
    this.state.dataUser.forEach((value,key)=>{
        if(value.id === info.id){
          value.name = info.name
          value.phone = info.phone
          value.role = info.role
        }
    })
    
  }
  deleteUser = (userId) => {
      var tempData = this.state.dataUser.filter(item => item.id !== userId);
      this.setState({
        dataUser:tempData
      });
      
  }
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
        <SearchForm 
        buttonStatus={this.state.buttonStatus} 
        changeStatus ={() => this.changeButtonStatus()}  
        formEditStatus={this.state.formEditStatus} 
        changeEditFormStatus ={() => this.changeEditFormStatus()} 
        getSearchValue = {(val) => this.getSearchValue(val)}
        dataEditUser = {this.state.dataEditUser}
        getEditUserInfo={(info)=>this.getEditUserData(info)}
        />
        <div className="container">
          <div className="row">
            <Table 
            dataUser = {this.state.searchVal ? result : this.state.dataUser} 
            editUser = {(editVal) => this.editUser(editVal)} 
            changeEditFormStatus ={() => this.changeEditFormStatus()}
            deleteUser={(userId) => this.deleteUser(userId)}
             />
            <InsertForm buttonStatus={this.state.buttonStatus} getInsertData={(name,phone,role) => this.getInsertData(name,phone,role)} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
