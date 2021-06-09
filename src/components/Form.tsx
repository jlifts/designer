import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

type Inputs = {
  email: string;
  subject: string;
  message: string;
  values: string;
};

function Form() {
  const {
    register,
    // handleSubmit,
    formState: { errors },
    setValue,
    setError,
  } = useForm<Inputs>();

  //Netlify Forms
  const onSubmitForm = async (e, setSubmitText) => {
    e.preventDefault();
    setSubmitText('Submitting ...');
    const formElements = [...e.currentTarget.elements];
    const filledOutForm = formElements
      .filter((elem) => !!elem.value)
      .map(
        (element) =>
          encodeURIComponent(element.name) +
          '=' +
          encodeURIComponent(element.value)
      )
      .join('&');

    await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: filledOutForm,
    })
      .then(() => {
        setSubmitText('Successfully submitted!');
        e.target.reset();
      })
      .catch((_) => {
        setSubmitText(
          'There was an error with your submission, please email me using burgessj247@gmail.com.'
        );
      });
  };

  //Notify Status
  const [submitText, setSubmitText] = useState(null);

  //use to be refs, event listeners
  useEffect(() => {
    register('email', {
      required: {
        value: true,
        message: 'Please Enter Your Email',
      },
      minLength: {
        value: 8,
        message: 'This is not a long enough email address',
      },
      maxLength: {
        value: 39,
        message: 'This is too long for an email',
      },
    });
    register('subject', {
      required: {
        value: true,
        message: 'Please Enter A Subject',
      },
    });
    register('message', {
      required: {
        value: true,
        message: 'Please let me Know what I can help with',
      },
    });
  }, []);

  return (
    <section className='forms'>
      <form
        // Netlify
        onSubmit={(e) => onSubmitForm(e, setSubmitText)}
        method='POST'
        data-netlify='true'
        name='contact-form'
      >
        <input type='hidden' name='form-name' value='contact-form' />
        <div className='form-group'>
          <input
            type='email'
            placeholder='Email'
            className='form-control'
            name='email'
            onChange={(e) => {
              const value = e.target.value;
              if (value === ' ') {
                setError('email', { shouldFocus: true });
              } else {
                setValue('email', e.target.value);
              }
            }}
          />
          <label htmlFor='email' className='form-label'>
            Your Email
          </label>
          <span className='error-form'>{errors?.email?.message}</span>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Subject'
            className='form-control'
            name='subject'
            onChange={(e) => {
              const value = e.target.value;
              if (value === ' ') {
                setError('subject', { shouldFocus: true });
              } else {
                setValue('subject', e.target.value);
              }
            }}
          />
          <label htmlFor='subject' className='form-label'>
            Subject
          </label>
          <span className='error-form'>{errors?.subject?.message}</span>
        </div>
        <div className='form-group'>
          <textarea
            className='form-control'
            placeholder='Message'
            cols={30}
            rows={8}
            name='message'
            onChange={(e) => {
              const value = e.target.value;
              if (value === ' ') {
                setError('message', { shouldFocus: true });
              } else {
                setValue('message', e.target.value);
              }
            }}
          />
          <label htmlFor='message' className='messaging'>
            Message
          </label>
          <span className='error-form me'>{errors?.message?.message}</span>
        </div>
        <>
          <div className='form-btn'>
            <input type='submit' className='btnSubmit' value={submitText} />
          </div>
        </>
      </form>
    </section>
  );
}

export default Form;
