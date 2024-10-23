"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useAction } from "next-safe-action/hooks";
import { searchWOA } from "~/app/actions/search-WOA";
import debounce from "lodash.debounce";

const SearchWOAExp = () => {
  const {execute, result} = useAction(searchWOA);
  const [page, setPage] = useState(1);
  const [name, setName] = useState<string>("");

  const debouncedExecute = useMemo(() => {
    return debounce((value) => {
      execute({ nameOrNim: value, faculty: "", major: "", senderName: "Anon", content: "", page: page }); // Fetch data with initial search input (empty)
    }, 400);
  }, [page]);

  useEffect(() => {
    if (name) {
      debouncedExecute(name);
    }
  }, [setName, debouncedExecute]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setName(input);

    debouncedExecute(name);  
  };

  const buttonOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const value = Number(e.currentTarget.value);
    setPage(value);

    execute({ nameOrNim: name, faculty: "", major: "", senderName: "Anon", content: "", page: value });
  };

  return (
    <div className="m-5">
      <div className="flex flex-col gap-5">
        {result.data && result.data.length > 0 ? (
          result.data.map((woa) => (
            <div key={woa.woaId}>
              <h2>From {woa.senderName ?? "Anon"}</h2>
              <h1>{woa.name}</h1>
              <p>{woa.nim}</p>
              <p>{woa.content}</p>
            </div>
          ))
        ) : (
          <p>No WOA found.</p>
        )}
      </div>

      <div>
        <div className="my-3">
          <input
            type="text"
            value={name}
            onChange={onChange}
            placeholder="Search name / NIM"
          />
        </div>
        <div className="my-3 flex gap-5">
          <button onClick={buttonOnClick} value={1}>
            1
          </button>
          <button onClick={buttonOnClick} value={2}>
            2
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchWOAExp;