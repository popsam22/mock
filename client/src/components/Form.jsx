import hero from "../assets/hero_form.png";
const Form = () => {
  const inputStyle = "p-2 border border-black rounded-lg focus:outline-none";

  return (
    <div className="flex max-md:flex-col gap-6 justify-between">
      <div className="w-1/2 max-md:w-full max-md:hidden">
        <img
          src={hero}
          alt="form-image"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="w-1/2 max-md:w-full">
        <form className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <label className="text-xl max-md:text-sm font-medium">
              First Name
            </label>
            <input
              type="text"
              placeholder="Enter your first name"
              required
              className={inputStyle}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xl max-md:text-sm font-medium">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Enter your surname"
              required
              className={inputStyle}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xl max-md:text-sm font-medium">
              Date Of Birth
            </label>
            <input type="date" required className={inputStyle} />
          </div>
          <div>
            <label className="text-xl max-md:text-sm font-medium">Gender</label>
            <div className="flex gap-2">
              <div className="flex gap-2">
                <label className="text-xl max-md:text-sm">
                  <input type="radio" id="male" name="male" required /> Male
                </label>
              </div>
              <div className="flex gap-2">
                <label className="text-xl max-md:text-sm">
                  <input type="radio" id="female" name="male" required /> Female
                </label>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xl max-md:text-sm font-medium">
              Nationality
            </label>
            <input
              type="text"
              required
              className={inputStyle}
              placeholder="Enter your nationality"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xl max-md:text-sm font-medium">
              Parent&apos;s Name
            </label>
            <input
              type="text"
              className={inputStyle}
              placeholder="Enter your parent's name"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xl max-md:text-sm font-medium">
              Phone Number
            </label>
            <input
              type="number"
              className={inputStyle}
              placeholder="Enter your phone number"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xl max-md:text-sm font-medium">
              Address
            </label>
            <input
              type="text"
              className={inputStyle}
              placeholder="Enter your address"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xl max-md:text-sm font-medium">Email</label>
            <input
              type="email"
              className={inputStyle}
              placeholder="Enter your email address"
            />
          </div>
        </form>
        <div className="flex mt-5">
          <button className="w-full rounded-lg bg-green-500 text-xl max-md:text-sm font-semibold p-4 hover:bg-green-600">
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
