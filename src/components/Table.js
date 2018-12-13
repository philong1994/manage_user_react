import React, { Component } from 'react';

class Table extends Component {
    deleteUserClick = (userId) => {
       // console.log(userId);
       this.props.deleteUser(userId);
        
    }
    renderDataRow  = () => (
        this.props.dataUser.map((value,key) => (
            <tr key = {key}>
            <td >{key+1}</td>
            <td>{value.name}</td>
            <td>{value.phone}</td>
            <td>{value.role}</td>
            <td className="btn-group">
                <div className="btn btn-warning sua">
                    <i className="fa fa-edit" onClick={() => this.props.editUser(value)}>Sửa</i>
                </div>
                <div className="btn btn-danger " >
                    <i className="fa fa-delete" onClick={() => this.deleteUserClick(value.id)}>Xóa</i>
                </div>
            </td>
        </tr>
        ))
        
    )
    render() {
        return (
            <div className="col">
                <table className="table table-striped  table-hover">
                    <thead className="thead-inverse">
                        <tr>
                            <th>STT</th>
                            <th>Tên</th>
                            <th>SĐT</th>
                            <th>Quyền</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderDataRow()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Table;