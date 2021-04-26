import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

const KaryawanList = (props) => {
    const url = "http://localhost/Rest-Absensi/assets/img/"
    const List = props.data.map((res, i) => (
        <tbody key={res.idUser}>
            <tr key={res.idUser}>
                <td>{i + 1}</td>
                <td>{res.NamaUser}</td>
                <td>{res.Nik}</td>
                <td>{res.Subag}</td>
                <td> {res.NoTelp}</td>
                
            </tr>
        </tbody>
    ))

    return (
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>NO</th>
                    <th>NAMA</th>
                    <th>NIK</th>
                    <th>JABATAN</th>
                    <th>NOMOR HANDPHONE</th>
                </tr>
            </thead>
            {List}
        </table>
    )
}

export default KaryawanList
