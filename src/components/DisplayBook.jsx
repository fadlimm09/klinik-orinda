import { Card } from "react-bootstrap";
import useGetBook from "../features/useGetBook";

function DisplayBook() {
  const { data, isLoading, isError } = useGetBook();
  console.log(data);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong!</p>;
  if (!data) return <p>No data available</p>;

  return (
    <div>
      <div className="container">
        <h2>Antrian anda</h2>
        <p>Details about the book will be displayed here.</p>
        <div>
          {data.map((item) => (
            <Card key={item.uuid} className="mb-3 p-4">
              <div>
                <h3>{item.user_name}</h3>
                <p>{item.kategori_poli}</p>
                <p>Nomer Antrian : {item.nomer_antrian}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DisplayBook;
