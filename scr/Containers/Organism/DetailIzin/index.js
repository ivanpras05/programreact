import React, { Component } from 'react';
import API from '../../../Configs/Axios';

class DetailIzin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            idUser: '',
            jenis: '',
            detail: '',
            foto: '',
            tanggal: '',
            ket: ''
        }
    }

    componentDidMount = () => {
        const id = this.props.match.params.id
        API.GetIdIzin(id).then(res => {
            this.setState({
                idUser: res.data[0].idUser,
                jenis: res.data[0].JenisIzin,
                detail: res.data[0].Detail,
                foto: res.data[0].FotoIzin,
                tanggal: res.data[0].TanggalIzin,
                ket: res.data[0].Keterangan,
            })
        }).then(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <div>
                <p className="text-center"> <b>DETAIL IZIN</b> </p>
                <p>Nama User : Null</p>
                <p>Jenis Surat : {this.state.jenis}</p>
                <p>Detail Surat : {this.state.detail}</p>
                <p>Tanggal Surat : {this.state.tanggal}</p>
                <p>Keterangan Surat : {this.state.ket}</p>
                <p>FOTO</p>
            </div>
        )
    }
}

export default DetailIzin
