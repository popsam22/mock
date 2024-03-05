/* eslint-disable react/prop-types */
import { Document, Page, View, Image, Text } from "@react-pdf/renderer";
import { skoolbod } from "../assets";
import { slanted } from "../assets";
import QRCode from "qrcode";
import { useState } from "react";

const Slip = ({ qr, data }) => {
  return (
    <Document title="Mock CVT slip" author="Zenkleus Limited">
      <Page
        style={{
          paddingHorizontal: "5%",
          paddingTop: "5%",
          position: "relative",
        }}
        size="A4"
      >
        <View style={{ zIndex: "300" }}>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              textAlign: "center",
              gap: "5px",
              zIndex: "50",
            }}
          >
            <Image
              style={{ width: "250px", marginLeft: "25%" }}
              src={skoolbod}
            />
            <Text
              style={{ color: "#0070ec", fontSize: "30px", zIndex: "1000" }}
            >
              Skoolbod CBT Mock Exam
            </Text>
            <Text>Student Examination Slip</Text>
          </View>
          <View
            style={{
              width: "100%",
              height: "2px",
              backgroundColor: "lightblue",
              marginTop: "10px",
            }}
          ></View>
          <View
            style={{
              marginTop: "13px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <View>
              <Text
                style={{ fontSize: "25px", color: "gray", marginBottom: "5px" }}
              >
                Candidates Details
              </Text>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "3px",
                  textAlign: "center",
                  marginBottom: "5px",
                }}
              >
                <Text style={{ fontWeigh: "extrabold", fontSize: "16px" }}>
                  Name:
                </Text>
                <Text style={{ fontWeight: "light", fontSize: "13px" }}>
                  {data.name}
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "3px",
                  textAlign: "center",
                  marginBottom: "5px",
                }}
              >
                <Text style={{ fontWeigh: "extrabold", fontSize: "16px" }}>
                  Gender:
                </Text>
                <Text style={{ fontWeight: "light", fontSize: "13px" }}>
                  {data.gender}
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "3px",
                  textAlign: "center",
                  alignItems: "center",
                  marginBottom: "5px",
                }}
              >
                <Text style={{ fontWeigh: "extrabold", fontSize: "16px" }}>
                  DOB:
                </Text>
                <Text style={{ fontWeight: "light", fontSize: "13px" }}>
                  {data.dob}
                </Text>
              </View>
            </View>
            <View style={{ marginTop: "20px" }}>
              <Text
                style={{ fontSize: "25px", color: "gray", marginBottom: "5px" }}
              >
                Payment Details
              </Text>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "3px",
                  textAlign: "center",
                  alignContent: "center",
                  alignItems: "center",
                  marginBottom: "5px",
                }}
              >
                <Text style={{ fontWeigh: "extrabold", fontSize: "16px" }}>
                  Amount Payed:
                </Text>
                <Text style={{ fontWeight: "light", fontSize: "13px" }}>
                  &#8358;1500
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "3px",
                  textAlign: "center",
                  alignContent: "center",
                  alignItems: "center",
                  marginBottom: "5px",
                }}
              >
                <Text style={{ fontWeigh: "extrabold", fontSize: "16px" }}>
                  Date of Payment:
                </Text>
                <Text
                  style={{
                    fontWeight: "light",
                    fontSize: "13px",
                    marginLeft: "2px",
                  }}
                >
                  22 / 03 / 2024
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "3px",
                  textAlign: "center",
                  alignContent: "center",
                  alignItems: "center",
                  marginBottom: "5px",
                }}
              >
                <Text style={{ fontWeigh: "extrabold", fontSize: "16px" }}>
                  Payment Status:
                </Text>
                <Text
                  style={{
                    fontWeight: "light",
                    fontSize: "13px",
                    color: "green",
                  }}
                >
                  Success
                </Text>
              </View>
            </View>
          </View>
          <View style={{ marginTop: "7%" }}>
            <Text style={{ fontSize: "25px", color: "gray" }}>
              Exam Details
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "3px",
                textAlign: "center",
                alignContent: "center",
                alignItems: "center",
                marginTop: "2.5%",
                marginBottom: "5px",
              }}
            >
              <Text style={{ fontWeigh: "extrabold", fontSize: "16px" }}>
                Exam ID:
              </Text>
              <Text style={{ fontWeight: "light", fontSize: "13px" }}>
                {data.examId}
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "3px",
                textAlign: "center",
                alignContent: "center",
                alignItems: "center",
                marginTop: "2.5%",
                marginBottom: "5px",
              }}
            >
              <Text style={{ fontWeigh: "extrabold", fontSize: "16px" }}>
                Exam Center:
              </Text>
              <Text style={{ fontWeight: "light", fontSize: "13px" }}>
                {data.cbt_center}
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "3px",
                textAlign: "center",
                alignContent: "center",
                alignItems: "center",
                marginTop: "2.5%",
                marginBottom: "5px",
              }}
            >
              <Text style={{ fontWeigh: "extrabold", fontSize: "16px" }}>
                Exam Date:
              </Text>
              <Text style={{ fontWeight: "light", fontSize: "13px" }}>
                29 / 03 / 2024
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "3px",
                textAlign: "center",
                alignContent: "center",
                alignItems: "center",
                marginTop: "2.5%",
                marginBottom: "5px",
              }}
            >
              <Text style={{ fontWeigh: "extrabold", fontSize: "16px" }}>
                Exam Time:
              </Text>
              <Text style={{ fontWeight: "light", fontSize: "13px" }}>
                9am prompt
              </Text>
            </View>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "3px",
              marginTop: "2.5%",
            }}
          >
            <Text style={{ color: "red", fontSize: "28px" }}>Instructions</Text>
            <Text style={{ fontWeight: "light", fontSize: "12px" }}>
              &#x2022; Do not bring mobile phone to the exam venue.
            </Text>
            <Text style={{ fontWeight: "light", fontSize: "12px" }}>
              &#x2022; Arrive atleast 30mins before the exam time.
            </Text>
            <Text style={{ fontWeight: "light", fontSize: "12px" }}>
              &#x2022; Eating and drinking will not be allowed.
            </Text>
            <Text style={{ fontWeight: "light", fontSize: "12px" }}>
              &#x2022; Writing materials will be provided in the exam venue.
            </Text>
          </View>
        </View>
        <View
          style={{
            position: "absolute",
            zIndex: "0",
            top: "25%",
            left: "50%",
          }}
        >
          <Image
            style={{ zIndex: "-10", height: "450px", width: "90px" }}
            src={slanted}
          />
        </View>
        <View style={{ position: "absolute", bottom: "5%", left: "70%" }}>
          <Image style={{ width: "200px" }} src={qr} />
        </View>
      </Page>
    </Document>
  );
};

const SlipTemplate = ({ data }) => {
  // console.log(data)
  const [qr, setQr] = useState("");

  QRCode.toDataURL(`examId: ${data.examId}, name: ${data.name}`, {
    type: "png",
  }).then((img) => {
    // Then you can do whatever you want with this img
    setQr(img);
  });
  return (
    // <PDFViewer
    //   style={{ width: "100%", marginVertical: "10%", height: "1000px" }}
    //   showToolbar={true}
    // >
    //   <Slip qr={qr} />
    // </PDFViewer>
    <Slip qr={qr} data={{ ...data }} />
  );
};
export default SlipTemplate;
