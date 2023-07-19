import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDataContext } from "../context/lanContext";
import axios from "axios";
import BeatLoader from "react-spinners/BeatLoader";

const Error = () => {
  return <div className="font-bold">¡Ups! debes completar este campo</div>;
};

const Form = () => {
  const [sended, setSended] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);
  const { lan } = useDataContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setSending(true);
    const sender = {
      to: "info@thk-avalos.com",
      from: "no-reply@thk-avalos.com",
      from_name: "Estudio Feo",
      subject: "Contacto",
    };

    axios
      .post("https://thk-avalos.com/backend/send-email.php", { ...data, ...sender })
      .then((data) => {
        if (data.data === "success") {
          setSended(true);
          setSending(false);
        } else {
          setError(true);
          setSending(false);
        }
      })
      .catch(() => {
        setError(true);
        setSended(false);
      });
  };

  const text = {
    es: {
      name: "NOMBRE Y APELLIDO",
      email: "CORREO ELECTRÓNICO",
      message: "MENSAJE",
      send: "ENVIAR",
      thanks: "¡Gracias por contactarte con nosotros!",
      error: "Se produjo un error al enviar el mensaje :-(",
    },
    en: {
      name: "NAME AND SURNAME",
      email: "EMAIL ADDRESS",
      message: "MESSAGE",
      send: "SEND",
      thanks: "Thanks for contacting us!",
      error: "An error occurred while sending the message :-(",
    },
  };

  return (
    <>
      {error ? (
        <span className="text-2xl font-bold">{text[lan].error}</span>
      ) : sended ? (
        <span className="text-3xl font-bold">{text[lan].thanks}</span>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <input {...register("name", { required: true })} className="w-full h-11 p-3 text-black bg-transparent border-2 border-black" placeholder={text[lan].name} />
            {errors.name && <Error />}
          </div>
          <div className="mb-4">
            <input {...register("email", { required: true })} className="w-full h-11 p-3 text-black bg-transparent border-2 border-black" placeholder={text[lan].email} />
            {errors.email && <Error />}
          </div>
          <div className="mb-4">
            <textarea cols="30" rows="5" {...register("message", { required: true })} className="w-full p-3 text-black bg-transparent border-2 border-black" placeholder={text[lan].message} />
            {errors.message && <Error />}
          </div>
          <div>{sending ? <BeatLoader /> : <button className="bg-black w-full text-white h-11 font-bold btn">{text[lan].send}</button>}</div>
        </form>
      )}
    </>
  );
};

export default Form;
