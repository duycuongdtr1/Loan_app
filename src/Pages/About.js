import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const About = () => {
  // Settings for React Slick slider
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-8 mx-auto">
          {/* Banner quảng cáo */}
          <Slider {...settings}>
            <div>
              <img src={process.env.PUBLIC_URL + '/vaytien.jpg'} alt="Banner 1" />
            </div>
            <div>
              <img src={process.env.PUBLIC_URL + '/vay-tien-online-1.jpg'} alt="Banner 2" />
            </div>
            <div>
              <img src={process.env.PUBLIC_URL + '/vay-tien-online.jpg'} alt="Banner 3" />
            </div>
          </Slider>
          
          <h2 className="text-center mb-4">Về Chúng Tôi</h2>
          {/* Nội dung Về chúng tôi */}
          <p className="lead">
            Công ty TNHH MTV Cho Vay Tài Chính Uy tín  tự hào là  thành viên Hiệp hội Cho vay Việt Nam với hơn 10 năm kinh nghiệm trong lĩnh vực cung cấp các giải pháp cho vay tiêu dùng, vay thế chấp,vay kinh doanh với lãi suất cạnh tranh.
          </p>
          <p className="lead">
            Sứ mệnh của chúng tôi là giúp mọi người dễ dàng tiếp cận nguồn vốn để thực hiện ước mơ.
          </p>
          <h3 className="text-center mb-3">Giá Trị Cốt Lõi</h3>
          {/* Giá trị cốt lõi */}
          <ul className="list-group">
            <li className="list-group-item">
              <strong>Uy tín:</strong> Luôn đặt uy tín lên hàng đầu, cam kết mang đến cho khách hàng những sản phẩm và dịch vụ chất lượng cao, an toàn và tin cậy.
            </li>
            <li className="list-group-item">
              <strong>Trách nhiệm:</strong> Hoạt động minh bạch, rõ ràng, chịu trách nhiệm trước mọi giao dịch và cam kết bảo vệ quyền lợi khách hàng.
            </li>
            <li className="list-group-item">
              <strong>Minh bạch:</strong> Cung cấp đầy đủ thông tin về lãi suất, phí, quy trình vay vốn một cách rõ ràng, chi tiết.
            </li>
            <li className="list-group-item">
              <strong>An toàn:</strong> Đảm bảo an toàn cho thông tin cá nhân và giao dịch của khách hàng.
            </li>
            <li className="list-group-item">
              <strong>Tận tâm:</strong> Luôn lắng nghe và đáp ứng nhu cầu của khách hàng một cách tận tâm nhất.
            </li>
          </ul>
          <h3 className="text-center mb-3">Liên Hệ</h3>
          {/* Thông tin liên hệ */}
          <ul className="list-group">
            <li className="list-group-item">
              <strong>Địa chỉ trụ sở và chi nhánh:</strong> TP.HCM, Xa lộ Hà Nội, P.Hiệp Phú, TP.Thủ Đức, TP.HCM
            </li>
            <li className="list-group-item">
              <strong>Điện thoại:</strong> 83(35)798-54-50
            </li>
            <li className="list-group-item">
              <strong>Email:</strong> nobodyknow@gmail.com
            </li>
            <li className="list-group-item">
              <strong>Website:</strong> [...]
            </li>
          </ul>
          <p className="text-center mt-4">
            Hãy đến với chúng tôi để trải nghiệm dịch vụ cho vay uy tín và chuyên nghiệp nhất!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
