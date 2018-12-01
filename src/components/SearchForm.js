import React, { Component } from 'react';

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
    isChange = (event) => {
        //console.log("asdsad");
        
        this.setState({
            temTxtSearch : event.target.value
        })
        this.props.getSearchValue(event.target.value)
    }

    render() {
        
        return (
            <div className="container">
                <div className="row">
                    <div className="form-inline col-md-9">
                        <div className="form-group btn-group">
                            <input type="text" className="form-control" name="txtSearch" id="txtSearch"  placeholder="Tìm Kiếm" onChange = {(event) => this.isChange(event)} />
                            <button type="submit" className="btn btn-success" onClick = {(val) => this.props.getSearchValue(this.state.temTxtSearch)}>Tìm Kiếm</button>
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