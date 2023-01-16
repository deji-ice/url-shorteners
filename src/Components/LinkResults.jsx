import React, { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

export const LinkResults = ({ results, loading, links }) => {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    setIsCopied(false);
    console.log(results);
    
  }, [results]);

  return (
    <div className="mt-5">
      {results ? (
        <div className="flex space-x-5 justify-center bg-sky-200 p-2 ">
          <p className="pr-10">{links}</p>
          <p className="">{results}</p>
          <CopyToClipboard
            text={results}
            className="bg-sky-500 h-inherit w-fit p-1 text-md text-white"
            onCopy={()=>setIsCopied(true)}
          >
            { isCopied ?
              <span>copied!</span>
              :
              <button>copy</button>}
          </CopyToClipboard>
      
        </div>
      ) : (
        <span></span>
      )}
    </div>
  );
};
