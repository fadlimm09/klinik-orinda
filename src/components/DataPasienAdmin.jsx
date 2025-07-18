import { Card, Container } from "react-bootstrap";
import "./../styles/category-doctor.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

function DataBookingAdmin() {
  const [dataBooking, setDataBooking] = useState([]);

  useEffect(() => {
    axios("https://686fbba191e85fac42a24ef2.mockapi.io/BookingPasien/users").then((result) =>
      setDataBooking(result.data)
    );
  }, []);

  return (
    <>
      <div>
        {dataBooking.map((item) => (
          <Card className="p-5" key={item.id}>
            <h6 className="mb-3">Nama Pasien : </h6>
            <h4>{item.name}</h4>
            <h6 className="mb-3">E-Mail :</h6>
            <h4>{item.email}</h4>
            <h6 className="mb-3">Password Pasien :</h6>
            <h4>{item.password}</h4>
            <h6 className="mb-3">Tanggal Daftar</h6>
            <h4>{`${new Date(item.createdAt).toLocaleDateString("id-ID", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}`}</h4>
          </Card>
        ))}
      </div>
    </>
  );
}
export default DataBookingAdmin;
