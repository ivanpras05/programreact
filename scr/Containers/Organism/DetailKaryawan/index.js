import React, { Component } from 'react';
import API from '../../../Configs/Axios';

class DetailKaryawan extends Component{
    constructor(props){
        super(props)
        this.state={
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

    componentDidMount=() => {
        const id = this.props.match.params.id 
        API.GetIdKaryawan(id).then(res => {
            this.setState({
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

    render(){
        return(
            <div>
                <p className="text-center"><b>DETAIL KARYAWAN</b></p>
                <hr/>
                <p>NIK USER : {this.state.Nik} </p>
                <p>NAMA USER : {this.state.NamaUser} </p>
                <p>JABATAN USER : {this.state.Subag} </p>
                <p>NOMER TELP USER : {this.state.NoTelp} </p>
                <p>EMAIL USER : {this.state.EmailUser} </p>
                <p>ALAMAT USER : {this.state.AlamatUser} </p>
                <p>FOTO USER : none </p>
            </div>
        )
    }
}

export default DetailKaryawan
