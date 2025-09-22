import React from "react";
import logoGoogle from "../assets/logo-google.png";
import logoIbm from "../assets/logo-ibm.png";
import logoMicrosoft from "../assets/logo-microsoft.png";
import logoHp from "../assets/logo-hp.png";
import logoVector from "../assets/logo-vector-graphics.png";

const Partners = () => {
  return (
    <section className="mt-24 px-6 lg:px-24 mx-auto container">
      <div className="flex flex-col sm:flex-wrap sm:flex-row items-center justify-between max-lg:gap-10">
        <img src={logoGoogle} alt="Google" />
        <img src={logoIbm} alt="IBM" />
        <img src={logoMicrosoft} alt="Microsoft" />
        <img src={logoHp} alt="HP" />
        <img src={logoVector} alt="Vector-Graphics" />
      </div>
    </section>
  );
};

export default Partners;
