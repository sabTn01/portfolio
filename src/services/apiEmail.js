import emailjs from "@emailjs/browser";

export async function sendEmailApi({ name, email, message, phone }) {
  const { VITE_EMAILJS_SERVICEID, VITE_EMAILJS_TEMPLATEID, VITE_EMAILJS_PKEY } =
    import.meta.env;

  var params = {
    from_name: `${name}`,
    to_name: "Saber",
    message: `${message} ${name} / ${email} / ${phone}`,
  };

  const { status, text } = await emailjs.send(
    `${VITE_EMAILJS_SERVICEID}`,
    `${VITE_EMAILJS_TEMPLATEID}`,
    params,
    `${VITE_EMAILJS_PKEY}`
  );

  if (status !== 200) {
    console.error(text);
    throw new Error(text);
  }

  return status;
}
