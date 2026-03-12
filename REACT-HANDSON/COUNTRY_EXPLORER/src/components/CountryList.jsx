import CountryCard from "./CountryCard";

export default function CountryList({ countries }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {countries.map((country) => (
        <CountryCard key={country.name.common} country={country} />
      ))}
    </div>
  );
}