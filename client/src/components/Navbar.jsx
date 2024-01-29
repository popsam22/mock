import skoolbod from "../assets/skoolbod.png";
import instagram from "../assets/instagram.svg";
import meta from "../assets/meta.svg";
import whatsapp from "../assets/whatsapp.svg";

const Navbar = () => {
  return (
    <div className="flex justify-between">
      <div className="justify-start">
        <img
          src={skoolbod}
          className="w-[200px] h-[100px] max-md:w-[100px] object-cover"
          alt="logo"
        />
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
        <img
          src={whatsapp}
          alt="whatsapp"
          className="ml-2 max-md:w-[30px] max-md:h-[30px] object-cover"
        />
      </div>
    </div>
  );
};

export default Navbar;
