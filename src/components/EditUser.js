import React, { Component } from 'react';

class EditUser extends Component {
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
                                <input type="text" defaultValue={this.props.dataEditUser.name} className="form-control" name="name" id="name" placeholder="Tên"/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" defaultValue={this.props.dataEditUser.phone}  name="phone" id="phone" placeholder="SĐT" />
                            </div>
                            <div className="form-group">
                                <select name="role" id="role" defaultValue={this.props.dataEditUser.role}  className="form-control">
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