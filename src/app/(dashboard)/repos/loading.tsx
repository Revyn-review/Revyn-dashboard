export default function Loading() {
  return (
    <div className="px-8 py-8 animate-pulse">
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="h-7 w-40 bg-[#1D1A17] rounded-lg mb-2" />

          <div className="h-4 w-56 bg-[#161412] rounded" />
        </div>

        <div className="h-9 w-32 bg-[#1D1A17] rounded-lg" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="bg-[#10100F] border border-white/[0.06] rounded-xl p-4 flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#161412] rounded-lg" />

              <div className="h-4 w-40 bg-[#1D1A17] rounded" />
            </div>

            <div className="w-4 h-4 bg-[#161412] rounded" />
          </div>
        ))}
      </div>
    </div>
  );
}