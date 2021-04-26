import React from 'react'

const KaryawanForm = (props) => {
    const Karyawan = props.data.map(data => (
        <option key={data.idUser} value={data.idUser}>{data.NamaUser}</option>
    ))
    return (
        <div className="form-group">
            <label>Masukan Bulan</label>
            <select name="idu" className="form-control" onChange={props.onChange}>
                {Karyawan}
            </select>
        </div>
    )
}

export default KaryawanForm
