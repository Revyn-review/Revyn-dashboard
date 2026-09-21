export default function Loading() {
  return (
    <div className="px-8 py-8 animate-pulse">
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="h-7 w-40 bg-gray-200 rounded mb-2" />
          <div className="h-4 w-56 bg-gray-100 rounded" />
        </div>
        <div className="h-9 w-32 bg-gray-200 rounded-md" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-between"
          >
            <div className="h-4 w-40 bg-gray-200 rounded" />
            <div className="w-4 h-4 bg-gray-100 rounded" />
          </div>
        ))}
      </div>
    </div>
  );
}