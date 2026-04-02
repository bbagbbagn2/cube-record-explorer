import RecordTimeline from "@/components/charts/RecordTimeline";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-red-500/30">
      {/* Chart Section */}
      <section className="py-24 px-6 bg-neutral-950 border-y border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <RecordTimeline />
        </div>
      </section>
    </main>
  );
}
