import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

const GajiList = (props) => {
    const List = props.data.map((data, i) => (
        <tbody key={data.idGaji}>
            <tr>
                <td>{i + 1}</td>
                <td>NAMA USER</td>
                <td>{data.Bulan}</td>
                <td>{data.Tahun}</td>
                <td>{data.Total}</td>
                <td>{data.Created_at}</td>
                <td>
                    <Button type="primary" onClick={() => props.MyDel(data.idGaji)} style={{ marginRight: 10 }}>DELETE</Button>
                    <Link to={"/gaji/edit/"+data.idGaji} className="btn btn-primary">EDIT</Link>
                </td>
            </tr>
        </tbody>
    ))
    return (
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>NO</th>
                    <th>NAMA</th>
                    <th>BULAN</th>
                    <th>TAHUN</th>
                    <th>TOTAL</th>
                </tr>
            </thead>
            {List}
        </table>
    )
}

export default GajiList
