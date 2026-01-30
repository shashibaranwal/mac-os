import React, { useState, useEffect } from "react";

const DateTime = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 5000);
    return () => clearInterval(timer);
  }, []);

  // Format: Fri Jan 30
  // toDateString() returns something like "Fri Jan 30 2026"
  // We remove the year part.
  const datePart = date.toDateString().replace(/ \d{4}$/, "");

  // Format: 1:21 PM
  const timePart = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <p>
      {datePart}, {timePart}
    </p>
  );
};

export default DateTime;
