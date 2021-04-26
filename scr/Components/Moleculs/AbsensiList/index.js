import React from 'react';
import { Link } from 'react-router-dom';

const AbsensiList = (props) => {
    console.log(props)
    const List = props.data.map((res, i) => (
        <tbody key={res.idAbsen}>
            <tr>
                <td>{i+1}</td>
                <td>{res.NikAbsen}</td>
                <td>FOTO</td>
                <td>{res.TanggalAbsen}</td>
                <td>{res.JamAbsen}</td>
                <td> <Link to={"/absen/detail/"+res.idAbsen} className="btn btn-primary">DETAIL</Link> </td>
            </tr>
        </tbody>
    ))
    return (
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>NOMER</th>
                    <th>NIK ABSEN</th>
                    <th>TANGGAL ABSENSI</th>
                    <th>JAM ABSENSI</th>
                </tr>
            </thead>
            {List}
        </table>
    )
}

export default AbsensiList
