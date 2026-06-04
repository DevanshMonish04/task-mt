const FilterBar = ({
  filter,
  setFilter,
  search,
  setSearch,
}) => {
  return (
    <div className="flex flex-wrap gap-3 mb-6">

      <button
        onClick={() => setFilter("all")}
        className={`px-4 py-2 rounded-lg ${
          filter === "all"
            ? "bg-blue-600 text-white"
            : "bg-white shadow"
        }`}
      >
        All
      </button>

      <button
        onClick={() => setFilter("active")}
        className={`px-4 py-2 rounded-lg ${
          filter === "active"
            ? "bg-blue-600 text-white"
            : "bg-white shadow"
        }`}
      >
        Active
      </button>

      <button
        onClick={() => setFilter("completed")}
        className={`px-4 py-2 rounded-lg ${
          filter === "completed"
            ? "bg-blue-600 text-white"
            : "bg-white shadow"
        }`}
      >
        Completed
      </button>

      <input
        type="text"
        placeholder="Search task..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="border px-4 py-2 rounded-lg flex-1"
      />
    </div>
  );
};

export default FilterBar;