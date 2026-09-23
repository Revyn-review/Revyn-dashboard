export default function Loading() {
  return (
    <div className="px-8 py-8 animate-pulse">
      <div className="h-7 w-40 bg-[#1D1A17] rounded-lg mb-2" />

      <div className="h-4 w-64 bg-[#161412] rounded mb-8" />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="bg-[#10100F] border border-white/[0.06] rounded-xl p-5"
          >
            <div className="w-8 h-8 bg-[#1D1A17] rounded-lg mb-4" />

            <div className="h-7 w-12 bg-[#1D1A17] rounded mb-2" />

            <div className="h-3 w-24 bg-[#161412] rounded" />
          </div>
        ))}
      </div>

      <div className="h-4 w-32 bg-[#1D1A17] rounded mb-3" />

      <div className="space-y-3">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="bg-[#10100F] border border-white/[0.06] rounded-xl p-5 flex items-start justify-between gap-4"
          >
            <div className="flex-1 space-y-2">
              <div className="h-3 w-32 bg-[#161412] rounded" />
              <div className="h-4 w-3/4 bg-[#1D1A17] rounded" />
              <div className="h-3 w-full bg-[#161412] rounded" />
            </div>

            <div className="w-6 h-6 bg-[#161412] rounded-full shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
}