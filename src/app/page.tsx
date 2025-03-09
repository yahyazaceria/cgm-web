"use client";

import { useEffect, useState } from 'react';

export default function Home() {
  const [result, setResult] = useState('Loading...');

  useEffect(() => {
    fetch('/api/glucose')
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          setResult(`Error: ${data.error}`);
        } else {
          setResult(data.data);
        }
      });
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-xl font-bold">Glucose Monitor Results:</h1>
      <pre>{result}</pre>
    </div>
  );
}
