"use client";

import Copyright from "../components/Copyright";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TopLine from "../components/TopLine";
import { useOurBrandsStore } from "../store/ourBrands";
import { useEffect } from "react";

type Brand = {
  brandname: string;
  img: string;
  showdelimg: boolean;
  color: string;
  paraone: string;
  paratwo: string;
};

export default function OurBrandsPage({
  serverBrandsData,
}: {
  serverBrandsData: Brand[];
}) {
  const { brands, setBrands } = useOurBrandsStore();

  useEffect(() => {
    setBrands(serverBrandsData);
  }, [serverBrandsData]);

  return (
    <div>
      <TopLine />
      <Navbar />
      <div className=" text-center xl:mx-20 xl:text-left mt-16 font-[900] text-4xl">Our Brands</div>

      {brands.map((b, i) => (
        <Brands
          key={i}
          name={b.brandname}
          img={`/${b.img}`} // assuming it's relative path
          paraone={b.paraone}
          paratwo={b.paratwo}
        />
      ))}

      <Footer />
      <Copyright />
    </div>
  );
}

function Brands({
  name,
  img,
  paraone,
  paratwo,
}: {
  name: string;
  img: string;
  paraone: string;
  paratwo: string;
}) {
  return (
    <div className="flex items-center mt-8 flex-col mb-10">
      <div className="flex flex-row items-center justify-center flex-wrap bg-[#edd7b5] px-[5px] xl:px-[150px] py-[40px] xl:py-[50px] w-[90%] rounded-[5px]">
        <img
          src={img}
          className="xl:w-[200px] xl:h-[220px] w-[140px] h-[150px] mr-[35px] ml-[30px] mb-[30px] xl:mb-[0px]"
          alt={name}
        />
        <div className="max-w-[739px]">
          <div className="text-3xl mb-[15px] text-center font-[900]">{name}</div>
          <div className="text-center px-[15px] xl:px-[45px] text-[17px]">
            {paraone}
            <br />
            <br />
            {paratwo}
          </div>
        </div>
      </div>
    </div>
  );
}
