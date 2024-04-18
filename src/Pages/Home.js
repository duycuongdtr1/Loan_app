import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import Slider from '@material-ui/core/Slider';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        fullname: '',
        date: null,
        email: '',
        sdth: '',
        cmnd: '',
        ghichu: '',
        money: 3000000,
    });

    const [age, setAge] = useState(0);

    const handleValue = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    const calculateAge = (dateString) => {
        const today = new Date();
        const birthDate = new Date(dateString);
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        return age;
    };

    const handleDateChange = (date) => {
        const formattedDate = date.toLocaleDateString('en-US', { day: '2-digit', month: '2-digit', year: 'numeric' });
        const calculatedAge = calculateAge(date);
        setValues({
            ...values,
            date: formattedDate,
        });
        setAge(calculatedAge);
    };

   const sendEmail = (e) => {
    e.preventDefault();

    if (age >= 18) {
        emailjs
            .send('service_vq4lej3', 'template_aluz5ke', values, {
                publicKey: 'lDfsUm7-L1HU0BQic',
                url: 'http://localhost:3000/Data'
            })
            .then(
                () => {
                    toast.success('Gửi mail vay tiền thành công');
                    // Reset the form values after successful submission
                    setValues({
                        fullname: '',
                        date: null,
                        email: '',
                        sdth: '',
                        cmnd: '',
                        ghichu: '',
                        money: 3000000,
                    });
                },
                (error) => {
                    toast.error('Hệ thống quá tải đơn');
                }
            );
    } else {
        toast.error('Bạn không đủ tuổi để vay tiền');
    }
};


    const marks = [
        { value: 1000000, label: '1tr' },
        { value: 2000000, label: '2tr' },
        { value: 3000000, label: '3tr' },
        { value: 4000000, label: '4tr' },
        { value: 5000000, label: '5tr' },
        { value: 6000000, label: '6tr' },
        { value: 7000000, label: '7tr' },
        { value: 8000000, label: '8tr' },
        { value: 9000000, label: '9tr' },
        { value: 10000000, label: '10tr' },
    ];

    function valuetext(value) {
        return `${value}VND`;
    }

    const [money, setMoney] = useState(3000000);

    useEffect(() => {
        setValues({ ...values, money: money });
    }, [money, setValues, values]);

    const formatted = new Intl.NumberFormat().format(money) + 'VND';

    const handleChangeValue = (e, newValue) => {
        setMoney(newValue);
    };

    return (
        <div>
            <div className='container'>
                Số tiền vay: {formatted}
                <Slider
                    aria-label='Small steps'
                    defaultValue={3000000}
                    getAriaValueText={valuetext}
                    step={1000000}
                    marks={marks}
                    min={1000000}
                    max={10000000}
                    onChangeCommitted={handleChangeValue}
                />
                
                <form autoComplete='off' onSubmit={sendEmail}>
                    <div className='form-group'>
                        <label htmlFor='fullNameInput'>Họ và tên</label>
                        <input type='text' className='form-control' id='fullNameInput' placeholder='Điền Họ và tên' name='fullname' onChange={handleValue} />
                    </div>
                    
                    <div className='form-group'>
                        <label htmlFor='phoneNumberInput'>Số điện thoại</label>
                        <input type='text' className='form-control' id='phoneNumberInput' placeholder='Điền số điện thoại' name='sdth' onChange={handleValue} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='cmndInput'>CMND</label>
                        <input type='text' className='form-control' id='cmndInput' placeholder='Điền CMND' name='cmnd' onChange={handleValue} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='emailInput'>Email</label>
                        <input type='email' className='form-control' id='emailInput' aria-describedby='emailHelp' placeholder='Điền email của bạn' name='email' onChange={handleValue} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='sexInput'>Giới tính</label>
                        <select className='form-control' name='sex' id='sexInput' onChange={handleValue}>
                            <option>Làm ơn chọn giới tính</option>
                            <option value='Nam'>Nam</option>
                            <option value='Nữ'>Nữ</option>
                        </select>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='dateOfBirthInput'>Ngày tháng năm sinh</label>
                        <DatePicker
                            selected={values.date}
                            onChange={handleDateChange}
                            dateFormat='dd/MM/yyyy'
                            placeholderText='Chọn ngày tháng năm sinh'
                            className='form-control'
                            name='dateOfBirthInput'
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='noteInput'>Ghi chú</label>
                        <textarea name='ghichu' className='form-control' id='noteInput' style={{ resize: 'none' }} onChange={handleValue} rows='6'></textarea>
                    </div>
                    <button type='submit' className='btn btn-primary'>Gửi Đơn</button>
                </form>
            </div>
        </div>
    );
}

export default Home;
