import { Col, Container, Row, Dropdown } from "react-bootstrap";
import Calendar from "react-calendar";
// import 'react-calendar/dist/Calendar.css'
import "./../styles/Calendar.css";

import { useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router";
import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";
import useCreateBook from "../features/usePostBook";

const PaymentPage = () => {
  const [valueCalender, onChangeCalender] = useState("");

  //=================================================
  const navigate = useNavigate();
  const param = useParams();
  const [uuid, setUuid] = useState("");
  const [selectedTime, setSelectedTime] = useState("Waktu");

  const handleDropdownSelect = (eventKey, event) => {
    setSelectedTime(eventKey);
  };

  const createBooking = useCreateBook();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const userDataString = localStorage.getItem("idUser");
      const userData = JSON.parse(userDataString);

      const userName = userData.name;
      const userId = userData.id;
      const Category = localStorage.getItem("selectedCategory");
      const selectedCategory = JSON.parse(Category).name;

      const myuuid = uuidv4();
      setUuid(myuuid);

      const jsonData = {
        uuid: myuuid,
        selectedTime,
        valueCalender,
        user_name: userName,
        kategori_poli: selectedCategory,
        user_id: userId,
      };

      // Gunakan react-query mutation
      createBooking.mutate(jsonData, {
        onSuccess: () => {
          Swal.fire("Berhasil Buat Antrean", "", "success");
          navigate("/paymentdoctor/bookingstatus");
        },
        onError: () => {
          Swal.fire({
            title: "Gagal",
            text: "Gagal membuat antrean",
            icon: "error",
          });
        },
      });
    } catch (error) {
      console.error("Error saat handle submit:", error);
      Swal.fire({
        title: "Anda Belum Login",
        text: "Silahkan Log In terlebih dahulu 👏",
        icon: "info",
        footer: '<a href="/login">Login disini</a>',
      });
    }
  };

  return (
    <>
      <Container className="mt-5">
        <Row className="gap-5">
          <Col>
            <Calendar onChange={onChangeCalender} />
          </Col>

          <Col className="">
            <Row>
              <h4 className="text-carevul fw-bold mt-5 ml-5">Waktu Datang Konsultasi</h4>
              <Dropdown onSelect={handleDropdownSelect}>
                <Dropdown.Toggle id="dropdown-basic"> {selectedTime}</Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item eventKey="Pagi (07.00 - 05.00 AM)">Pagi (07.00 - 05.00 AM)</Dropdown.Item>
                  <Dropdown.Item eventKey="Malam (05.00 - 11.00 PM)">Malam (05.00 - 11.00 PM)</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Col className="mt-2">
                <form onSubmit={handleSubmit}>
                  <div className="col-md-12 d-flex">
                    <button type="submit" className="btn color-carevul-gradient text-white mt-1 px-5 py-2 flex-fill" id="book-btn">
                      Daftar Antrean
                    </button>
                  </div>
                </form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Outlet />
    </>
  );
};

export default PaymentPage;
