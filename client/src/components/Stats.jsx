const Stats = ({ tasks }) => {
  const total = tasks.length;
  const completed = tasks.filter(
    (task) => task.completed
  ).length;
  const active = total - completed;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">

      <div className="bg-white p-5 rounded-xl shadow">
        <h3 className="text-gray-500 text-sm">
          Total Tasks
        </h3>
        <p className="text-3xl font-bold mt-2">
          {total}
        </p>
      </div>

      <div className="bg-white p-5 rounded-xl shadow">
        <h3 className="text-gray-500 text-sm">
          Active Tasks
        </h3>
        <p className="text-3xl font-bold text-blue-600 mt-2">
          {active}
        </p>
      </div>

      <div className="bg-white p-5 rounded-xl shadow">
        <h3 className="text-gray-500 text-sm">
          Completed Tasks
        </h3>
        <p className="text-3xl font-bold text-green-600 mt-2">
          {completed}
        </p>
      </div>

    </div>
  );
};

export default Stats;