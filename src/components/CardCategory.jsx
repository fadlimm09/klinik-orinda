import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Col } from "react-bootstrap";
import "./../styles/category-doctor.css";
import { Link } from "react-router-dom";
import dokterUmum from "../../public/dokterumum.png";
import dokterGigi from "../../public/doktergigi.png";

import AOS from "aos";
import "aos/dist/aos.css";

function CardCategory() {
  const [cards, setCard] = useState([]);

  const DataCategory = [
    {
      category: "Poli Umum",
      image: dokterUmum, // ❌ Salah: jangan pakai ${...} di sini
      name: "Poli Umum",
      id: "1",
    },
    {
      category: "Poli Gigi",
      image: dokterGigi,
      name: "Poli Gigi",
      id: "3",
    },
  ];

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  useEffect(() => {
    axios("https://64de412c825d19d9bfb25d14.mockapi.io/category_doctor").then((result) =>
      setCard(result.data)
    );
  }, []);

  const handleCategoryClick = (categoryId, category) => {
    localStorage.setItem("selectedCategory", JSON.stringify({ id: categoryId, name: category }));
  };

  return (
    <>
      {DataCategory.map((item) => (
        <Col
          md={3}
          key={item.id}
          id="col-card"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <Link
            to="/paymentdoctor" // ❌ Salah: /paymentdoctor harus dalam string
            onClick={() => handleCategoryClick(item.id, item.category)}
          >
            <Card className="card" id="card">
              <div id="gradient-bg"></div>
              <Card.Img src={item.image} id="card-category-image" />
            </Card>
          </Link>
        </Col>
      ))}
    </>
  );
}

export default CardCategory;
