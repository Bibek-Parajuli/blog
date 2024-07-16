import {  useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FormContext } from "../../context";
import { useContext } from "react";

export default function Form() {
  const {updateForm}=useContext(FormContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
//add blog react form handler
  const onSubmit = async (data) => {
    updateForm(data);
    const response = await axios.post("http://localhost:3000/api/blogs/add", {
      title: data.title,
      description: data.description,
    });
    const result = await response.data;
    console.log(result);
    if (result) {
      reset();
      navigate("/", );
    }
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <br />
          <input
            type="text"
            {...register("title", {
              required: { value: true, message: "title is required" },
              minLength: { value: 4, message: "min length is 4" },
              maxLength: { value: 10, message: "max length is 10" },
            })}
          />
          {errors.title && <div>{errors.title.message}</div>} <br />
          <br />
          <textarea
            {...register("description", {
              required: { value: true, message: "description is required" },
              minLength: { value: 1, message: "min length is 1" },
              maxLength: { value: 50, message: "max length is 20" },
            })}
          ></textarea>
          {errors.description && <div>{errors.description.message}</div>} <br />
          <br />
          <br />
          <input disabled={isSubmitting} type="submit" />
          {isSubmitting && <div>Loading ... </div>}
        </form>
      </div>
    </>
  );
}

