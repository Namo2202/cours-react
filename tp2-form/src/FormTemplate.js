import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const FormTemplate = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const formMess = document.querySelector(".form-message");

    emailjs
      .sendForm(
        "service_ru17om7",
        "template_ewehv44",
        form.current,
        process.env.REACT_APP_ID
      )
      .then(
        (result) => {
          //   console.log(result.text);
          form.current.reset();
          formMess.innerHTML = `<p class="success">Message envoyé ! </p>`;

          setTimeout(() => {
            formMess.innerHTML = "";
          }, 2500);
        },
        (error) => {
          //   console.log(error.text);
          formMess.innerHTML = `<p class="error">Une erreur s'est produite, veuillez réessayer</p>`;

          setTimeout(() => {
            formMess.innerHTML = "";
          }, 2500);
        }
      );
  };

  return (
    <div className="form-container">
      <form ref={form} onSubmit={sendEmail}>
        <label>Nom</label>
        <input type="text" name="name" required autoComplete="off" />
        <label>Email</label>
        <input type="email" name="email" required autoComplete="off" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Envoyer" required autoComplete="off" />
      </form>
      <div className="form-message"></div>
    </div>
  );
};

export default FormTemplate;
