import { useState } from "react";
import hero from "../assets/hero_form.png";
import zenkleus from "../assets/Zenkleus-logo.png";
import axios from "axios";
import { toast } from "react-toastify";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [nationality, setNationality] = useState("");
  const [parentName, setParentName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [referral_code, setReferralCode] = useState("");
  const [school, setSchool] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [cbt_center, setCbtCenter] = useState("Cybertron");
  const [image, setImage] = useState("");
  const [session, setSession] = useState("morning");
  const [schoolType, setSchoolType] = useState("");
  const [classes, setClasses] = useState("arts");

  const inputStyle = "p-2 border border-black rounded-lg focus:outline-none";

  const cbtOption = [
    { title: "Cybertron Limited", value: "Cybertron" },
    {
      title: "BMG institute of Information technology",
      value: "BMG",
    },
    {
      title: "Wudil Computer Information Technology",
      value: "Wudil",
    },
    { title: "Pioneers ICT", value: "Pioneers" },
    {
      title: "Legend ICT Integrated service Kano",
      value: "LEGEND",
    },
    { title: "Butale ICT buk", value: "Butale" },
    { title: "Hamdala ICT", value: "Hamdala" },
    {
      title: "Au Mai Nasara Digital ICT consultancy",
      value: "Aua",
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const body = {
      firstName,
      lastName,
      dob,
      gender,
      nationality,
      email,
      parentsName: parentName,
      address,
      cbt_center,
      phone: phoneNumber,
      school,
      schoolType,
      session,
      referral_code,
      classes,
    };

    const res = await axios.post(
      "https://mock-service-mpv9.onrender.com/api/v1/payment",
      {
        name: `${firstName} ${lastName}`,
        email,
        amount: 1500,
      }
    );
    console.log(res);
    if (res?.data?.data?.status) {
      window.open(res?.data?.data?.data?.authorization_url, "_blank");

      let attempts = 0;
      const verifyInterval = setInterval(async () => {
        const verifyResponse = await axios.get(
          `https://mock-service-mpv9.onrender.com/api/v1/payment/create-payment?reference=${res?.data?.data?.data?.reference}`
        );
        attempts++;
        if (verifyResponse?.data?.data?.transaction_status === "success") {
          const result = await axios.post(
            "https://mock-service-mpv9.onrender.com/api/v1/student",
            body
          );
          if (result?.status === 200) {
            toast.success("Registration successful!");
            setIsLoading(false);
            setFirstName("");
            setLastName("");
            setDob("");
            setGender("");
            setNationality("");
            setParentName("");
            setPhoneNumber("");
            setAddress("");
            setEmail("");
            setReferralCode("");
            setSchool("");
            setCbtCenter("cybertron-limited");
            setSchool("");
            setSession("");
            setClasses("morning");
          } else {
            setIsLoading(false);
            toast.error(res?.message);
            return;
          }
        }
        if (verifyResponse?.data?.data?.transaction_status === "success") {
          clearInterval(verifyInterval);
        } else {
          if (attempts > 5) {
            clearInterval(verifyInterval);
          }
        }
      }, 60000);
    } else {
      setIsLoading(false);
      console.log(res);
      toast.error(res?.data?.message);
      return;
    }
  };

  return (
    <div>
      <div className="flex max-md:flex-col gap-6 justify-between">
        <div className="w-1/2 max-md:w-full max-md:hidden">
          <img
            src={hero}
            alt="form-image"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="w-1/2 max-md:w-full">
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <label className="text-xl max-md:text-sm font-medium">
                First Name
              </label>
              <input
                name="firstName"
                type="text"
                placeholder="Enter your first name"
                required
                className={inputStyle}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xl max-md:text-sm font-medium">
                Last Name
              </label>
              <input
                name="lastName"
                type="text"
                placeholder="Enter your surname"
                required
                className={inputStyle}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xl max-md:text-sm font-medium">
                Date Of Birth
              </label>
              <input
                type="date"
                required
                className={inputStyle}
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />
            </div>
            <div>
              <label className="text-xl max-md:text-sm font-medium">
                Gender
              </label>
              <div className="flex gap-2">
                <div className="flex gap-2">
                  <label className="text-xl max-md:text-sm">
                    <input
                      type="radio"
                      id="male"
                      name="male"
                      required
                      value={"Male"}
                      onChange={(e) => setGender(e.target.value)}
                    />{" "}
                    Male
                  </label>
                </div>
                <div className="flex gap-2">
                  <label className="text-xl max-md:text-sm">
                    <input
                      type="radio"
                      id="female"
                      name="male"
                      required
                      value={"Female"}
                      onChange={(e) => setGender(e.target.value)}
                    />{" "}
                    Female
                  </label>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xl max-md:text-sm font-medium">
                Nationality
              </label>
              <input
                name="country"
                type="text"
                required
                className={inputStyle}
                value={nationality}
                onChange={(e) => setNationality(e.target.value)}
                placeholder="Enter your nationality"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xl max-md:text-sm font-medium">
                Passport Photo
              </label>
              <input
                name="image"
                type="file"
                // required
                className={inputStyle}
                onChange={(e) => setImage(e.target.files[0])}
                // value={image}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xl max-md:text-sm font-medium">
                Parent&apos;s Name
              </label>
              <input
                name="parentName"
                type="text"
                className={inputStyle}
                placeholder="Enter your parent's name"
                value={parentName}
                onChange={(e) => setParentName(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xl max-md:text-sm font-medium">
                Phone Number
              </label>
              <input
                name="phoneNumber"
                type="number"
                className={inputStyle}
                placeholder="Enter your phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xl max-md:text-sm font-medium">
                Address
              </label>
              <input
                name="address"
                type="text"
                className={inputStyle}
                placeholder="Enter your address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xl max-md:text-sm font-medium">
                Email
              </label>
              <input
                name="email"
                type="email"
                className={inputStyle}
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xl max-md:text-sm font-medium">
                School
              </label>
              <input
                name="school"
                type="text"
                className={inputStyle}
                placeholder="Enter the name of your school"
                value={school}
                onChange={(e) => setSchool(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xl max-md:text-sm font-medium">
                Type of school
              </label>
              <div className="flex gap-2">
                <div className="flex gap-2">
                  <label className="text-xl max-md:text-sm">
                    <input
                      type="radio"
                      id="private"
                      name="private"
                      required
                      value={"private"}
                      onChange={(e) => setSchoolType(e.target.value)}
                    />{" "}
                    Private School
                  </label>
                </div>
                <div className="flex gap-2">
                  <label className="text-xl max-md:text-sm">
                    <input
                      type="radio"
                      id="public"
                      name="private"
                      required
                      value={"public"}
                      onChange={(e) => setSchoolType(e.target.value)}
                    />{" "}
                    Public School
                  </label>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xl max-md:text-sm font-medium">
                Department
              </label>
              <select
                name="class"
                value={classes}
                onChange={(e) => setClasses(e.target.value)}
                className={inputStyle}
              >
                <option value="arts">Arts</option>
                <option value="science">Science</option>
                <option value="commercial">Commercial</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xl max-md:text-sm font-medium">
                CBT center
              </label>
              <select
                name="cbtCenter"
                value={cbt_center}
                onChange={(e) => setCbtCenter(e.target.value)}
                className={inputStyle}
              >
                {cbtOption.map((item, idx) => (
                  <option key={idx} value={item.value}>
                    {item.title}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xl max-md:text-sm font-medium">
                Select Exam Session
              </label>
              <select
                name="session"
                value={session}
                onChange={(e) => setSession(e.target.value)}
                className={inputStyle}
              >
                <option value="morning">Morning</option>
                <option value="evening">Evening</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xl max-md:text-sm font-medium">
                Referral Code
              </label>
              <input
                name="referralCode"
                type="text"
                className={inputStyle}
                placeholder="Enter your referral code"
                value={referral_code}
                onChange={(e) => setReferralCode(e.target.value)}
              />
            </div>
            <div className="flex mt-5">
              <button
                type="submit"
                className="w-full rounded-lg bg-green-500 text-xl max-md:text-sm font-semibold p-4 hover:bg-green-600"
              >
                {isLoading ? "Please wait..." : "Pay Now 1,500"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
