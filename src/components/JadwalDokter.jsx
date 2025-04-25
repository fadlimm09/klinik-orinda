import { Accordion } from "react-bootstrap";

export default function JadwalDokter() {
  return (
    <>
      {" "}
      <div className="container mt-5 mb-5">
        <h4>Jadwal Dokter</h4>
        <p>Jadwal yang tersedia untuk hari ini, {new Date().toDateString()}</p>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Poli Umum</Accordion.Header>
            <Accordion.Header> Dr. H. Agah Nugraha, M.k.M</Accordion.Header>
            <Accordion.Header> Dr. Hj. Dessy Susanti, M.K.M</Accordion.Header>
            <Accordion.Body>
              <p>
                <strong>Senin s/d Jumat</strong>
              </p>
              <p>Pagi: 06.00 - 09.00 WIB</p>
              <p>Sore: 15.00 - 19.30 WIB</p>
              <hr />
              <p>
                <strong>Sabtu</strong>
              </p>
              <p>Pagi: 06.00 - 09.00 WIB</p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>Poli Gigi</Accordion.Header>
            <Accordion.Header>Drg. Ono Sumarno</Accordion.Header>
            <Accordion.Body>
              <p>
                <strong>Senin s/d Jumat</strong>
              </p>
              <p>Sore: 15.00 - 19.30 WIB</p>
              <hr />
              <p>
                <strong>Sabtu</strong>
              </p>
              <p>Pagi: 06.00 - 07.00 WIB</p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}
