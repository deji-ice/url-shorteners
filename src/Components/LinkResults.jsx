import React, { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

export const LinkResults = ({ results, loading, links }) => {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    const timer = setTimeout(()=>{
      setIsCopied(false);
    }, 1000)
    return ()=>clearTimeout(timer)
  }, [isCopied]);

  
  return (
    <div className="mt-5">
      {results ? (
        <div className="flex space-x-5 justify-center bg-sky-200 p-2 ">
          <ul>
            <li className="flex">
              <p className="pr-10">{links}</p>
              <p className="">{results}</p>
            </li>
          </ul>

          <CopyToClipboard
            text={results}
            className={`h-inherit w-fit p-1 text-md text-white ${
              isCopied ? `bg-indigo-500` : `bg-sky-500`
            }`}
            onCopy={() => setIsCopied(true)}
          >
            {isCopied ? <span>copied!</span> : <button>copy</button>}
          </CopyToClipboard>
        </div>
      ) : (
        <span></span>
      )}
    </div>
  );
};
