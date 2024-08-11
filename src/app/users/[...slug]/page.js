"use client"
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

function Page() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const pathname = usePathname();
  const userId = pathname.split('/').pop();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/users/${userId}`, {
          headers: {
            Accept: "application/json",
          },
          method: "POST",
        });

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const text = await res.text();
        const json = text ? JSON.parse(text) : {};

        setData(json.data);
      } catch (err) {
        setError(err.message);
        console.error("Failed to fetch data", err);
      }
    };

    fetchData();
  }, [userId]);

  if (error) return <div>Error: {error}</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h2>{data.name}</h2>
      <h2>{data.age}</h2>
    </div>
  );
}

export default Page;
