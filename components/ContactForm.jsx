import React from 'react'

const ContactForm = () => {
  return (
    <form name='contact' method='POST' data-netlify='true' className='form'>
      <div className='form__group'>
        <input
          className='form__input'
          type='text'
          name='name'
          autoComplete='off'
          placeholder='Full Name'
        />
        <label htmlFor='name' className='form__label'>
          Full Name
        </label>
      </div>
      <div className='form__group'>
        <input
          className='form__input'
          type='email'
          name='email'
          autoComplete='off'
          placeholder='Email'
        />
        <label htmlFor='email' className='form__label'>
          Email
        </label>
      </div>
      <div className='form__group'>
        <input
          className='form__input'
          type='tel'
          name='phone'
          autoComplete='off'
          placeholder='Phone'
        />
        <label htmlFor='phone' className='form__label'>
          Phone
        </label>
      </div>
      <div className='form__group'>
        <textarea
          className='form__input form__input--text-area'
          type='textarea'
          name='message'
          autoComplete='off'
          placeholder='Message'
        />
        <label htmlFor='message' className='form__label'>
          Message
        </label>
      </div>
      <div className='form__group'>
        <button className='btn' type='submit'>
          Submit
        </button>
      </div>
    </form>
  )
}

export default ContactForm
