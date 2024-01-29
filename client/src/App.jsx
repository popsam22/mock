import Form from "./components/Form";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="flex flex-col items-center h-screen">
      <div className="w-[90%] pb-12">
        <Navbar />
        <Form />
      </div>
    </div>
  );
};

export default App;
