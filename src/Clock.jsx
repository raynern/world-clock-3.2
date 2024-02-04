import { useEffect, useState } from "react";

export default function Clock({ timeZone }) {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setTimeout(() => setDate(new Date()), 1000);
  }, [date]);

  // return <p>{date.toLocaleString("en-GB", { timeZone: timeZone })}</p>;
  return (
    <p>{`${date.toLocaleString("en-GB", {
      timeZone: timeZone,
    })}`}</p>
  );
}
