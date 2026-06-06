const FilterBar = ({
  filter,
  setFilter,
  search,
  setSearch,
}) => {
  return (
    <div className="flex flex-wrap gap-3 mb-6">

      {/* Show all tasks */}
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

      {/* Show only active (incomplete) tasks */}
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

      {/* Show only completed tasks */}
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

      {/* Search input for filtering tasks by title */}
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