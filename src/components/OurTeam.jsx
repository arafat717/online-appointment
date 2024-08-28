import React from "react";
import team from "../Styles/OurTeam.module.scss";
import Image from "next/image";
import img1 from "../../public/team-1.jpg";
import img2 from "../../public/team-2.jpg";
import img3 from "../../public/team-3.jpg";
import img4 from "../../public/team-4.jpg";
import { FaGraduationCap } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const OurTeam = () => {
  return (
    <div className={team.maindiv}>
      <div className={team.verticalline}>
        <div className={team.title}>
          <hr className={team.verticalline} />
          <h5>Our team</h5>
        </div>
        <h1 className={team.toptext}>Meet Our expert doctor</h1>
      </div>
      <div className={team.cardcontainer}>
        <div className={team.card}>
          <div>
            <div className={team.imgaeOpacity}>
              <Image
                className={team.image}
                src={img1}
                width={290}
                height={250}
                alt="imge one"
              ></Image>
              <div className={team.overlay}></div>
            </div>
            <div className={team.socialicons}>
              <p>
                <FaFacebookF className={team.singleicon}></FaFacebookF>
              </p>
              <p>
                <FaInstagram className={team.singleicon}></FaInstagram>
              </p>
              <p>
                <FaLinkedinIn className={team.singleicon}></FaLinkedinIn>
              </p>
              <p>
                <FaTwitter className={team.singleicon}></FaTwitter>
              </p>
            </div>
            <div className={team.cardbody}>
              <div>
                <h1>Dr. Jon Miller</h1>
                <p>Neurology</p>
                <div>
                  <p>
                    <FaGraduationCap
                      className={team.plusicon}
                    ></FaGraduationCap>
                  </p>
                  <p>MBBS, FCPS, FRCS</p>
                </div>
              </div>
              <div className={team.faicon}>
                <p>
                  <FaPlus className={team.icon}></FaPlus>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={team.card}>
          <div>
            <div className={team.imgaeOpacity}>
              <Image
                className={team.image}
                src={img2}
                width={290}
                height={250}
                alt="imge one"
              ></Image>
              <div className={team.overlay}></div>
            </div>
            <div className={team.socialicons}>
              <p>
                <FaFacebookF className={team.singleicon}></FaFacebookF>
              </p>
              <p>
                <FaInstagram className={team.singleicon}></FaInstagram>
              </p>
              <p>
                <FaLinkedinIn className={team.singleicon}></FaLinkedinIn>
              </p>
              <p>
                <FaTwitter className={team.singleicon}></FaTwitter>
              </p>
            </div>
            <div className={team.cardbody}>
              <div>
                <h1>Dr. Jon Miller</h1>
                <p>Neurology</p>
                <div>
                  <p>
                    <FaGraduationCap
                      className={team.plusicon}
                    ></FaGraduationCap>
                  </p>
                  <p>MBBS, FCPS, FRCS</p>
                </div>
              </div>
              <div className={team.faicon}>
                <p>
                  <FaPlus className={team.icon}></FaPlus>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={team.card}>
          <div>
            <div className={team.imgaeOpacity}>
              <Image
                className={team.image}
                src={img3}
                width={290}
                height={250}
                alt="imge one"
              ></Image>
              <div className={team.overlay}></div>
            </div>
            <div className={team.socialicons}>
              <p>
                <FaFacebookF className={team.singleicon}></FaFacebookF>
              </p>
              <p>
                <FaInstagram className={team.singleicon}></FaInstagram>
              </p>
              <p>
                <FaLinkedinIn className={team.singleicon}></FaLinkedinIn>
              </p>
              <p>
                <FaTwitter className={team.singleicon}></FaTwitter>
              </p>
            </div>
            <div className={team.cardbody}>
              <div>
                <h1>Dr. Jon Miller</h1>
                <p>Neurology</p>
                <div>
                  <p>
                    <FaGraduationCap
                      className={team.plusicon}
                    ></FaGraduationCap>
                  </p>
                  <p>MBBS, FCPS, FRCS</p>
                </div>
              </div>
              <div className={team.faicon}>
                <p>
                  <FaPlus className={team.icon}></FaPlus>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={team.card}>
          <div>
            <div className={team.imgaeOpacity}>
              <Image
                className={team.image}
                src={img4}
                width={290}
                height={250}
                alt="imge one"
              ></Image>
              <div className={team.overlay}></div>
            </div>
            <div className={team.socialicons}>
              <p>
                <FaFacebookF className={team.singleicon}></FaFacebookF>
              </p>
              <p>
                <FaInstagram className={team.singleicon}></FaInstagram>
              </p>
              <p>
                <FaLinkedinIn className={team.singleicon}></FaLinkedinIn>
              </p>
              <p>
                <FaTwitter className={team.singleicon}></FaTwitter>
              </p>
            </div>
            <div className={team.cardbody}>
              <div>
                <h1>Dr. Jon Miller</h1>
                <p>Neurology</p>
                <div>
                  <p>
                    <FaGraduationCap
                      className={team.plusicon}
                    ></FaGraduationCap>
                  </p>
                  <p>MBBS, FCPS, FRCS</p>
                </div>
              </div>
              <div className={team.faicon}>
                <p>
                  <FaPlus className={team.icon}></FaPlus>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
