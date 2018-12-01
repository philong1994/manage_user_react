import React, { Component } from 'react';

class Table extends Component {
    renderDataRow  = () => (
        this.props.dataUser.map((value,key) => (
            <tr key = {key}>
            <td >{value.id}</td>
            <td>{value.name}</td>
            <td>{value.phone}</td>
            <td>{value.role}</td>
            <td className="btn-group">
                <div className="btn btn-warning sua">
                    <i className="fa fa-edit">Sửa</i>
                </div>
                <div className="btn btn-danger sua">
                    <i className="fa fa-delete">Xóa</i>
                </div>
            </td>
        </tr>
        ))
        
    )
    render() {
        return (
            <div className="col">
                <table className="table table-striped  table-hover">
                    <thead className="thead-inverse|thead-default">
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