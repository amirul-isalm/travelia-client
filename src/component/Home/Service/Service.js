import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import "./Service.css";
import SingelService from "./SingelService";

const Service = () => {
  const [services, setService] = useState({});
  useEffect(() => {
    fetch("https://polar-basin-99537.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  if (!services.length) {
    return (
      <div className="mt-5 p-5">
        <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
      </div>
    );
  }

  return (
    <div className="row services">
      <h1>Our Best Deals</h1>
      <div>
        {" "}
        <hr className="w-75 mx-auto" />
      </div>
      {services.map((service) => (
        <SingelService key={service._id} service={service}></SingelService>
      ))}
    </div>
  );
};

export default Service;
