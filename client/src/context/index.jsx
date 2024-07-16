import { createContext, useState } from "react";
export const FormContext = createContext();

export function FormGive({ children }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const updateForm = (data) => {
    setFormData({title:data.title,description:data.description});
  };
  return (
    <FormContext.Provider value={{ formData,updateForm ,setFormData}}>
      {children}
    </FormContext.Provider>
  );
}
