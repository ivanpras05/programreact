import React, { Component } from 'react';
import API from '../../../Configs/Axios';
import IzinList from '../../../Components/Moleculs/IzinList';

class IzinPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            izin : []
        }
    }

    getData = () => {
        API.GetIzin().then(res => {
            this.setState({
                izin : res.data
            })
        }).catch(err => {
            console.log(err)
        })
    }

    componentDidMount(){
        this.getData()
    }

    HapusOk = (id) => {
        if (window.confirm('Delete Data.?')) {
            API.DeleteIzin(id).then(res => {
                if (res.status == 1) {
                    this.getData()
                    alert('Success Delete Data')
                } else {
                    alert('Failed')
                }
            })  
        }
        //console.log(id)  
    }

    render(){
        return(
            <div>
                <h1 className="text-center">DATA IZIN MASUK</h1>
                <hr/>
                <IzinList data={this.state.izin} MyDel={this.HapusOk} />
            </div>
        )
    }
}

export default IzinPage
