import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./Form.module.css";

export default function Form() {
  const nom = useRef(null);
  const prenom = useRef(null);
  const email = useRef(null);
  const message = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    validateNom();
    validatePrenom();
    validateEmail();
    validateMessage();

    if (
      nom.current &&
      prenom.current &&
      email.current &&
      message.current &&
      event.currentTarget.checkValidity()
    ) {
      console.log("Nom: ", nom.current.value);
      console.log("Prenom: ", prenom.current.value);
      console.log("Email: ", email.current.value);
      console.log("Message: ", message.current.value);

      emailjs
        .sendForm(
          "service_696543g",
          "template_q9he2of",
          event.target,
          "_NknpJGd6HjhaohDy"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      event.target.reset();
    }
  };

  const [msgErreurNom, setMsgErreurNom] = useState("");
  const validateNom = () => {
    if (nom.current.value === "") {
      setMsgErreurNom("Veuillez entrer votre Nom");
    } else {
      setMsgErreurNom("");
    }
  };

  const [msgErreurPrenom, setMsgErreurPrenom] = useState("");
  const validatePrenom = () => {
    if (prenom.current.value === "") {
      setMsgErreurPrenom("Veuillez entrer votre Prénom");
    } else {
      setMsgErreurPrenom("");
    }
  };

  const [msgErreurEmail, setMsgErreurEmail] = useState("");
  const validateEmail = () => {
    if (email.current.value === "") {
      setMsgErreurEmail("Veuillez entrer votre addresse courriel");
    } else {
      if (email.current.validity.valid) {
        setMsgErreurEmail("");
      } else if (email.current.validity.typeMismatch) {
        setMsgErreurEmail("Veuillez entrer un addresse courriel valide");
      }
    }
  };

  const [msgErreurMessage, setMsgErreurMessage] = useState("");
  const validateMessage = () => {
    if (message.current.validity.valid) {
      setMsgErreurMessage("");
    } else if (message.current.value === "") {
      setMsgErreurMessage("Veuillez entrer votre message");
    }
  };

  const confirmationMessage = () => {
    if (
      nom.current.validity.valid &&
      prenom.current.validity.valid &&
      email.current.validity.valid &&
      message.current.validity.valid
    ) {
      toast.success("Message envoyé!", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <form noValidate className={styles.form} onSubmit={handleSubmit}>
      <h2>Contactez-Moi</h2>

      <label>
        <input
          type="text"
          ref={nom}
          name="nom"
          placeholder="Nom"
          onChange={validateNom}
          onBlur={validateNom}
          required
        />
      </label>
      {msgErreurNom !== "" && (
        <div className={styles.erreur}>{msgErreurNom}</div>
      )}

      <label>
        <input
          type="text"
          ref={prenom}
          name="prenom"
          placeholder="Prénom"
          onChange={validatePrenom}
          onBlur={validatePrenom}
          required
        />
      </label>
      {msgErreurPrenom !== "" && (
        <div className={styles.erreur}>{msgErreurPrenom}</div>
      )}

      <label>
        <input
          type="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          ref={email}
          name="email"
          placeholder="Courriel"
          onChange={validateEmail}
          onBlur={validateEmail}
          required
        />
      </label>
      {msgErreurEmail !== "" && (
        <div className={styles.erreur}>{msgErreurEmail}</div>
      )}

      <label>
        <textarea
          ref={message}
          name="message"
          placeholder="Votre Message ici..."
          onChange={validateMessage}
          onBlur={validateMessage}
          required
        />
      </label>
      {msgErreurMessage !== "" && (
        <div className={styles.erreur}>{msgErreurMessage}</div>
      )}

      <input type="submit" value="Envoyer" onClick={confirmationMessage} />

      <ToastContainer
        toastStyle={{ backgroundColor: "#000" }}
        transition={Slide}
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </form>
  );
}
