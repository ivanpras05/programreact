import React, { Component } from 'react';
import API from '../../../Configs/Axios';
import KaryawanList from '../../../Components/Moleculs/KaryawanList';
import { Link } from 'react-router-dom';

class KaryawanPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            karyawan : [],
        }
    }

    getData = () => {
        API.GetKaryawan().then(res => {
            this.setState({
                karyawan : res.data
            })
        }).catch(err => {
            console.log(err)
        })
    }

    componentDidMount = () => {
        this.getData()
    }

    onDelete = (id) => {
        if (window.confirm('Hapus Data Karyawan.?')) {
            API.DeleteKaryawan(id).then(res => {
                if (res.status == 1 ) {
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

    render(){
        return(
            <div>
               <h1 className="text-center">DATA KARYAWAN</h1>
               <Link className="btn btn-primary" to="/absen/tambah" >TAMBAH KARYAWAN</Link>
               <hr/>
                <KaryawanList data={this.state.karyawan} MyDel={this.onDelete} />
            </div>
        )
    }
}

export default KaryawanPage
