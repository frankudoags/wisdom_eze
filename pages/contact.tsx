import React from 'react'

const Contact = () => {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
    };

  return (
    <div className='h-[90vh] flex flex-col items-center max-w-7xl mx-auto p-4'>
      <h1 className='my-10'>Sign up as a mentee</h1>

      <form className='flex flex-col space-y-4 w-full max-w-[400px] mx-auto' onSubmit={handleSubmit}>
        <div className='flex flex-col gap-2 w-full'>
            <label className='text-sm form-label' htmlFor='name'>Name</label>
            <input type='text' name='name' id='name' className='form-input' placeholder='Enter your name' onChange={handleChange} value={formData.name}/>
        </div>
        <div className='flex flex-col gap-2 w-full'>
            <label className='text-sm form-label' htmlFor='email'>Email</label>
            <input type='email' name='email' id='email' className='form-input' placeholder='Enter your email' onChange={handleChange} value={formData.email}/>
        </div>
        <div className='flex flex-col gap-2 w-full'>
            <label className='text-sm form-label' htmlFor='phone'>Phone</label>
            <input type='tel' name='phone' id='phone' className='form-input' placeholder='Enter your phone number' onChange={handleChange} value={formData.phone}/>
        </div>
        <div className='flex flex-col gap-2 w-full'>
            <label className='text-sm form-label' htmlFor='message'>Message</label>
            <textarea name='message' id='message' rows={3} className='form-input' placeholder='Enter your message' onChange={handleChange} value={formData.message}/>
        </div>
        <div className='w-full mt-6'>
        <button type='submit' className='btn-blue-submit mt-6 rounded'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Contact
