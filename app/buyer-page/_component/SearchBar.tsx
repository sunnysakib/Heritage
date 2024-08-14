"use client";

import { ChangeEvent, useEffect, useState } from "react";
import { Input } from "@/components/ui/input";

type SearchBarProps = {
  onSearch: (query: string) => void;
};

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState<string>("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const [properties, setProperties] = useState<any[]>([]);
  useEffect(() => {
    const result = fetch('http://localhost:5000/properties').then(res => res.json()).then(data => setProperties(data))
  },[])
  console.log(query);
  const titles = properties.map(property => property.title);
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (value) {
      const filteredSuggestions = titles.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const handleSearch = () => {
    onSearch(query);
    setShowSuggestions(false);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    setShowSuggestions(false);
    onSearch(suggestion);
  };

  return (
    <div className="relative flex items-center">
      <Input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search Properties"
        className=""
      />

      {showSuggestions && suggestions.length > 0 && (
        <ul className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-lg mt-2 shadow-md z-10">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
