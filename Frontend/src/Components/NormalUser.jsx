import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const NormalUser = () => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const checkAccess = async () => {
      try {
        const response = await axios.get("http://localhost:4000/normalUser", {
          withCredentials: true,
        });
        setMessage(response.data.message);
      } catch (error) {
        if (error.response || error.response.status === 401) {
          navigate("/login");
        } else {
          setMessage("An error occurred");
        }
      }
    };

    checkAccess();
  }, [navigate]);

  return (
    <div>
      <p className="text-center text-teal-400 border-x-2 mt-6 ">{message}</p>
      <h1 className="text-center text-teal-400 border-x-2 mt-6 ">
        This is intended for Normal user for testing purpose only Page
      </h1>
    </div>
  );
};

export default NormalUser;
