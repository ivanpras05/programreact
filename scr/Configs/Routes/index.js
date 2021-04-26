import React from 'react';
import { Route, BrowserRouter, Router, Switch } from "react-router-dom"
import HomePage from "../../Containers/Organism/Home"
import AbsensiPage from "../../Containers/Organism/Absensi"
import KaryawanPage from '../../Containers/Organism/Karyawan';
import GajiPage from '../../Containers/Organism/Gaji';
import IzinPage from '../../Containers/Organism/Izin';
import SettingPage from '../../Containers/Organism/Setting';
import {  } from 'antd';
import DetailAbsen from '../../Containers/Organism/DetailAbsen';
import AddKaryawan from '../../Containers/Organism/AddKaryawan';
import EditKaryawan from '../../Containers/Organism/EditKaryawan';
import DetailKaryawan from '../../Containers/Organism/DetailKaryawan';
import AddGaji from '../../Containers/Organism/AddGaji';
import EditGaji from '../../Containers/Organism/EditGaji';
import DetailIzin from '../../Containers/Organism/DetailIzin';
import EditIzin from '../../Containers/Organism/EditIzin';

const MyRouter = () => {
    return(
        <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path = "/karyawans/edit/:id" component={EditKaryawan} />
            <Route path = "/karyawans/detail/:id" component={DetailKaryawan} />
            <Route path = "/gaji/edit/:id" component = {EditGaji}/>
            <Route path = "/gaji/add" component = {AddGaji}/>
            <Route path="/absensi" component={AbsensiPage} />
            <Route path="/karyawan" component={KaryawanPage}  />
            <Route path="/gaji" component={GajiPage}  />
            <Route path = "/izin/edit/:id" component={EditIzin}/>
            <Route path = "/izin/detail/:id" component={DetailIzin} />
            <Route path="/izin" component={IzinPage}  />
            <Route path="/setting" component={SettingPage}  />
            <Route path ="/absen/detail/:id" component={DetailAbsen}/>
            <Route path ="/absen/tambah" component={AddKaryawan}/>
        </Switch>
            
    )
}

export default MyRouter

