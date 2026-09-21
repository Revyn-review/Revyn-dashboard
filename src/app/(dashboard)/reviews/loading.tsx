export default function Loading() {
  return (
    <div className="px-8 py-8 animate-pulse">
      <div className="h-7 w-32 bg-gray-200 rounded mb-2" />
      <div className="h-4 w-72 bg-gray-100 rounded mb-8" />

      <div className="space-y-3">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-lg p-5 flex items-start justify-between gap-4"
          >
            <div className="flex-1 space-y-2">
              <div className="h-3 w-40 bg-gray-100 rounded" />
              <div className="h-4 w-2/3 bg-gray-200 rounded" />
              <div className="h-3 w-full bg-gray-100 rounded" />
            </div>
            <div className="w-6 h-6 bg-gray-100 rounded-full shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
}