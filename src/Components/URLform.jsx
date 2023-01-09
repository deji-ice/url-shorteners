import React from "react";
import { Input, Button } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  link: yup
    .string()
    .matches(
      /(https?:\/\/)?([\w\-])+\.{1}([a-zA-Z]{2,63})([\/\w-]*)*\/?\??([^#\n\r]*)?#?([^\n\r]*)/
    )
    .required("Please enter link"),
});

function URLform() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = data => console.log(data);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full items-center flex flex-col p-10 justify-center space-y-2 lg:items-center  lg:flex-row lg:space-y-4"
    >
      <div className="flex flex-col lg:space-y-10">
        <Input
          className="h-10 rounded-md lg:h-14 lg:w-[60rem] lg:text-xl"
          name="link"
          type="text"
          placeholder="Shorten link here..."
          {...register("link", { required: true })}
        />
        {errors.link && <span className="text-red-500 text-xs italic m-3">This field is required</span>}
      </div>
      <button
        type="submit"
        id="submit"
        
        className="w-full h-10 bg-slate-600 rounded-md text-white lg:text-xl lg:w-[10rem] lg:h-14 hover:bg-indigo-400 duration-500"
      >
        Shorten It!
      </button>
    </form>
  );
}

export default URLform;
