export default function CountryCard({ country }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
      <img
        src={country.flags.png}
        alt={country.name.common}
        className="w-full h-40 object-cover"
      />

      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">
          {country.name.common}
        </h3>

        <p className="text-sm">
          <span className="font-medium">Capital:</span>{" "}
          {country.capital?.[0] || "N/A"}
        </p>

        <p className="text-sm">
          <span className="font-medium">Population:</span>{" "}
          {country.population.toLocaleString()}
        </p>

        <p className="text-sm">
          <span className="font-medium">Region:</span>{" "}
          {country.region}
        </p>
      </div>
    </div>
  );
}