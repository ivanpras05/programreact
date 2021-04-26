import React, { Component } from 'react'
import API from '../../../Configs/Axios'

class EditIzin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
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
            console.log(res.data[0])
            this.setState({
                id: res.data[0].idIzin,
                idUser: res.data[0].idUser,
                jenis: res.data[0].JenisIzin,
                detail: res.data[0].Detail,
                foto: res.data[0].FotoIzin,
                tanggal: res.data[0].TanggalIzin,
                ket: res.data[0].Keterangan
            })
        }).catch(err => {
            console.log(err)
        })
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        API.PutGaji(this.state).then(res => {
            if (res.status == 1) {
                alert('Succcess Update Izin')
                this.props.history.push('/izin')
            } else {
                alert('Failed')
            }
        }).catch(err => {
            console.log(err)
        })

    }

    render() {
        return (
            <div>
                <p className="text-center"> <b>TAMBAH KARYAWAN</b> </p>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Nama User</label>
                        <input name="nama" type="text" className="form-control" value={this.state.idUser} />
                    </div>
                    <div className="form-group">
                        <label>Jenis Izin User</label>
                        <input name="izin" type="text" className="form-control" value={this.state.jenis} />
                    </div>
                    <div className="form-group">
                        <label>Tanggal Izin User</label>
                        <input name="tanggal" type="text" className="form-control" value={this.state.tanggal} />
                    </div>
                    <div className="form-group">
                        <label>Detail Izin User</label>
                        <input name="izin" type="text" className="form-control" value={this.state.detail} />
                    </div>
                    <div className="form-group">
                        <label>Foto Surat</label>
                    </div>
                    <div className="form-group">
                        <label>Keterangan Surat Izin</label>
                        <select className="form-control" onChange={this.onChange} name="ket">
                            <option>{this.state.ket}</option>
                            <option>DITERIMA</option>
                            <option>DITOLAK</option>
                        </select>
                    </div>
                    <button className="btn btn-primary">SIMPAN</button>
                </form>
            </div>
        )
    }
}

export default EditIzin
