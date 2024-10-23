"use client"

import React, { useEffect, useState } from 'react';
import { getAllWOA } from '~/app/actions/getAllWOA';
import { useAction } from 'next-safe-action/hooks';

const WOAList = () => {
  const [page, setPage] = useState(1);
  const {execute, result} = useAction(getAllWOA);

  useEffect(() => {
    // Fetch data when component mounts or page changes
    execute({ nameOrNim: "", faculty: "", major: "", senderName: "Anon", content: "", page: page });
  }, [page]);

  return (
    <div>
      <h1>WOA Data</h1>
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

      <button onClick={() => setPage(page - 1)} disabled={page === 1}>Previous</button>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
};

export default WOAList;