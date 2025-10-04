import React, { useState } from "react";

const SpecificVerse = () => {
  const [verse, setVerse] = useState("");
  const [input, setInput] = useState("John 3:16");

  const fetchSpecificVerse = async () => {
    try {
      const formattedInput = input.replace(" ", "+");
      const response = await fetch(
        `https://labs.bible.org/api/?passage=${formattedInput}&type=json`
      );
      const data = await response.json();
      if (data.length > 0) {
        setVerse(`${data[0].bookname} ${data[0].chapter}:${data[0].verse} - ${data[0].text}`);
      }
    } catch (error) {
      console.error("Error fetching specific verse:", error);
      setVerse("Failed to fetch verse. Check your input!");
    }
  };

  return (
    <div className="verse-container">
      <h2>Specific Bible Verse</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter verse (e.g., John 3:16)"
      />
      <button onClick={fetchSpecificVerse}>Get Verse</button>
      <p>{verse}</p>
    </div>
  );
};

export default SpecificVerse;
