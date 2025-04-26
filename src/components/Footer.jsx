import carevulLogo from "../assets/orinda-logo.png";
import "../styles/footer.css";
import { Link } from "react-router-dom";
import fb from "../assets/icon/Facebook.svg";
import ins from "../assets/icon/Instagram.svg";
import lin from "../assets/icon/LinkedIn.svg";
import twi from "../assets/icon/Twitter.svg";
import yt from "../assets/icon/YouTube.svg";

const footer = () => {
  return (
    <>
      <div className="bg-color-footer mt-5 stroke-card-border shadow-sm">
        <div className="container ">
          <div className="row d-flex justify-content-between pt-4 pb-3">
            <div className="col-mb-5 col-md-4 mt">
              <img width={70} src={carevulLogo} alt="" />
              <div className="text-gray  mb-4">
                <p>
                  Kamu lagi sakit?
                  <span className="text-carevul fw-bolder"> Klinik Orinda</span> {/* <span className="text-carevul fw-bolder"> Carevul </span> */}
                  solusinya, tanpa antri, tanpa ribet, konsulin aja!
                </p>
              </div>

              <div className=" social-media d-flex justify-content-between mb-5">
                <img src={fb} alt="" />
                <div>
                  {" "}
                  <a href="https://www.instagram.com/klinik_orinda?igsh=b3ptejl5OHV6Ym83" target="_blank" rel="noopener noreferrer">
                    <img src={ins} alt="" />
                  </a>
                </div>

                <img src={twi} alt="" />
                <img src={lin} alt="" />
                <img src={yt} alt="" />
              </div>
            </div>

            <div className="col-lg-2 my-3 mb-md-2 ">
              <div className="list-footer ">
                <div className="d-flex flex-column  gap-2 ">
                  <h5 className="text-carevul">Lainnya</h5>
                  <Link to="" className="fw-normal  text-gray">
                    Syarat & Ketentuan
                  </Link>
                  <Link to="" className="fw-normal  text-gray">
                    Kebijakan Privasi
                  </Link>
                  <Link to="https://api.whatsapp.com/send?phone=6282130862183&text=Halo%2C%20Apakah%20klinik%20buka%20%3F" className="fw-normal  text-gray">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-2 my-3  mb-md-2">
              <div className="list-footer">
                <div className="fw-2 d-flex flex-column gap-2">
                  <h5 className="text-carevul ">Kontak Kami</h5>

                  <span className="fw-normal">pratamadsf@gmail.com</span>

                  <span>Klinik Pratama Orinda Alamat klinik: Jl. Raya Kuningan - Ciamis Dusun Kliwon RT. 006/ RW. 004 Desa Kadugede Kec. Kadugede Kab. Kuningan Jawa Barat Kode Pos 45561</span>
                  <span>0821-3086-2183</span>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="d-flex justify-content-center align-items-center ">
            <div className="d-flex justify-content-center align-items-center ">Copyright © 2023 Klinik Orinda</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default footer;
