import Axios from "axios";

const RootPath = "http://localhost/Rest-Absensi/api/";

const GET = (path) => {
    const promise = new Promise((resolve,reject) => {
        Axios.get(RootPath+path).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err)
        })
    })
    return promise
}

const GET_ID = (path,id) => {
    const promise = new Promise((resolve,reject) => {
        Axios.get(RootPath+path+id).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err)
        })
    })
    return promise
}

const POST = (path,data) => {
    const promise = new Promise((resolve,reject) => {
        Axios.post(RootPath+path,data).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err)
        })
    })
    return promise
}

const PUT = (path,data) => {
    const promise = new Promise((resolve,reject) => {
        Axios.put(RootPath+path,data).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err)
        })
    })
    return promise
}

const DELETE = (path,data) => {
    const promise = new Promise((resolve,reject) => {
        Axios.delete(RootPath+path+data).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err)
        })
    })
    return promise
}


const GetAbsen = () => GET('AbsenController');
const GetKaryawan = () => GET('UserController');
const GetGaji = () => GET('GajiController');
const GetIzin = () => GET('IzinController');
const GetIdAbsen = (data) => GET_ID('AbsenController?id=',data)
const GetIdKaryawan = (data) => GET_ID('UserController?id=',data)
const PostKaryawan = (data) => POST('UserController',data)
const PutKaryawan = (data) => PUT('UserController',data)
const DeleteKaryawan = (data) => DELETE('UserController?id=',data)
const PostGaji = (data) => POST('GajiController',data)
const DeleteGaji = (data) => DELETE('GajiController?id=',data)
const GetIdGaji = (data) => GET_ID('GajiController?id=',data)
const GetIdIzin = (data) => GET_ID('IzinController?id=',data)
const PutGaji = (data) => PUT('IzinController',data)
const DeleteIzin = (data) => DELETE('IzinController?id=',data)
const UploadImage = (data) => POST('ImageUpload',data)

const API = {
    GetAbsen,
    GetKaryawan,
    GetGaji,
    GetIzin,
    GetIdAbsen,
    PostKaryawan,
    PutKaryawan,
    GetIdKaryawan,
    DeleteKaryawan,
    PostGaji,
    DeleteGaji,
    GetIdGaji,
    GetIdIzin,
    PutGaji,
    DeleteIzin,
    UploadImage
}

export default API
