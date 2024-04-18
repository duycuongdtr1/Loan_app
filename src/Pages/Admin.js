import React from 'react';
import { Link } from 'react-router-dom';

const Admin = () => {
  return (
    <div className="container">
      <h2 className="mt-5 mb-3">Dashboard Quản Lý Cơ Sở Dữ Liệu</h2>
      <div className="row">
        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Người Dùng</h5>
              <p className="card-text">Quản lý thông tin người dùng</p>
              <Link to="/admin/users" className="btn btn-primary">Xem</Link>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Đơn Vay</h5>
              <p className="card-text">Quản lý đơn </p>
              <Link to="/admin/orders" className="btn btn-primary">Xem</Link>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Sản Phẩm (cầm)</h5>
              <p className="card-text">Quản lý thông tin đồ</p>
              <Link to="/admin/products" className="btn btn-primary">Xem</Link>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Thống Kê</h5>
              <p className="card-text">Xem thống kê và báo cáo</p>
              <Link to="/admin/statistics" className="btn btn-primary">Xem</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
