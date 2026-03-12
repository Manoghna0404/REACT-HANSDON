import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import CountryList from "./components/CountryList";

function SideEffects() {
  const [countries, setCountries] = useState([]);
  const [allCountries, setAllCountries] = useState([]); // original data
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,capital,population,region,flags"
        );

        if (!res.ok) {
          throw new Error("Failed to fetch");
        }

        const data = await res.json();
        setCountries(data);
        setAllCountries(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, []);

  const handleSearch = (query) => {
    if (!query) {
      setCountries(allCountries);
      return;
    }

    const filtered = allCountries.filter((country) =>
      country.name.common.toLowerCase().includes(query.toLowerCase())
    );

    setCountries(filtered);
  };

  if (loading) {
    return <p className="text-center text-3xl text-blue-600 mt-10">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-3xl text-red-500 mt-10">{error}</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center mb-6">
         Country Explorer
      </h1>

      <SearchBar onSearch={handleSearch} />
      <CountryList countries={countries} />
    </div>
  );
}

export default SideEffects;