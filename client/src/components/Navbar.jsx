import skoolbod from "../assets/skoolbod.png";
import instagram from "../assets/instagram.svg";
import meta from "../assets/meta.svg";
import whatsapp from "../assets/whatsapp.svg";

const Navbar = () => {
  return (
    <div className="flex justify-between">
      <div className="justify-start">
        <a href="https://skoolbod.com" target="_blank">
          <img
            src={skoolbod}
            className="w-[400px] h-[100px] max-md:w-[100px] object-cover"
            alt="logo"
          />
        </a>
      </div>
      <div className="flex mr-4 items-center">
        <img
          src={instagram}
          alt="instagram"
          className="ml-2 max-md:w-[30px] max-md:h-[30px] object-cover"
        />
        <img
          src={meta}
          alt="meta"
          className="ml-2 max-md:w-[30px] max-md:h-[30px] object-cover"
        />
        <a href="https://wa.me/2349134281674" target="_blank">
          <img
            src={whatsapp}
            alt="whatsapp"
            className="ml-2 max-md:w-[30px] max-md:h-[30px] object-cover"
          />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
