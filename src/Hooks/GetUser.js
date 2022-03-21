import React, { useState, useEffect } from "react";
import { getUserApi } from "../Api/Index";
import UseAuth from "./UseAuth";

const UseGetUser = () => {
  const { user } = UseAuth();
  const [loading, setLoading] = useState(true);
  const [getUser, setGetUser] = useState();
  useEffect(() => {
    fetchData();
  }, [user]);

  const fetchData = async () => {
    const bodyData = {
      email: user?.email,
    };
    const res = await getUserApi(bodyData);
    setGetUser(res.data);
    setLoading(false);
  };
  return { getUser, loading };
};

export default UseGetUser;
