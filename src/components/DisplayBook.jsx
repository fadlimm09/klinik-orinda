import { useGetBook } from "../features/useGetBook";

export default async function DisplayBook() {
  // const useGetBook = await useGetBook();
  // console.log(useGetBook);

  return (
    <div className="container">
      <h1 className="text-center">Antrian</h1>
      <div className="row">
        <div className="col-md-12">
          {/* {useGetBook.map((item) => (
            <div className="card mb-3" key={item.id}>
              <div className="card-body">
                <h5 className="card-title">Nama Pasien: {item.name}</h5>
                <p className="card-text">E-Mail: {item.email}</p>
                <p className="card-text">Password Pasien: {item.password}</p>
                <p className="card-text">
                  Tanggal Daftar:{" "}
                  {new Date(item.createdAt).toLocaleDateString("id-ID", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
}
