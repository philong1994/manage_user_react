import React, { Component } from 'react';

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id : this.props.dataEditUser.id,
            name : this.props.dataEditUser.name,
            phone : this.props.dataEditUser.phone,
            role : this.props.dataEditUser.role,
        }
    }
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name] : value
        });       
    }
    render() {
        return (
            <div className="row">
                <div className="col">
                    <div className="card text-center mt-2">
                        <div className="card-header text-center">
                            Edit User
                        </div>
                        <div className="card-body">
                            <div className="form-group">
                                <input type="text" defaultValue={this.props.dataEditUser.name} onChange={(event) => this.isChange(event)} className="form-control" name="name" id="name" placeholder="Tên"/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" defaultValue={this.props.dataEditUser.phone} onChange={(event) => this.isChange(event)} name="phone" id="phone" placeholder="SĐT" />
                            </div>
                            <div className="form-group">
                                <select name="role" id="role" defaultValue={this.props.dataEditUser.role} onChange={(event) => this.isChange(event)}  className="form-control">
                                <option value="">Chọn quyền</option>
                                <option value="user">User</option>
                                <option value="admin">Admin</option>
                                </select>
                            </div>
                            <button type="submit" className="btn btn-danger btn-block" onClick={() => {this.props.changeEditFormStatus()}}>Lưu</button>
                        </div>
                    </div>
                </div>
                </div>
        );
    }
}

export default EditUser;