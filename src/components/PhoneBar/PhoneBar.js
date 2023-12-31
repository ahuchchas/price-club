import React, { useEffect, useState } from "react";
import axios from "axios";
import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from "recharts";
const PhoneBar = () => {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => {
        const phonesLoaded = data.data.data;
        const phoneData = phonesLoaded.map((phone) => {
          const parts = phone.slug.split("-");
          const price = parseInt(parts[1]);

          return { name: phone.phone_name, price: price };
        });
        console.log(phoneData);
        setPhones(phoneData);
      });
  }, []);
  return (
    <div>
      <BarChart width={500} height={400} data={phones}>
        <Bar dataKey="price" fill="#8884d8" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
      </BarChart>
    </div>
  );
};

export default PhoneBar;
