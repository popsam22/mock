import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Form from "./components/Form";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="flex flex-col items-center h-screen">
      <div className="w-[90%] pb-12">
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
    </div>
  );
};

export default App;
