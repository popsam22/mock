/* eslint-disable react/prop-types */
import { PDFDownloadLink } from "@react-pdf/renderer";
import SlipTemplate from "./SlipTemplate";

const SuccessPage = ({ data }) => {
  const inputStyle = "p-2 ";
  return (
    <div className="items-center">
      <h1 className="text-center text-6xl font-bold mt-8">Success!</h1>
      <p className="mt-6 text-center text-2xl">
        Your Application has been processed successfully.
      </p>
      <div className="text-center ml-[15%]">
        <p className="mt-6 text-left text-xl text-blue-600">
          Application Summary:
        </p>
        <div className="items-center text-center mt-4">
          <div className="flex gap-1 items-center text-center">
            <label className="text-xl max-md:text-sm font-medium">
              Exam ID:
            </label>
            <h2 className={inputStyle}>{data.examId}</h2>
          </div>
          <div className="flex gap-1 items-center">
            <label className="text-xl max-md:text-sm font-medium">Name:</label>
            <h2 className={inputStyle}>{data.name}</h2>
          </div>
          <div className="flex gap-1 items-center">
            <label className="text-xl max-md:text-sm font-medium">
              Department:
            </label>
            <h2 className={inputStyle}>{data.department}</h2>
          </div>
          <div className="flex gap-1 items-center">
            <label className="text-xl max-md:text-sm font-medium">
              Exam Center:
            </label>
            <h2 className={inputStyle}>{data.center}</h2>
          </div>
          <div className="flex gap-1 items-center">
            <label className="text-xl max-md:text-sm font-medium">
              Exam Date:
            </label>
            <h2 className={inputStyle}>26 / 03 / 2024</h2>
          </div>
        </div>
        <div className="rounded-lg text-center bg-green-600 text-white w-[45%] mt-8 p-2 shadow-md shadow-black">
          <PDFDownloadLink
            document={<SlipTemplate data={{ ...data }} />}
            fileName="mock_slip.pdf"
          >
            {({ loading }) => {
              return loading ? "Loading slip..." : "Download Exam Slip";
            }}
          </PDFDownloadLink>
        </div>
      </div>
    </div>
  );
};
export default SuccessPage;
