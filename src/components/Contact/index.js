import './index.css'
import {useState} from 'react'

    const Contact=()=> {
        const [data, setData] = useState({
            fullname:'',
            phone:'',
            email:'',
            msg:'',
        });

        const onChangeInput = (event) =>{
            const {name, value } = event.target;

            setData((preVal) => {
                return {
                    ...preVal,
                    [name]: value,
                };
            });
        };

        const onSubmitForm = (event) => {
            event.preventDefault();
            alert(
                    `welcome ${data.fullname}`
            );
        };

    return(
        <div className='contact_container'>
            <div><h1>Contact us</h1></div>
            <div className='form_container'>
            <form className='form_list' onSubmit={onSubmitForm}>
            <label className='form_label'>
                FullName
                <input className='input_field' name='fullname' value={data.fullname} onChange={onChangeInput} type="text" placeholder="Enter your name" />
            </label>
            <label className='form_label'>
                Phone
                <input className='input_field' name='phone' value={data.phone} onChange={onChangeInput} type="text" placeholder="Mobile number" />
            </label>
            <label className='form_label'>
                Email address
                <input className='input_field' name='email' value={data.email} onChange={onChangeInput} type="text" placeholder="name@example.com" />
            </label>
            <label className='form_label'>
                Message
                <textarea className='text_message' name='msg' value={data.msg} onChange={onChangeInput} />
            </label>
            <button className='submit_btn' type='submit'>Submit Form</button>
        </form> 
            </div>
        </div>
    )
}

export default Contact 