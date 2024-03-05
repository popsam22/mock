import { PDFViewer, Document, Page, View, Image, Text } from "@react-pdf/renderer";
import { skoolbod } from "../assets";

const Slip = () => {
  return (
    <Document title="Mock CVT slip" author="Zenkleus Limited">
      <Page
        style={{ paddingVertical: "5%", paddingHorizontal: "5%" }}
        size="A4"
      >
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            textAlign: "center",
            gap: "5px",
            borderBottom: "1px solid lightblue",
          }}
        >
          <Image style={{ width: "250px", marginLeft: "25%" }} src={skoolbod} />
          <Text style={{ color: "#0070ec", fontSize: "30px" }}>
            Skoolbod CBT Mock Exam
          </Text>
          <Text>Student Examination Slip</Text>
        </View>
        <View
          style={{ marginTop: "13px", display: "flex", flexDirection: "row" }}
        >
          <View>
            <Text
              style={{ fontSize: "18px", color: "gray", marginBottom: "5px" }}
            >
              Candidates Details
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "3px",
                textAlign: "center",
              }}
            >
              <Text style={{ fontWeigh: "extrabold", fontSize: "13px" }}>
                Name:
              </Text>
              <Text style={{ fontWeight: "light", fontSize: "10px" }}>
                Musa Umar Muhammad
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "3px",
                textAlign: "center",
              }}
            >
              <Text style={{ fontWeigh: "extrabold", fontSize: "13px" }}>
                Gender:
              </Text>
              <Text style={{ fontWeight: "light", fontSize: "10px" }}>
                Male
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "3px",
                textAlign: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontWeigh: "extrabold", fontSize: "13px" }}>
                DOB:
              </Text>
              <Text style={{ fontWeight: "light", fontSize: "10px" }}>
                22 / 03 / 2005
              </Text>
            </View>
          </View>
          <View style={{ marginLeft: "40%" }}>
            <Text
              style={{ fontSize: "18px", color: "gray", marginBottom: "5px" }}
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
              }}
            >
              <Text style={{ fontWeigh: "extrabold", fontSize: "13px" }}>
                Amount Payed:
              </Text>
              <Text style={{ fontWeight: "light", fontSize: "10px" }}>
                1500
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
              }}
            >
              <Text style={{ fontWeigh: "extrabold", fontSize: "13px" }}>
                Date of Payment:
              </Text>
              <Text
                style={{
                  fontWeight: "light",
                  fontSize: "10px",
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
              }}
            >
              <Text style={{ fontWeigh: "extrabold", fontSize: "13px" }}>
                Payment Status:
              </Text>
              <Text
                style={{
                  fontWeight: "light",
                  fontSize: "10px",
                  color: "green",
                }}
              >
                Success
              </Text>
            </View>
          </View>
        </View>
        <View style={{ marginTop: "10%" }}>
          <Text style={{ fontSize: "19px", color: "#0070ec" }}>
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
            }}
          >
            <Text style={{ fontWeigh: "extrabold", fontSize: "13px" }}>
              Exam ID:
            </Text>
            <Text style={{ fontWeight: "light", fontSize: "10px" }}>
              ABCD34DERVFE
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
            }}
          >
            <Text style={{ fontWeigh: "extrabold", fontSize: "13px" }}>
              Exam Center:
            </Text>
            <Text style={{ fontWeight: "light", fontSize: "10px" }}>
              Cybertron
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
            }}
          >
            <Text style={{ fontWeigh: "extrabold", fontSize: "13px" }}>
              Exam Date:
            </Text>
            <Text style={{ fontWeight: "light", fontSize: "10px" }}>
              ABCD34DERVFE
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
            }}
          >
            <Text style={{ fontWeigh: "extrabold", fontSize: "13px" }}>
              Exam Time:
            </Text>
            <Text style={{ fontWeight: "light", fontSize: "10px" }}>
              ABCD34DERVFE
            </Text>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "3px",
            textAlign: "center",
            alignContent: "center",
            alignItems: "center",
            marginTop: "2.5%",
          }}
        >
          <Text style={{ color: "#0070ec", fontSize:"28px" }}>Instructions</Text>
          <Text style={{ fontWeight: "light", fontSize: "10px" }}>
            Do not bring
          </Text>
        </View>
      </Page>
    </Document>
  );
}

const SlipTemplate = () => {
  return (
    <PDFViewer
      style={{ width: "100%", marginVertical: "10%", height: "1000px" }}
      showToolbar={true}
    >
      <Slip />
    </PDFViewer>
  );};
export default Slip;
