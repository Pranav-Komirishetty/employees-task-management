import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage, updatedTaskStatus } from "../utils/LocalStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [empsData, setEmpsData] = useState(null);
  const [adminsData, setAdminsData] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const isDataExist = getLocalStorage();
    if (!isDataExist.admins || !isDataExist.employees) {
      setLocalStorage();
    }
    const { employees, admins } = getLocalStorage();
    setEmpsData(employees);
    setAdminsData(admins);
    if (localStorage.getItem("userData")) {
      const userData = JSON.parse(localStorage.getItem("userData"));
      setLoggedInUser(userData);
    }
  }, []);

  useEffect(() => {
    if (empsData) {
      localStorage.setItem("employees", JSON.stringify(empsData));
    }
  }, [empsData]);

  useEffect(() => {
    if (loggedInUser) {
      localStorage.setItem("userData", JSON.stringify(loggedInUser));

      if (loggedInUser.role == "employee") {
        const updatedEmployees = empsData.map((emp) => {
          if (loggedInUser.userData.name === emp.name) {
            return {
              ...loggedInUser.userData,
            };
          }
          return emp;
        });

        const updateTaskStatus = updatedEmployees//updatedTaskStatus(updatedEmployees)

        setEmpsData(updateTaskStatus);
      }
    }
  }, [loggedInUser]);

  return (
    <div>
      <AuthContext.Provider
        value={{
          empsData,
          setEmpsData,
          adminsData,
          setAdminsData,
          loggedInUser,
          setLoggedInUser,
        }}
      >
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
