import React, { Component } from 'react'
import API from '../../../Configs/Axios'

class AddKaryawan extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Nik: '',
            NamaUser: '',
            PasswordUser: '',
            FotoUser: '',
            Subag: '',
            NoTelp: '',
            EmailUser: '',
            AlamatUser: '',
            file: {
                fto: ""
            }
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        API.PostKaryawan(this.state).then(res => {
            if (res.status == 1) {
                const formData = new FormData
                formData.append('foto',this.state.file.fto,this.state.file.fto.name)
                API.UploadImage(formData).then(res => {
                    if (res.status == 1) {
                        alert('Succcess Input Karyawan')
                        this.props.history.push('/karyawan')
                    } else {
                        alert('Failed Upload Image')
                    }
                }).catch(err => {
                    alert('Failed Input Karyawan')
                })

            } else {
                alert('Failed')
            }
        }).catch(err => {
            console.log(err)
        })
    }

    imgChange = (e) => {
        this.setState({
            FotoUser: e.target.files[0].name,
            file: {
                fto: e.target.files[0]
            }
        })
    }


    render() {
        return (
            <div>
                <p className="text-center"> <b>TAMBAH KARYAWAN</b> </p>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Masukan Nik User</label>
                        <input onChange={this.onChange} name="Nik" type="number" placeholder="Masukan Nik" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Masukan Nama User</label>
                        <input onChange={this.onChange} name="NamaUser" type="text" placeholder="Masukan Nama" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Masukan Password User</label>
                        <input onChange={this.onChange} name="PasswordUser" type="password" placeholder="Masukan Password" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Masukan Foto User</label>
                        <input onChange={this.imgChange} name="FotoUser" type="file" placeholder="Masukan Foto" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Masukan Jabatan User</label>
                        <input onChange={this.onChange} name="Subag" type="text" placeholder="Masukan Jabatan" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Masukan Nomer Telepon User</label>
                        <input onChange={this.onChange} name="NoTelp" type="text" placeholder="Masukan Nomer" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Masukan Email User</label>
                        <input onChange={this.onChange} name="EmailUser" type="text" placeholder="Masukan Email" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Masukan Alamat User</label>
                        <input onChange={this.onChange} name="AlamatUser" type="text" placeholder="Masukan Alamat" className="form-control" />
                    </div>
                    <button className="btn btn-primary">SIMPAN</button>
                </form>
            </div>
        )
    }
}

export default AddKaryawan
