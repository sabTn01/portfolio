import img from "/contact.png";
import { useForm } from "react-hook-form";
import { useEmail } from "../hooks/useEmail";
import Error from "./Error";
import { Spinner } from "@material-tailwind/react";
import DOMPurify from "dompurify";

function Contact() {
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { sendEmail, isLoading } = useEmail();
  const { errors } = formState;

  const sanitizeInput = (input) => {
    return DOMPurify.sanitize(input);
  };

  function onSubmit({ name, email, message, phone }) {
    const sanitizedName = sanitizeInput(name);
    const sanitizedEmail = sanitizeInput(email);
    const sanitizedMessage = sanitizeInput(message);
    const sanitizedPhone = sanitizeInput(phone);

    sendEmail(
      {
        name: sanitizedName,
        email: sanitizedEmail,
        message: sanitizedMessage,
        phone: sanitizedPhone,
      },
      {
        onSettled: () => reset(),
      }
    );
  }
  return (
    <div
      className="contact bg-[linear-gradient(90deg,#60a5fa,#38097a);] w-full px-10"
      id="contact"
    >
      <div className="wrapper flex justify-center py-2 gap-52 lg:py-12">
        <div className="imgbox lg:hidden">
          <img className="w-[550px] h-full" src={img} alt="contact" />
        </div>

        <div className="content-box">
          <h1 className="text-white font-bold text-4xl py-4">Get In Touch</h1>

          <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-2 py-2  ">
              <input
                className="bg-transparent h-14 rounded-2xl  border-[1px] border-white pl-4 text-white placeholder-white w-full "
                type="text"
                placeholder="Name"
                id="name"
                disabled={isLoading}
                minLength={3}
                maxLength={15}
                {...register("name", {
                  required: "This field is required",
                })}
              />
              {errors?.name?.message && (
                <Error errorMessage={errors?.name?.message}></Error>
              )}
            </div>
            <div className="flex gap-4  py-4  ">
              <div className="flex flex-col">
                <input
                  className="bg-transparent h-14 rounded-2xl border-[1px] border-white pl-4 text-white placeholder-white lg:w-36"
                  type="email"
                  placeholder="Email"
                  id="email"
                  disabled={isLoading}
                  {...register("email", {
                    required: "This field is required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Please provide a valid email",
                    },
                  })}
                />
                {errors?.email?.message && (
                  <Error errorMessage={errors?.email?.message}></Error>
                )}
              </div>

              <div className="flex flex-col">
                <input
                  className="bg-transparent h-14 rounded-2xl border-[1px] border-white pl-4 text-white placeholder-white  lg:w-36"
                  type="tel"
                  placeholder="Phone"
                  id="phone"
                  disabled={isLoading}
                  {...register("phone", {
                    minLength: 10,
                    maxLength: 15,
                  })}
                />
                {errors?.phone?.message && (
                  <Error errorMessage={errors?.phone?.message}></Error>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-2 py-2">
              <textarea
                className="bg-transparent rounded-2xl border-[1px] border-white h-36 pl-4 text-white w-full placeholder-white pt-2"
                rows={40}
                cols={35}
                placeholder="Message"
                id="message"
                maxLength={100}
                minLength={10}
                disabled={isLoading}
                {...register("message", {
                  required: "This field is required",
                })}
              ></textarea>

              {errors?.message?.message && (
                <Error errorMessage={errors?.message?.message}></Error>
              )}
            </div>

            <button
              disabled={isLoading}
              className="bg-white border-black border-[1] py-[16px] rounded-lg px-8 my-8 font-bold hover:bg-blue-200"
            >
              {isLoading ? (
                <div className="flex gap-2 py-2 justify-center">
                  <Spinner className="h-6 w-6" />
                  <span>Processing...</span>
                </div>
              ) : (
                <p>Send</p>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
