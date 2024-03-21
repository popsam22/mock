import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import zenkleus from "./assets/Zenkleus-logo.png";

const App = () => {
  return (
    <div className="flex flex-col items-center h-screen">
      <div className="w-[90%] pb-12 max-md:pb-4">
        <Navbar />
        <Form />
        <ToastContainer
          position="bottom-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
      <div className=" w-full flex justify-center mb-4">
        <footer>
          <div className="flex items-center">
            <p>Powered by</p>
            <div className="h-[120px]">
              <a href="https://zenkleus.com" target="_blank" rel="noreferrer">
                <img
                  src={zenkleus}
                  alt="logo"
                  className="object-cover w-full h-full"
                />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
