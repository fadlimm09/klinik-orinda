import { useEffect } from "react";
import Swal from "sweetalert2";

function ChatDokter() {
  const getStorageUser = localStorage.getItem("idUser");
  const userId = JSON.parse(getStorageUser);
  console.log(userId.id);

  useEffect(() => {
    if (!userId) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Silahkan login terlebih dahulu!",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "/login";
        }
      });
    }
  }, []);
  return (
    <div className="container mt-5">
      <h4>Chat dengan Dokter</h4>
      <div className="card">
        <div className="card-body">
          <div className="login-form">
            <input type="text" className="form-control" placeholder="Tulis pesan..." />
            <button className="btn btn-primary">Kirim</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatDokter;
