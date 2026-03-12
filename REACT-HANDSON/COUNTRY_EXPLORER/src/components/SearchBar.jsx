import { useEffect, useRef } from "react";

function SearchBar({ onSearch }) {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="flex justify-center mb-6">
      <input
        ref={inputRef}
        type="text"
        placeholder="Search country..."
        onChange={(e) => onSearch(e.target.value)}
        className="w-80 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

export default SearchBar;