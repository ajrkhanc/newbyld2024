import { Modal, ModalHeader, ModalBody, Table } from "reactstrap";
import { MdEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";

function SpeakersCalenderList({ isOpen, OpenViewCalender }) {
  return (
    <Modal isOpen={isOpen} OpenViewCalender={OpenViewCalender}>
      <ModalHeader toggle={OpenViewCalender}>
        <div className="canvas-logo  text-center workshopPdfLogo">
          <a href="/">
            <img src="/assets/img/byld-logo.svg" alt="logo" />
          </a>
        </div>
      </ModalHeader>
      <ModalBody className="p-0 pb-5">
        <div className=" p-3  modalHeadingPdf">
          <h3 className="text-white  mb-0">
            BYLD Group Speakers Series Programs 2025
          </h3>
        </div>
        <div className=" p-4 table-responsive">
          <Table bordered className="event-table">
            <thead>
              <tr className="bg-primary">
                <th colSpan="4" className="text-center  text-white">
                  Aug-25
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Giving & receiving feedback </td>
                <td>21-08-2025</td>
                <td>virtual</td>
              </tr>
            </tbody>
            <thead>
              <tr className="bg-primary">
                <th colSpan="4" className="text-center  text-white">
                  Sep-25
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Goal Setting </td>
                <td> 05-10-2025</td>
                <td>virtual</td>
              </tr>
              <tr>
                <td>Accountability & Ownership </td>
                <td> 19-10-2025</td>
                <td>virtual</td>
              </tr>
            </tbody>
          </Table>
          <div className="pdfAddress">
            <ul>
              <li>
                BYLD Group Private Limited, 2nd and 3rd Floor, Plot No. 48,
                Sector - 44,
              </li>
              <li>Opp. EPF Regional Office Gurugram, Haryana - 122003</li>
              <li className=" d-flex justify-content-center align-items-center gap-1">
                <MdEmail /> corporate.aae@byldgroup.com
              </li>
              <li className="d-flex justify-content-center align-items-center gap-1">
                <FaPhoneVolume /> 7042644889
              </li>
            </ul>
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
}

export default SpeakersCalenderList;
