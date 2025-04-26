import { Card } from "react-bootstrap";
import useGetBook from "../features/useGetBook";

function DisplayBook() {
  const { data, isLoading, isError } = useGetBook();
  console.log(data);

  return (
    <div>
      <div className="container">
        <h2>Antrian anda</h2>
        <p>Details about the book will be displayed here.</p>
        <div>
          {data.map((data) => (
            <Card key={data.uuid} className="mb-3 p-4">
              <div key={data.uuid}>
                <h3>{data.user_name}</h3>
                <p>{data.kategori_poli}</p>
                <p>Nomer Antrian : {data.nomer_antrian}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DisplayBook;
