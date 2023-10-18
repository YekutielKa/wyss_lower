import React, { useRef } from "react";
import emailjs from '@emailjs/browser';

import "./Contacts.css";

const Contacts = () => {

  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gkhkbcl', 'template_ewlw8kf', form.current, 'Z45td5-pdLJNas06L')
      .then((res) => {
          console.log(res.text);
      }, (error) => {
          console.log(error.text);
      });
  }
  
  return (
    <>
      <form ref={form} onSubmit={sendEmail} class="form-horizontal"  method="post" id="contact_form">
        <fieldset className="contact_content">
          <div>
            <img className="contact_img" src="contact.png" />
          </div>
          <div>
            <div class="form-group">
              <label class="col-md-4 control-label">Имя</label>
              <div class="col-md-4 inputGroupContainer">
                <div class="input-group">
                  <span class="input-group-addon">
                    <i class="glyphicon glyphicon-user"></i>
                  </span>
                  <input
                    name="first_name"
                    placeholder="Имя"
                    class="form-control"
                    type="text"
                    required
                  />
                </div>
              </div>
            </div>
            <div class="form-group">
              <label class="col-md-4 control-label">Фамилия</label>
              <div class="col-md-4 inputGroupContainer">
                <div class="input-group">
                  <span class="input-group-addon">
                    <i class="glyphicon glyphicon-user"></i>
                  </span>
                  <input
                    name="last_name"
                    placeholder="Фамилия"
                    class="form-control"
                    type="text"
                    required
                  />
                </div>
              </div>
            </div>
            <div class="form-group">
              <label class="col-md-4 control-label">E-Mail</label>
              <div class="col-md-4 inputGroupContainer">
                <div class="input-group">
                  <span class="input-group-addon">
                    <i class="glyphicon glyphicon-envelope"></i>
                  </span>
                  <input
                    name="email"
                    placeholder="E-Mail Address"
                    class="form-control"
                    type="email"
                  />
                </div>
              </div>
            </div>
            <div class="form-group">
              <label class="col-md-4 control-label">Телефон</label>
              <div class="col-md-4 inputGroupContainer">
                <div class="input-group">
                  <span class="input-group-addon">
                    <i class="glyphicon glyphicon-earphone"></i>
                  </span>
                  <input
                    name="phone"
                    placeholder="+(972)-55-555-55-55"
                    class="form-control"
                    type="text"
                    required
                  />
                </div>
              </div>
            </div>
            <div class="form-group">
              <label class="col-md-4 control-label">Ваше обращение</label>
              <div class="col-md-4 inputGroupContainer">
                <div class="input-group">
                  <span class="input-group-addon">
                    <i class="glyphicon glyphicon-pencil"></i>
                  </span>
                  <textarea
                    class="form-control"
                    name="comment"
                    placeholder="Ваше обращение"
                    required
                  ></textarea>
                </div>
              </div>
            </div>
            <div class="form-group">
              <label class="col-md-4 control-label"></label>
              <div class="col-md-4">
                <button type="submit" class="btn btn-warning">
                  Отправить<span class="glyphicon glyphicon-send"></span>
                </button>
              </div>
            </div>
          </div>
        </fieldset>
      </form>
      <div className="contact_text">
        <p>Всегда буду рада помочь!</p>
      </div>
    </>
  );
};

export default Contacts;
