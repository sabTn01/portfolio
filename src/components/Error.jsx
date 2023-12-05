function Error({ errorMessage }) {
  return (
    <div>
      {errorMessage && (
        <span className=" text-deep-orange-300 font-semibold ">
          {errorMessage}
        </span>
      )}
    </div>
  );
}

export default Error;
