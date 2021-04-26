import React, { Component } from 'react';
import API from '../../../Configs/Axios';
import AbsensiList from '../../../Components/Moleculs/AbsensiList';

class AbsensiPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Absensi: []
        }
    }

    getData = () => {
        API.GetAbsen().then(res => {
            this.setState({
                Absensi: res.data
            })
        }).catch(err => {
            console.log(err)
        })
    }

    componentDidMount = () => {
        this.getData()
    }

    render() {
        return (
            <div>
                <h1 className="text-center">DATA ABSENSI KARYAWAN</h1>
                <hr/>
                <AbsensiList data={this.state.Absensi} />
            </div>
        )
    }
}

export default AbsensiPage
