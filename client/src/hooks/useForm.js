// write your custom hook here to control your checkout form
import React, { useState } from "react";

export const useForm = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const handleChanges = (updatedValue) => {
    setValue(updatedValue);
  };
  return [value, setValue, handleChanges];
};

// export const useForm = () => {
//   const [firstName, setFirstName, handleFirstName] = useInput("");
//   const [lastName, setLastName, handleLastName] = useInput("");
//   const [address, setAddress, handleAddress] = useInput("");
//   const [city, setCity, handleCity] = useInput("");
//   const [state, setState, handleState] = useInput("");
//   const [zip, setZip, handleZip] = useInput("");

//   return [
//     setFirstName,
//     handleFirstName,
//     setLastName,
//     handleLastName,
//     setAddress,
//     handleAddress,
//     setCity,
//     handleCity,
//     setState,
//     handleState,
//     setZip,
//     handleZip,
//   ];
// };
