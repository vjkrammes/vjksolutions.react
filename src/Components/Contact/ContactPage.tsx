import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAlert } from '../../Contexts/AlertContext';
import { MdClear, MdEmail, MdHome } from 'react-icons/md';
import './ContactPage.css';
import { IEmailModel } from '../../Interfaces/IEmailModel';
import { http } from '../../Services/http';
import { FaEnvelope } from 'react-icons/fa';

type FormData = {
  name: string;
  email: string;
  interest: string;
  subject: string;
  details: string;
  phone: string;
  smsOk: boolean;
  callOk: boolean;
  timezone: string;
};

export default function ContactPage() {
  const navigate = useNavigate();
  const { setAlert } = useAlert();
  const { register, handleSubmit, watch, reset } = useForm<FormData>({
    mode: 'onBlur',
    defaultValues: {
      name: '',
      email: '',
      interest: 'select',
      subject: '',
      details: '',
      phone: '',
      smsOk: false,
      callOk: false,
      timezone: '',
    },
  });
  function resetForm() {
    reset({
      name: '',
      email: '',
      interest: 'select',
      subject: '',
      details: '',
      phone: '',
      smsOk: false,
      callOk: false,
      timezone: '',
    });
    const name = document.getElementById('name');
    if (name) {
      name.focus();
    }
  }
  async function formSubmitted(data: FormData) {
    if (
      !data.name ||
      !data.email ||
      data.interest === 'select' ||
      !data.subject ||
      !data.details
    ) {
      setAlert('All fields marked with a red star are required', 'error', 5000);
      return;
    }
    if ((!data.phone || !data.timezone) && (data.callOk || data.smsOk)) {
      setAlert(
        'Please provide a phone number and time zone when selecting contact via call or SMS',
        'error',
        5000,
      );
      return;
    }
    const model: IEmailModel = {
      senderName: data.name,
      senderEmail: data.email,
      subject: data.subject,
      text: data.details,
      senderPhone: data.phone,
      voiceCall: data.callOk,
      sms: data.smsOk,
      timeZone: data.timezone,
      interest: data.interest,
      apiKey: process.env.REACT_APP_EMAIL_API_KEY || '',
    };
    const response = await http<string | string[], IEmailModel>({
      path: '/Email/Send',
      method: 'post',
      body: model,
    });
    if (response && response.ok) {
      resetForm();
      setAlert('Message sent successfully', 'success');
      return;
    }
    const messages = response.body as string[];
    if (messages && messages.length > 0) {
      setAlert(messages.join('\n'), 'error', 5000);
      return;
    }
    setAlert('An unknown error has been encountered', 'error', 5000);
  }
  return (
    <div className="container">
      <div className="header">
        <div className="heading">Contact Us</div>
        <button
          className="primarybutton headerbutton-left"
          onClick={() => navigate('/')}
        >
          <span>
            <MdHome /> Home
          </span>
        </button>
      </div>
      <div className="content">
        <div className="cu__text">
          You can use the form below to send an email to us. Please note that we
          do not store your email address or phone number (if provided). Nor do
          we use them for any other purpose other than to contact you in
          response to your inquiry.
        </div>
        <form onSubmit={handleSubmit(formSubmitted)}>
          <div className="formitem">
            <label className="formlabel" htmlFor="name">
              Name<sup className="redstar">*</sup>
            </label>
            <input
              className="forminput"
              type="text"
              id="name"
              autoFocus
              {...register('name')}
              placeholder="Name"
            />
          </div>
          <div className="formitem">
            <label className="formlabel" htmlFor="email">
              Email<sup className="redstar">*</sup>
            </label>
            <input
              className="forminput"
              type="email"
              id="email"
              {...register('email')}
              placeholder="Email"
            />
          </div>
          <div className="formitem">
            <label className="formlabel" htmlFor="interest">
              Interest<sup className="redstar">*</sup>
            </label>
            <select
              className="forminput"
              id="interest"
              {...register('interest')}
            >
              <option value={'select'}>Please select from the list</option>
              <option value={'fullstack'}>Full Stack Web Application</option>
              <option value={'backend'}>Web Back-end API</option>
              <option value={'client'}>
                Web Client Application (Front-end only)
              </option>
              <option value={'wpf'}>Windows Desktop GUI Application</option>
              <option value={'console'}>
                Console Application (Windows, Linux, Mac)
              </option>
              <option value={'contract'}>Contract Services</option>
              <option value={'other'}>Other (please describe below)</option>
            </select>
          </div>
          <div className="formitem">
            <label className="formlabel" htmlFor="subject">
              Subject<sup className="redstar">*</sup>
            </label>
            <input
              className="forminput"
              type="text"
              id="subject"
              {...register('subject')}
              placeholder="Subject"
            />
          </div>
          <div className="formitem">
            <label className="formlabel" htmlFor="details">
              Details<sup className="redstar">*</sup>
            </label>
            <textarea
              className="forminput"
              id="details"
              {...register('details')}
              placeholder="Details"
            />
          </div>
          <div className="formitem">
            <label className="formlabel" htmlFor="phone">
              Phone
            </label>
            <input
              className="forminput"
              type="text"
              {...register('phone')}
              placeholder="Phone"
            />
          </div>
          <div className="formitem">
            <label className="formlabel">&nbsp;</label>
            <label className="formlabel" htmlFor="smsok">
              <input
                className="forminput"
                type="checkbox"
                id="smsok"
                {...register('smsOk')}
              />
              Text OK
            </label>
            <label className="formlabel" htmlFor="callok">
              <input
                className="forminput"
                type="checkbox"
                {...register('callOk')}
              />
              Call OK
            </label>
          </div>
          <div className="formitem">
            <label className="formlabel" htmlFor="timezone">
              Time&nbsp;Zone
            </label>
            <input
              className="forminput"
              type="text"
              id="timezone"
              {...register('timezone')}
              placeholder="Enter your time zone or UTC offset"
            />
          </div>
          <div className="buttoncontainer">
            <button
              className="primarybutton"
              type="submit"
              disabled={
                !watch('name') ||
                !watch('email') ||
                watch('interest') === 'select' ||
                !watch('subject') ||
                !watch('details')
              }
            >
              <span>
                <MdEmail /> Send
              </span>
            </button>
            <button
              className="secondarybutton"
              type="button"
              onClick={resetForm}
            >
              <span>
                <MdClear /> Reset
              </span>
            </button>
          </div>
        </form>
        <div className="cp__mailcontact">
          <div className="cp__mc__header">
            <FaEnvelope /> Via Mail <FaEnvelope />
          </div>
          <div className="cp__mc__line1">VJK Solutions, LLC</div>
          <div className="cp__mc__line2">9200 NW 39th Avenue</div>
          <div className="cp__mc__line3">Suite 130-3218</div>
          <div className="cp__mc__line4">Gainesville, FL, 32606-3083</div>
        </div>
      </div>
    </div>
  );
}
