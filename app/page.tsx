import RecordTimeline from "@/components/charts/RecordTimeline";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-red-500/30">
      {/* Chart Section */}
      <section className="py-24 px-6 bg-neutral-950 border-y border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-1 space-y-8"></div>
            <div className="lg:col-span-2 bg-neutral-900/50 p-8 rounded-3xl border border-neutral-800">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-lg">
                  World Record Timeline (Seconds)
                </h3>
                <div className="text-xs text-neutral-500 font-mono">
                  2003 - 2023
                </div>
              </div>

              <RecordTimeline />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
