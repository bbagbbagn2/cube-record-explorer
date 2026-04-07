import Link from "next/link";
import { TrendingDown } from "lucide-react";
import RecordCard from "@/components/records/RecordCard";
import RecordTimeline from "@/components/charts/RecordTimeline";
import { WORLD_RECORDS } from "@/data/records";

export default function Home() {
  const featuredRecords = WORLD_RECORDS.slice(0, 3);

  return (
    <main className="min-h-screen bg-black text-white selection:bg-red-500/30">
      {/* Chart Section */}
      <section className="py-24 px-6 bg-neutral-950 border-y border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-1 space-y-8">
              <div>
                <div className="flex items-center text-red-500 mb-2">
                  <TrendingDown className="w-5 h-5 mr-2" />
                  <span className="text-sm font-bold uppercase tracking-widest">
                    Progression
                  </span>
                </div>
                <h2 className="text-4xl font-bold mb-4">
                  20 Years of Evolution
                </h2>
                <p className="text-neutral-400">
                  데이터로 증명된 20년의 진화. 우리는 불가능해 보였던 기록들을
                  매년 새롭게 써 내려가고 있습니다.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-neutral-900 rounded-xl border border-neutral-800">
                  <div className="text-3xl font-bold text-white">3.13s</div>
                  <div className="text-xs text-neutral-500 uppercase font-bold mt-1">
                    최근 기록
                  </div>
                </div>
                <div className="p-4 bg-neutral-900 rounded-xl border border-neutral-800">
                  <div className="text-3xl font-bold text-white">12+</div>
                  <div className="text-xs text-neutral-500 uppercase font-bold mt-1">
                    기록 보유자
                  </div>
                </div>
              </div>
            </div>

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

      {/* Featured Records */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-2">명예의 전당</h2>
              <p className="text-neutral-400">기록된 가장 빠른 시간들.</p>
            </div>
            <Link
              href="/records"
              className="text-red-500 font-bold hover:underline hidden md:block"
            >
              모든 기록 보기
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredRecords.map((record, i) => (
              <RecordCard key={record.id} record={record} index={i} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
