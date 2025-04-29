import axios from "axios";
import { useState, useEffect } from "react";

function ChatDokter() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const getStorageUser = localStorage.getItem("idUser");
  const userId = JSON.parse(getStorageUser);
  console.log(userId.id);

  // Fungsi untuk mengambil pesan dari API
  const fetchMessages = async () => {
    try {
      const response = await axios.post("https://klinik-orinda-chat.vercel.app/api/messagesdoctor", {
        senderId: userId.id,
      });
      setMessages(response.data);
    } catch (error) {
      console.error("Gagal mengambil pesan:", error);
    }
  };

  const sendMessage = async () => {
    try {
      const response = await axios.post("https://klinik-orinda-chat.vercel.app/api/messagesdoctor", {
        content: newMessage,
        senderId: userId.id,
        receiverId: "1", // Ganti dengan ID dokter yang sesuai
      });
      setMessages([...messages, response.data]);
      setNewMessage("");
    } catch (error) {
      console.error("Gagal mengirim pesan:", error);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div className="container mt-5">
      <h4>Chat dengan Dokter</h4>
      <div className="card">
        <div className="card-body">
          <div className="chat-box mb-3">
            {messages.map((msg, index) => (
              <div key={index} className="chat-message">
                <strong>{msg.senderId === "user-id" ? "Anda" : "Dokter"}:</strong> {msg.content}
              </div>
            ))}
          </div>
          <div className="login-form">
            <input type="text" className="form-control" placeholder="Tulis pesan..." value={newMessage} onChange={(e) => setNewMessage(e.target.value)} />
            <button className="btn btn-primary" onClick={sendMessage}>
              Kirim
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatDokter;
