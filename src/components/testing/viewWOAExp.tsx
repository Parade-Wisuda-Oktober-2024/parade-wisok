"use client"

import React, { useEffect, useState } from 'react';
import { getAllWOA } from '~/app/actions/show-WOA';
import { useAction } from 'next-safe-action/hooks';

const WOAList = () => {
  const [page, setPage] = useState(1);
  const {execute, result} = useAction(getAllWOA);

  useEffect(() => {
    // Fetch data when component mounts or page changes
    execute({
      post: {
        to:'',
        content:'',
      },
      page:page,
    })
  }, [page]);

  return (
    <div>
      <h1>WOA Data</h1>
      <ul>
        {result.data?.map((woa) => (
          <li key={woa.id}>
            to:{woa.to} 
            <br/>
            {woa.content}
          </li> // Adjust according to your schema
        ))}
      </ul>
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>Previous</button>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
};

export default WOAList;