import React, { Component } from 'react';

class InsertForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtName : "",
            txtPhone : "",
            sltRole : "",
        }
    }
    
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name] : value
        });
        console.log(this.state);
        
        var item = {};
        item.id = "";
        item.name = this.state.txtName;
        item.phone = this.state.txtPhone;
        item.role = this.state.sltRole;
        console.log(item);
        
        
    }
    showForm = () => {
        if(this.props.buttonStatus === true){
            return (
                <div className="col">
                    <div className="card text-center mt-2">
                        <div className="card-header">
                            Thêm mới
                        </div>
                        <div className="card-body">
                            <div className="form-group">
                                <input type="text" className="form-control" name="txtName" id="txtName" placeholder="Tên" onChange={(event) => this.isChange(event)} />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" name="txtPhone" id="txtPhone" placeholder="SĐT" onChange={(event) => this.isChange(event)} />
                            </div>
                            <div className="form-group">
                                <select name="sltRole" id="sltRole" className="form-control" onChange={(event) => this.isChange(event)}>
                                <option value="">Chọn quyền</option>
                                <option value="User">User</option>
                                <option value="Admin">Admin</option>
                                </select>
                            </div>
                            <button type="submit" className="btn btn-primary btn-block">Submit</button>
                        </div>
                    </div>
                </div>
            )
        }
    }
    render() {
        //console.log(this.state);
        
        return (
            <div>
                {this.showForm()}
            </div>

        );
    }
}

export default InsertForm;