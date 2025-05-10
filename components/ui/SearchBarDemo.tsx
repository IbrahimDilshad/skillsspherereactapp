'use client';
import { useState } from 'react';
import tutorsData from '@/data/tutors.json';
import { PlaceholdersAndVanishInput } from './placeholders-and-vanish-input';

type Tutor = {
  name: string;
  subject: string;
  city: string;
  area: string;
};

export default function SearchBarDemo() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<Tutor[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim() === '') {
      setSuggestions([]); // don't show anything if input is empty
      return;
    }

    const lower = value.toLowerCase();
    const filtered = tutorsData.filter(
      (t) =>
        t.name.toLowerCase().includes(lower) ||
        t.subject.toLowerCase().includes(lower) ||
        t.city.toLowerCase().includes(lower) ||
        t.area.toLowerCase().includes(lower)
    );
    setSuggestions(filtered.slice(0, 5)); // limit to 5
  };

  const handleSelect = (tutor: Tutor) => {
    alert(`Selected: ${tutor.name} (${tutor.subject}) - ${tutor.city}`);
  };

  return (
    <div className="p-4 max-w-2xl mx-auto relative">
      <div className="relative">
        <PlaceholdersAndVanishInput
          placeholders={["Search by name, subject, city, or area..."]}
          onChange={handleChange}
          onSubmit={(e) => {
            e.preventDefault();
            // Optionally handle submit here
          }}
        />
        
      </div>

      {query.trim() !== '' && suggestions.length > 0 && (
        <ul className="absolute w-full z-10 border border-gray-700 rounded mt-1 bg-gray-800 shadow text-white">
          {suggestions.map((tutor, index) => (
            <li
              key={index}
              className="p-3 hover:bg-gray-700 cursor-pointer transition-colors duration-200"
              onClick={() => handleSelect(tutor)}
            >
              {tutor.name} – {tutor.subject} ({tutor.city})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
