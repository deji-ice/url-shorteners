import React, { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

export const LinkResults = ({ results, loading, links }) => {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsCopied(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, [isCopied]);

  return (
    <div className="absolute lg:top-[10.5rem]  top-[8.5rem] ">
      {results ? (
        <div className="flex space-x-5 lg:justify-between justify-center bg-[#fafdff] rounded-br-lg p-2 lg:w-[50rem] w-[20rem] ">
          <ul>
            <li className="flex lg:px-10 lg:py-1 items-center text-sm flex-col  lg:space-x-0  space-x-1 lg:flex-row ">
              <div className="flex flex-row lg:space-x-0 space-x-5 ">

              <p className="lg:pr-[18rem] lg:flex hidden">{links}</p>

              <p className=" lg:pr-10 text-blue-500">{results}</p> 
              </div>
            
              <CopyToClipboard
                text={results}
                className={`h-auto w-24 p-1 mt-3 text-md text-white rounded-md ${
                  isCopied ? `bg-indigo-500` : `bg-sky-500`
                }`}
                onCopy={() => setIsCopied(true)}
              >
                {isCopied ? <span>copied!</span> : <button>copy</button>}
              </CopyToClipboard>
            </li>
          </ul>
        </div>
      ) : (
        <span></span>
      )}
    </div>
  );
};
