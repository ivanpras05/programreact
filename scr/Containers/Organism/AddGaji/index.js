import React, { Component } from 'react'
import API from '../../../Configs/Axios'
import KaryawanForm from '../../../Components/Moleculs/KaryawanForm'

class AddGaji extends Component {
    constructor(props) {
        super(props)
        this.state = {
            karyawan: [],
            idu: '',
            bulan: '',
            tahun: '',
            total: ''
        }
    }

    componentDidMount = () => {
        API.GetKaryawan().then(res => {
            this.setState({
                karyawan: res.data
            })
        }).then(err => {
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
        API.PostGaji(this.state).then(res => {
            if (res.status == 1) {
                alert('Succcess Input Gaji')
                this.props.history.push('/gaji')
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
                <p className="text-center"> <b>TAMBAH GAJI</b> </p>
                <form onSubmit={this.onSubmit}>
                    <KaryawanForm data={this.state.karyawan} onChange={this.onChange} />
                    <div className="form-group">
                        <label>Masukan Bulan</label>
                        <select className="form-control" name="bulan" onChange={this.onChange}>
                            <option>JANUARI</option>
                            <option>FEBRUARI</option>
                            <option>MARET</option>
                            <option>APRIL</option>
                            <option>MEI</option>
                            <option>JUNI</option>
                            <option>JULI</option>
                            <option>AGUSTUS</option>
                            <option>SEPTEMBER</option>
                            <option>OKTOBER</option>
                            <option>NOVEMBER</option>
                            <option>DESEMBER</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Masukan Tahun</label>
                        <input onChange={this.onChange} name="tahun" type="number" placeholder="Masukan Tahun" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Masukan Total Gaji</label>
                        <input onChange={this.onChange} name="total" type="number" placeholder="Masukan Gaji" className="form-control" />
                    </div>
                    <button className="btn btn-primary">SIMPAN</button>
                </form>
            </div>
        )
    }
}

export default AddGaji
