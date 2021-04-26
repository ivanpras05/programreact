import React, { Component } from 'react';
//import Dasboard from '../../Pages/Dasboard';

class HomePage extends React.Component{
    render(){
        return(
   <div class="content-wrapper">
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Dashboard</h1>
            <p><h2>Absensi Karyawan</h2></p>
            <p>refresh jika tidak muncul chart</p>
          </div>
        </div>
      </div>
    </section>
    <section class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-6">
          
            <div class="card card-primary">
              <div class="card-header">
                <h3 class="card-title">Area Chart</h3>
                <div class="card-tools">
                </div>
              </div>
              <div class="card-body">
                <div class="chart">
                  <canvas id="areaChart" style={{height: '250px', width: '100%',}}></canvas>
                </div>
              </div>
            </div>
            <div class="card card-danger">
              <div class="card-header">
                <h3 class="card-title">Karyawan Berdasarkan Pendidikan</h3>
                <div class="card-tools">
                </div>
              </div>
              <div class="card-body">
                <canvas id="donutChart" style={{height: '250px', height: '250px', height: '250px', width: '100%',}}></canvas>
              </div>
            </div>
            <div class="card card-danger">
              <div class="card-header">
                <h3 class="card-title">Karyawan Berdasarkan Pendidikan</h3>
                <div class="card-tools">
                </div>
              </div>
              <div class="card-body">
                <canvas id="pieChart" style={{height: '250px', height: '250px', height: '250px', width: '100%',}}></canvas>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card card-info">
              <div class="card-header">
                <h3 class="card-title">Line Chart</h3>
                <div class="card-tools">
                </div>
              </div>
              <div class="card-body">
                <div class="chart">
                  <canvas id="lineChart" style={{height: '250px', height: '250px', height: '250px', width: '100%',}}></canvas>
                </div>
              </div>
            </div>
            <div class="card card-success">
              <div class="card-header">
                <h3 class="card-title">Bar Chart</h3>
                <div class="card-tools">
                </div>
              </div>
              <div class="card-body">
                <div class="chart">
                  <canvas id="barChart" style={{height: '250px', height: '250px', height: '250px', width: '100%',}}></canvas>
                </div>
              </div>
            </div>
            <div class="card card-success">
              <div class="card-header">
                <h3 class="card-title">Stacked Bar Chart</h3>
                <div class="card-tools">
                </div>
              </div>
              <div class="card-body">
                <div class="chart">
                  <canvas id="stackedBarChart" style={{height: '250px', height: '250px', height: '250px', width: '100%',}}></canvas>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
        )
    }
}

export default HomePage
