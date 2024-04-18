import React, { useState } from 'react';

const Condition = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Gửi thông tin liên hệ đến backend hoặc xử lý dữ liệu ở đây
    console.log({ name, email, phone, message });
    // Sau khi gửi, có thể hiển thị một thông báo hoặc làm điều gì đó khác
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Thông Tin Điều Khoản và Quyền Lợi Vay</h2>
      <div className="row">
        <div className="col-md-8 mx-auto">
          <p>Đây là nội dung về điều khoản và quyền lợi vay. Bạn có thể điền nội dung cụ thể ở đây.</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Họ và Tên:</label>
              <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Số Điện Thoại:</label>
              <input type="tel" className="form-control" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Thông Điệp:</label>
              <textarea className="form-control" id="message" rows="3" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Gửi</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Condition;
