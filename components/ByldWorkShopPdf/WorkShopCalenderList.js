import { Modal, ModalHeader, ModalBody, Table } from "reactstrap";
import { MdEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";

function WorkShopCalenderList({ isOpen, OpenViewCalender }) {

  return (
    <Modal isOpen={isOpen} OpenViewCalender={OpenViewCalender} >
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
            BYLD Group Open Programs 2024-2025
          </h3>
        </div>
        <div className=" p-4 table-responsive">
          <Table  bordered className="event-table">
            <thead>
              <tr className="bg-primary">
                <th colspan="4" className="text-center  text-white">
                  September / 2024
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Crucial Conversations® For Mastering Dialogue</td>
                <td> 19th & 20th </td>
                <td>Gurugram</td>
              </tr>
              <tr>
                <td>The SLII Experience™ T4T F2F </td>
                <td> 24th, 25th, 26th, 27th </td>
                <td>Gurugram</td>
              </tr>
              <tr>
                <td>Disc Certification® </td>
                <td> 24th, 25th, 26th, 27th </td>
                <td>Virtual</td>
              </tr>
            </tbody>
            <thead>
              <tr className="bg-primary">
                <th colspan="4" className="text-center  text-white">
                  October / 2024
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Crucial Conversations® For Mastering Dialogue</td>
                <td> 21th & 22th </td>
                <td> Bangalore</td>
              </tr>
              <tr>
                <td>The Power of Habit™ </td>
                <td> 17th </td>
                <td>Gurugram</td>
              </tr>
              <tr>
                <td>BME</td>
                <td> 18th</td>
                <td>Virtual</td>
              </tr>
              <tr>
                <td>Getting Things Done® </td>
                <td> 24th </td>
                <td>Virtual</td>
              </tr>
            </tbody>
            <thead>
              <tr className="bg-primary">
                <th colspan="4" className="text-center  text-white">
                  November / 2024
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Crucial Influence </td>
                <td> 12th Nov </td>
                <td>Virtual</td>
              </tr>
            </tbody>
            <thead>
              <tr className="bg-primary">
                <th colspan="4" className="text-center  text-white">
                  December / 2024
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Getting Things Done® </td>
                <td> 20th </td>
                <td>Bangalore</td>
              </tr>
              <tr>
                <td>Trapologist At Work™ </td>
                <td> 11th </td>
                <td>Virtual</td>
              </tr>
              <tr>
                <td>Disc Certification® </td>
                <td> 10th, 11th, 12th, 13th </td>
                <td>Virtual</td>
              </tr>
              <tr>
                <td>Self Leadership</td>
                <td>10th </td>
                <td>Gurugram</td>
              </tr>
            </tbody>
            <thead>
              <tr className="bg-primary">
                <th colspan="4" className="text-center  text-white">
                  January / 2025
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Getting Things Done® </td>
                <td> 24th </td>
                <td>Virtual</td>
              </tr>
              <tr>
                <td>The SLII Experience™</td>
                <td> 20th - 21st</td>
                <td>Gurugram</td>
              </tr>
              <tr>
                <td>The SLII Experience™ T4T F2F </td>
                <td> 22nd - 23rd </td>
                <td>Gurugram</td>
              </tr>
            </tbody>
            <thead>
              <tr className="bg-primary">
                <th colspan="4" className="text-center  text-white">
                  February / 2025
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Getting Things Done® </td>
                <td> 7th </td>
                <td>Gurugram</td>
              </tr>
              <tr>
                <td>Disc Certification® </td>
                <td> 24th & 25th </td>
                <td>Gurugram</td>
              </tr>
              <tr>
                <td>Crucial Influence </td>
                <td> 20th - 21st </td>
                <td>Virtual</td>
              </tr>
            </tbody>
            <thead>
              <tr className="bg-primary">
                <th colspan="4" className="text-center  text-white">
                  March / 2025
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Crucial Conversations® For Mastering Dialogue </td>
                <td> 6th - 7th </td>
                <td>Virtual</td>
              </tr>
              <tr>
                <td>The SLII Experience™ </td>
                <td> 18th - 19th </td>
                <td>Virtual</td>
              </tr>
              <tr>
                <td>The SLII Experience™ T4T F2F </td>
                <td> 20th - 21st </td>
                <td>Chennai / Hyderabad</td>
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

export default WorkShopCalenderList;
