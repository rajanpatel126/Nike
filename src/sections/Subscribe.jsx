import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section
      id="contact-us"
      className="max-container flex justify-between items-center max-lg:flex-col gap-10"
    >
      <h3 className="text-4xl leading-[68px] lg:max-w-md font-bold font-palanquin">
        Sign Up for <span className="text-coral-red">Updates</span> &
        Newsletters
      </h3>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border-slate-gray sm:border rounded-full">
        <input
          type="text"
          placeholder="Enter your Email..."
          className="input text-xl"
        />
        <div className="flex max-sm:justify-end items-center max-sm:w-full ">
          <Button label="SignUp" fullWidth />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
