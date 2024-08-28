import blog from "../Styles/BlogSection.module.scss";
import Image from "next/image";
import img1 from "../../public/blog-1.jpg";

import {
  FaUser,
  FaCalendarAlt,
  FaHeart,
  FaComment,
  FaShare,
  FaArrowRight,
} from "react-icons/fa";

const BlogCompo = () => {
  return (
    <div>
      <div className={blog.blogdiv}>
        <div className={blog.verticalline}>
          <div className={blog.title}>
            <hr className={blog.verticalline} />
            <h5>Our blog</h5>
          </div>
          <h1 className={blog.toptext}>Latest Post & Articles</h1>
        </div>
        <div className={blog.cardcontainer}>
          <div className={blog.card}>
            <div className={blog.imagestyle}>
              <Image src={img1} width={300} height={300} alt="img one"></Image>
            </div>
            <div className={blog.cardbody}>
              <div className={blog.icondiv}>
                <div>
                  <FaUser className={blog.singleicon}></FaUser>
                  <p>Admin</p>
                </div>
                <div>
                  <FaCalendarAlt className={blog.singleicon}></FaCalendarAlt>
                  <p>22 june 2023</p>
                </div>
              </div>
              <h1>Telehealth Service Are Ready To Help You...</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing. Veritatis...
              </p>
              <div className={blog.bottomdiv}>
                <div className={blog.buttom}>
                  <p>Read More</p>
                  <p>
                    <FaArrowRight></FaArrowRight>
                  </p>
                </div>
                <div className={blog.buttomicons}>
                  <div className={blog.iconstyle}>
                    <p>
                      <FaComment></FaComment>
                    </p>
                    <p>5</p>
                  </div>
                  <div className={blog.iconstyle}>
                    <p>
                      {" "}
                      <FaHeart></FaHeart>
                    </p>
                    <p>20</p>
                  </div>
                  <div className={blog.iconstyle}>
                    <p>
                      <FaShare></FaShare>
                    </p>
                    <p>24</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={blog.card}>
            <div className={blog.imagestyle}>
              <Image src={img1} width={300} height={300} alt="img one"></Image>
            </div>
            <div className={blog.cardbody}>
              <div className={blog.icondiv}>
                <div>
                  <FaUser className={blog.singleicon}></FaUser>
                  <p>Admin</p>
                </div>
                <div>
                  <FaCalendarAlt className={blog.singleicon}></FaCalendarAlt>
                  <p>22 june 2023</p>
                </div>
              </div>
              <h1>Telehealth Service Are Ready To Help You...</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing. Veritatis...
              </p>
              <div className={blog.bottomdiv}>
                <div className={blog.buttom}>
                  <p>Read More</p>
                  <p>
                    <FaArrowRight></FaArrowRight>
                  </p>
                </div>
                <div className={blog.buttomicons}>
                  <div className={blog.iconstyle}>
                    <p>
                      <FaComment></FaComment>
                    </p>
                    <p>5</p>
                  </div>
                  <div className={blog.iconstyle}>
                    <p>
                      {" "}
                      <FaHeart></FaHeart>
                    </p>
                    <p>20</p>
                  </div>
                  <div className={blog.iconstyle}>
                    <p>
                      <FaShare></FaShare>
                    </p>
                    <p>24</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={blog.card}>
            <div className={blog.imagestyle}>
              <Image src={img1} width={300} height={300} alt="img one"></Image>
            </div>
            <div className={blog.cardbody}>
              <div className={blog.icondiv}>
                <div>
                  <FaUser className={blog.singleicon}></FaUser>
                  <p>Admin</p>
                </div>
                <div>
                  <FaCalendarAlt className={blog.singleicon}></FaCalendarAlt>
                  <p>22 june 2023</p>
                </div>
              </div>
              <h1>Telehealth Service Are Ready To Help You...</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing. Veritatis...
              </p>
              <div className={blog.bottomdiv}>
                <div className={blog.buttom}>
                  <p>Read More</p>
                  <p>
                    <FaArrowRight></FaArrowRight>
                  </p>
                </div>
                <div className={blog.buttomicons}>
                  <div className={blog.iconstyle}>
                    <p>
                      <FaComment></FaComment>
                    </p>
                    <p>5</p>
                  </div>
                  <div className={blog.iconstyle}>
                    <p>
                      {" "}
                      <FaHeart></FaHeart>
                    </p>
                    <p>20</p>
                  </div>
                  <div className={blog.iconstyle}>
                    <p>
                      <FaShare></FaShare>
                    </p>
                    <p>24</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={blog.card}>
            <div className={blog.imagestyle}>
              <Image src={img1} width={300} height={300} alt="img one"></Image>
            </div>
            <div className={blog.cardbody}>
              <div className={blog.icondiv}>
                <div>
                  <FaUser className={blog.singleicon}></FaUser>
                  <p>Admin</p>
                </div>
                <div>
                  <FaCalendarAlt className={blog.singleicon}></FaCalendarAlt>
                  <p>22 june 2023</p>
                </div>
              </div>
              <h1>Telehealth Service Are Ready To Help You...</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing. Veritatis...
              </p>
              <div className={blog.bottomdiv}>
                <div className={blog.buttom}>
                  <p>Read More</p>
                  <p>
                    <FaArrowRight></FaArrowRight>
                  </p>
                </div>
                <div className={blog.buttomicons}>
                  <div className={blog.iconstyle}>
                    <p>
                      <FaComment></FaComment>
                    </p>
                    <p>5</p>
                  </div>
                  <div className={blog.iconstyle}>
                    <p>
                      {" "}
                      <FaHeart></FaHeart>
                    </p>
                    <p>20</p>
                  </div>
                  <div className={blog.iconstyle}>
                    <p>
                      <FaShare></FaShare>
                    </p>
                    <p>24</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={blog.card}>
            <div className={blog.imagestyle}>
              <Image src={img1} width={300} height={300} alt="img one"></Image>
            </div>
            <div className={blog.cardbody}>
              <div className={blog.icondiv}>
                <div>
                  <FaUser className={blog.singleicon}></FaUser>
                  <p>Admin</p>
                </div>
                <div>
                  <FaCalendarAlt className={blog.singleicon}></FaCalendarAlt>
                  <p>22 june 2023</p>
                </div>
              </div>
              <h1>Telehealth Service Are Ready To Help You...</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing. Veritatis...
              </p>
              <div className={blog.bottomdiv}>
                <div className={blog.buttom}>
                  <p>Read More</p>
                  <p>
                    <FaArrowRight></FaArrowRight>
                  </p>
                </div>
                <div className={blog.buttomicons}>
                  <div className={blog.iconstyle}>
                    <p>
                      <FaComment></FaComment>
                    </p>
                    <p>5</p>
                  </div>
                  <div className={blog.iconstyle}>
                    <p>
                      {" "}
                      <FaHeart></FaHeart>
                    </p>
                    <p>20</p>
                  </div>
                  <div className={blog.iconstyle}>
                    <p>
                      <FaShare></FaShare>
                    </p>
                    <p>24</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={blog.card}>
            <div className={blog.imagestyle}>
              <Image src={img1} width={300} height={300} alt="img one"></Image>
            </div>
            <div className={blog.cardbody}>
              <div className={blog.icondiv}>
                <div>
                  <FaUser className={blog.singleicon}></FaUser>
                  <p>Admin</p>
                </div>
                <div>
                  <FaCalendarAlt className={blog.singleicon}></FaCalendarAlt>
                  <p>22 june 2023</p>
                </div>
              </div>
              <h1>Telehealth Service Are Ready To Help You...</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing. Veritatis...
              </p>
              <div className={blog.bottomdiv}>
                <div className={blog.buttom}>
                  <p>Read More</p>
                  <p>
                    <FaArrowRight></FaArrowRight>
                  </p>
                </div>
                <div className={blog.buttomicons}>
                  <div className={blog.iconstyle}>
                    <p>
                      <FaComment></FaComment>
                    </p>
                    <p>5</p>
                  </div>
                  <div className={blog.iconstyle}>
                    <p>
                      {" "}
                      <FaHeart></FaHeart>
                    </p>
                    <p>20</p>
                  </div>
                  <div className={blog.iconstyle}>
                    <p>
                      <FaShare></FaShare>
                    </p>
                    <p>24</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={blog.card}>
            <div className={blog.imagestyle}>
              <Image src={img1} width={290} height={300} alt="img one"></Image>
            </div>
            <div className={blog.cardbody}>
              <div className={blog.icondiv}>
                <div>
                  <FaUser className={blog.singleicon}></FaUser>
                  <p>Admin</p>
                </div>
                <div>
                  <FaCalendarAlt className={blog.singleicon}></FaCalendarAlt>
                  <p>22 june 2023</p>
                </div>
              </div>
              <h1>Telehealth Service Are Ready To Help You...</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing. Veritatis...
              </p>
              <div className={blog.bottomdiv}>
                <div className={blog.buttom}>
                  <p>Read More</p>
                  <p>
                    <FaArrowRight></FaArrowRight>
                  </p>
                </div>
                <div className={blog.buttomicons}>
                  <div className={blog.iconstyle}>
                    <p>
                      <FaComment></FaComment>
                    </p>
                    <p>5</p>
                  </div>
                  <div className={blog.iconstyle}>
                    <p>
                      {" "}
                      <FaHeart></FaHeart>
                    </p>
                    <p>20</p>
                  </div>
                  <div className={blog.iconstyle}>
                    <p>
                      <FaShare></FaShare>
                    </p>
                    <p>24</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={blog.card}>
            <div className={blog.imagestyle}>
              <Image src={img1} width={300} height={300} alt="img one"></Image>
            </div>
            <div className={blog.cardbody}>
              <div className={blog.icondiv}>
                <div>
                  <FaUser className={blog.singleicon}></FaUser>
                  <p>Admin</p>
                </div>
                <div>
                  <FaCalendarAlt className={blog.singleicon}></FaCalendarAlt>
                  <p>22 june 2023</p>
                </div>
              </div>
              <h1>Telehealth Service Are Ready To Help You...</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing. Veritatis...
              </p>
              <div className={blog.bottomdiv}>
                <div className={blog.buttom}>
                  <p>Read More</p>
                  <p>
                    <FaArrowRight></FaArrowRight>
                  </p>
                </div>
                <div className={blog.buttomicons}>
                  <div className={blog.iconstyle}>
                    <p>
                      <FaComment></FaComment>
                    </p>
                    <p>5</p>
                  </div>
                  <div className={blog.iconstyle}>
                    <p>
                      {" "}
                      <FaHeart></FaHeart>
                    </p>
                    <p>20</p>
                  </div>
                  <div className={blog.iconstyle}>
                    <p>
                      <FaShare></FaShare>
                    </p>
                    <p>24</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCompo;
