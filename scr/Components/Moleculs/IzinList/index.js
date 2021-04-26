import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

const IzinList = (props) => {
    const List = props.data.map((data, i) => (
        <tbody key={data.idIzin}>
            <tr>
                <td>{i + 1}</td>
                <td>NAMA USER</td>
                <td>{data.JenisIzin}</td>
                <td>{data.Keterangan}</td>
                <td>{data.TanggalIzin}</td>
                <td>
                    <Link to={"/izin/detail/"+data.idIzin} className="btn btn-success" style={{ marginRight: 10 }}>DETAIL</Link>
                    <Button type="primary" style={{marginRight:10}} onClick={() => props.MyDel(data.idIzin)} >HAPUS</Button>
                    <Link to={"/izin/edit/"+data.idIzin} className="btn btn-primary">EDIT</Link>

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
                    <th>JENIS IZIN</th>
                    <th>KETERANGAN</th>
                    <th>TANGGAL</th>
                    <th>AKSI</th>
                </tr>
            </thead>
            {List}
        </table>
    )
}

export default IzinList
