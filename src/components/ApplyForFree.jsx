import React from "react";
import apply from "../Styles/ApplyForFree.module.scss";
import Image from "next/image";
import img from "../../public/appoinment_img.png";

const ApplyForFree = () => {
  return (
    <div className={apply.main}>
      <div className={apply.submain}>
        <div className={apply.applyAppointment}>
          <div className="w-full md:w-full lg:w-7/12 xl:w-7/12">
            <div className={apply.verticalline}>
              <div className={apply.title}>
                <hr className={apply.verticalline} />
                <h5>Appointment</h5>
              </div>
              <h1 className={apply.toptext}>Apply For Free Now</h1>
            </div>
            <div className={apply.formdiv}>
              <input type="text" name="" id="" placeholder="Patient Name*" />
              <input type="email" name="" id="" placeholder="Email*" />
              <input type="email" name="" id="" placeholder="Email Address*" />
              <select
                id="professionalSelect"
                name="professionalSelect"
                class="custom-select"
              >
                <option value="" disabled selected>
                  Select Depertment
                </option>
                <option value="option1">Cardiology</option>
                <option value="option2">Ophthalmology</option>
                <option value="option3">Pediatric</option>
                <option value="option1">Radiology</option>
                <option value="option2">Urology</option>
              </select>
              <select
                id="professionalSelect"
                name="professionalSelect"
                class="custom-select"
              >
                <option value="" disabled selected>
                  Select Doctor
                </option>
                <option value="option1">Arafat Hossen Joni</option>
                <option value="option2">Rezaul Karim Mehedi</option>
                <option value="option3">Ragib Israq</option>
                <option value="option4">Nazmul Huda</option>
                <option value="option5">Ragib Israq</option>
              </select>
              <input type="date" name="" id="" />
              <select
                id="professionalSelect"
                name="professionalSelect"
                class="custom-select"
              >
                <option value="" disabled selected>
                  Select Time
                </option>
                <option value="option1">10.00 am to 11.00am</option>
                <option value="option2">11.00 am to 12.00am</option>
                <option value="option3">02.00 am to 03.00am</option>
                <option value="option4">03.00 am to 04.00am</option>
                <option value="option5">04.00 am to 05.00am</option>
              </select>
              <button>Bood Appointment</button>
            </div>
          </div>
          <div className="hidden lg:block lg:w-5/12 xl:w-5/12 absolute right-0 bottom-0">
            <Image
              src={img}
              width={400}
              height={400}
              alt="appointment img"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyForFree;
