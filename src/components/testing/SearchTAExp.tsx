"use client";

import React, { useState } from "react";
import { useAction } from "next-safe-action/hooks";
import { searchTA } from "~/app/actions/search-TA";

const SearchTAExp = () => {
  const { execute, result } = useAction(searchTA);
  const [page, setPage] = useState(1);
  const [name, setName] = useState<string>("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setName(input);

    execute({ nameOrTitle: input, faculty: "", major: "", page: page });
  };

  const buttonOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const value = Number(e.currentTarget.value);
    setPage(value);

    execute({ nameOrTitle: name, faculty: "", major: "", page: value });
  };

  return (
    <div className="m-5">
      <div className="flex flex-col gap-5">
        {result.data && result.data.length > 0 ? (
          result.data.map((ta) => (
            <div key={ta.title}>
              <h3>{ta.title}</h3>
              <p>Wisudawan Name: {ta.wisudawanName}</p>
              <p>Faculty: {ta.faculty}</p>
              {/* <p>Major: {ta.major}</p> */}
              <p>Likes: {ta.likeCount}</p>
            </div>
          ))
        ) : (
          <p>No TA found.</p>
        )}
      </div>

      <div>
        <div className="my-3">
          <input
            type="text"
            value={name}
            onChange={onChange}
            placeholder="Search name / title"
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

export default SearchTAExp;
