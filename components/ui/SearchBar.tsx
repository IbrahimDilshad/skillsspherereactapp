"use client";
import React, { useState } from "react";

export default function SearchBar({
  cards,
  onSearch,
}: {
  cards: any[];
  onSearch: (filtered: any[]) => void;
}) {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<any[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    const filtered = cards.filter((card) =>
      card.title.toLowerCase().includes(value.toLowerCase())
    );

    setSuggestions(value.length > 0 ? filtered.slice(0, 5) : []);
  };

  const handleSearch = (term: string) => {
    const filtered = cards.filter(
      (card) =>
        card.title.toLowerCase().includes(term.toLowerCase()) ||
        card.description.toLowerCase().includes(term.toLowerCase())
    );
    onSearch(filtered);
    setSuggestions([]);
    setQuery(term);
  };

  return (
    <div className="w-full max-w-xl mx-auto my-4 relative">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        className="w-full p-2 rounded border border-gray-300 focus:outline-none"
        placeholder="Search tutors by name, subject, or description..."
      />
      {suggestions.length > 0 && (
        <ul className="absolute z-10 w-full bg-white border border-gray-300 mt-1 rounded shadow-md">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className="p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSearch(suggestion.title)}
            >
              {suggestion.title}
            </li>
          ))}
        </ul>
      )}
      <button
        onClick={() => handleSearch(query)}
        className="mt-2 w-full bg-blue-600 text-white p-2 rounded"
      >
        Search
      </button>
    </div>
  );
}
// This code defines a SearchBar component that allows users to search for tutors by name, subject, or description.