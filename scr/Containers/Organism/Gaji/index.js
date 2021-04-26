import React, { Component } from 'react';
import API from '../../../Configs/Axios';
import GajiList from '../../../Components/Moleculs/GajiList';
import { Link } from 'react-router-dom';

class GajiPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            gaji: []
        }
    }

    getData = () => {
        API.GetGaji().then(res => {
            this.setState({
                gaji: res.data
            })
        }).catch(err => {
            console.log(err)
        })
    }

    componentDidMount = () => {
        this.getData()
    }

    DeleteGaji = (id) => {
        if (window.confirm('Are You Sure Delete Data.?')) {
            API.DeleteGaji(id).then(res => {
                if (res.status == 1) {
                    this.getData()
                    alert('Succcess Hapus Karyawan')
                } else {
                    alert('Failed')
                }
            }).catch(err => {
                console.log(err)
            })
        }
    }

    render() {
        return (
            <div>
                <h1 className="text-center">DATA GAJI KARYAWAN</h1>
                <Link to="/gaji/add" className="btn btn-primary">TAMBAH GAJI</Link>
                <hr />
                <GajiList data={this.state.gaji} MyDel={this.DeleteGaji} />
            </div>
        )
    }
}

export default GajiPage
