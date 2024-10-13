"use client";

import React, { useState } from "react";
import { useAction } from "next-safe-action/hooks";
import { updateLikeTA } from "~/app/actions/like-TA";

const LikeTAExp = () => {
  const { execute, result } = useAction(updateLikeTA);
  const [taId, setTaId] = useState<string>("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setTaId(input);
  };

  const deleteOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      execute({ taId });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex flex-col gap-3 m-5">
      <p>Likes: {result.data?.updatedLikes}</p>

      <form onSubmit={deleteOnSubmit} className="flex flex-col gap-3 items-start">
        <input
          onChange={onChange}
          type="text"
          name="taId"
          placeholder="TA ID"
        />
        <button type="submit">Add / Delete</button>
      </form>
    </div>
  );
};

export default LikeTAExp;
