import React, { Component } from 'react';
import EditUser from './EditUser';

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            temTxtSearch : ""
        }
    }

    showButton = () => {
        if(this.props.buttonStatus === true){
            return <button type="button" className="btn btn-secondary btn-lg btn-block" onClick={() => this.props.changeStatus()} >Đóng</button>
        }else{
            return <button type="button" className="btn btn-info btn-lg btn-block" onClick={() => this.props.changeStatus()} >Thêm mới</button>
        }
    }
    showEditForm = () => {
        if(this.props.formEditStatus === true){
            return <EditUser changeEditFormStatus = {() => this.props.changeEditFormStatus()} dataEditUser = {this.props.dataEditUser}/>
        }
    }
    isChange = (event) => {
        this.setState({
            temTxtSearch : event.target.value
        })
        this.props.getSearchValue(event.target.value)
    }

    render() {
        
        return (
            <div className="container">
                {this.showEditForm()}
                <div className="row">
                    <div className="form-inline col-md-9">
                        <div className="form-group btn-group">
                            <input type="text" className="form-control" name="txtSearch" id="txtSearch"  placeholder="Tìm Kiếm" onChange = {(event) => this.isChange(event)} />
                            <button type="submit" className="btn btn-success" onClick = {() => this.props.getSearchValue(this.state.temTxtSearch)}>Tìm Kiếm</button>
                        </div>
                    </div>
                    <div className="col-md-3">
                        {this.showButton()}
                    </div>
                </div>
                
                <hr />
            </div>

        );
    }
}

export default SearchForm;