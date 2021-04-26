import React, { Component } from 'react'
import API from '../../../Configs/Axios'

class EditKaryawan extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id : 0,
            Nik: '',
            NamaUser: '',
            PasswordUser: '',
            FotoUser: '',
            Subag: '',
            NoTelp: '',
            EmailUser: '',
            AlamatUser: ''
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    componentDidMount = () => {
        const id = this.props.match.params.id
        API.GetIdKaryawan(id).then(res => {
            this.setState({
                id : res.data[0].idUser,
                Nik: res.data[0].Nik,
                NamaUser: res.data[0].NamaUser,
                PasswordUser: res.data[0].PasswordUser,
                FotoUser: res.data[0].FotoUser,
                Subag: res.data[0].Subag,
                NoTelp: res.data[0].NoTelp,
                EmailUser: res.data[0].EmailUser,
                AlamatUser: res.data[0].AlamatUser,
            })
        }).catch(err => {
            console.log(err)
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        API.PutKaryawan(this.state).then(res => {
            if (res.status == 1 ) {
                alert('Succcess Update Karyawan')
                this.props.history.push('/karyawan')
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
                        <label>Masukan Nik User</label>
                        <input value={this.state.Nik} onChange={this.onChange} name="Nik" type="number" placeholder="Masukan Nik" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Masukan Nama User</label>
                        <input value={this.state.NamaUser} onChange={this.onChange} name="NamaUser" type="text" placeholder="Masukan Nama" className="form-control" />
                    </div>
                    {/* <div className="form-group">
                        <label>Masukan Foto User</label>
                        <input value={this.state.FotoUser} onChange={this.onChange} name="FotoUser" type="file" placeholder="Masukan Foto" className="form-control" />
                    </div> */}
                    <div className="form-group">
                        <label>Masukan Jabatan User</label>
                        <input value={this.state.Subag} onChange={this.onChange} name="Subag" type="text" placeholder="Masukan Jabatan" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Masukan Nomer Telepon User</label>
                        <input value={this.state.NoTelp} onChange={this.onChange} name="NoTelp" type="text" placeholder="Masukan Nomer" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Masukan Email User</label>
                        <input value={this.state.EmailUser} onChange={this.onChange} name="EmailUser" type="text" placeholder="Masukan Email" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Masukan Alamat User</label>
                        <input value={this.state.AlamatUser} onChange={this.onChange} name="AlamatUser" type="text" placeholder="Masukan Alamat" className="form-control" />
                    </div>
                    <button className="btn btn-primary">SIMPAN</button>
                </form>
            </div>
        )
    }
}

export default EditKaryawan
