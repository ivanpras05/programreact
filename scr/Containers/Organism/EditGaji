import React, { Component } from 'react'
import API from '../../../Configs/Axios'

class EditGaji extends Component {
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
        const id = this.props.match.params.id
        API.GetIdGaji(id).then(res => {
            console.log(res.data[0])
            this.setState({
                idu: res.data[0].idUser,
                bulan: res.data[0].Bulan,
                tahun: res.data[0].Tahun,
                total: res.data[0].Total
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
    }

    render() {
        return (
            <div>
                <p className="text-center"> <b>EDIT GAJI</b> </p>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Masukan Bulan</label>
                        <select className="form-control" name="bulan" onChange={this.onChange}>
                            <option>{this.state.bulan}</option>
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
                        <input onChange={this.onChange} name="tahun" type="number" value={this.state.tahun} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Masukan Total Gaji</label>
                        <input onChange={this.onChange} name="total" type="number" value={this.state.total} className="form-control" />
                    </div>
                    <button className="btn btn-primary">SIMPAN</button>
                </form>
            </div>
        )
    }
}

export default EditGaji
