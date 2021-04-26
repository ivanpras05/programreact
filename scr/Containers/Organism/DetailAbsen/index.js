import React, { Component } from 'react'
import API from '../../../Configs/Axios'

class DetailAbsen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: 0,
            idAbsen: '',
            NikAbsen: '',
            FotoAbsen: '',
            TanggalAbsen: '',
            JamAbsen: '',
            Lat: '',
            Long: ''
        }
    }

    componentDidMount = () => {
        const id = this.props.match.params.id
        API.GetIdAbsen(id).then(res => {
            this.setState({
                idAben: res.data[0].idUser,
                NikAbsen: res.data[0].NikAbsen,
                FotoAbsen: res.data[0].FotoAbsen,
                TanggalAbsen: res.data[0].TanggalAbsen,
                JamAbsen: res.data[0].JamAbsen,
                Lat: res.data[0].LatAbsen,
                Long: res.data[0].LongAbsen,
            })
        }).catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <p><b>DETAIL ABSENSI</b></p>
                        <hr />
                        <p>NAMA KARYAWAN : NULL</p>
                        <p>NIK KARYAWAN : {this.state.NikAbsen}</p>
                        <p>TANGGAL ABSEN KARYAWAN : {this.state.TanggalAbsen}</p>
                        <p>JAM ABSENSI KARYAWAN : {this.state.JamAbsen}</p>
                        <p>FOTO KARYAWAN : NULL</p>
                        <p>PETA</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default DetailAbsen
