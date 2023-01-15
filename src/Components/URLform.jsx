import React from "react";
import { Input, Button } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState, useEffect } from "react";
import axios from "axios";
import { LinkResults } from "./LinkResults";

const schema = yup.object().shape({
  link: yup
    .string()
    .matches(
      /(https?:\/\/)?([\w\-])+\.{1}([a-zA-Z]{2,63})([\/\w-]*)*\/?\??([^#\n\r]*)?#?([^\n\r]*)/
    )
    .required("Please enter link"),
});

function URLform() {
  const [links, setLinks] = useState("");
  const [shortenedLinks, setShortenedLinks] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios(`https://api.shrtco.de/v2/shorten?url=${links}`);
      setShortenedLinks(res.data.result.full_short_link);
      console.log(res.data.result.full_short_link);
      setLoading(false);
      console.log(shortenedLinks);
    } catch (error) {}
  };
  useEffect(() => {
    fetchData();
  }, [links]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data.link);
    setLinks(data.link);
  };
  return (
    <div className="flex flex-col items-center bg-slate-600 rounded-md text-center justify-center lg:w-10/12 lg:bottom-[-28rem] lg:h-[10rem] lg:left-[7rem] lg:absolute lg:m-10 lg:mt-[50rem]  relative bottom-14 mb-[-2rem] m-8 h-[8rem] ">
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
          {errors.link && (
            <span className="text-red-500 text-xs italic m-3">
              This field is required
            </span>
          )}
        </div>
        <button
          type="submit"
          id="submit"
          className="w-full h-10 bg-indigo-600 rounded-md text-white lg:text-xl lg:w-[10rem] lg:h-14 hover:bg-indigo-400 duration-500"
        >
          Shorten It!
        </button>
      </form>
      <LinkResults results={shortenedLinks} links={links}loading={loading}/>
    </div>
  );
}

export default URLform;
