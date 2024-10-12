import React, { useEffect, useState } from 'react';
import { getAllWOA } from '~/app/actions/show-WOA';

const WOAList = () => {
  const [woaData, setWoaData] = useState<string>("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    // Fetch data when component mounts or page changes
    const fetchWOAData = async (page: number) => {
      const data = await getAllWOA({
          post: {
            to: '', // You can change this to some user input if needed
            content: '', // You can change this to some user input if needed
          },
          page: page, // Pass in the current page number
      });
      setWoaData(data);
    };

    fetchWOAData(page);
  }, [page]);

  return (
    <div>
      <h1>WOA Data</h1>
      <ul>
        {woaData.map((woa) => (
          <li key={woa.to}>{woa.content}</li> // Adjust according to your schema
        ))}
      </ul>
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>Previous</button>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
};

export default WOAList;