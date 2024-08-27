import Link from "next/link";
import React from "react";

const SmallBanner = ({ page }) => {
  return (
    <div
      className="hero h-[140px] md:h-[250px]"
      style={{
        backgroundImage:
          "url(https://img.freepik.com/free-photo/doctor-nurses-special-equipment_23-2148980721.jpg?t=st=1724762806~exp=1724766406~hmac=7bafdb4ebcf28574a9e2db44806673a06ecc1e275e5ad1819d3832ad4f858bd7&w=740",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md flex gap-3">
          <Link href="/">
            <p className="mb-5 font-bold text-xl">Home</p>
          </Link>
          <p className="font-bold text-xl">/</p>
          <p className="mb-5 font-bold text-xl">{page}</p>
        </div>
      </div>
    </div>
  );
};

export default SmallBanner;
