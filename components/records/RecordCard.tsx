"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Trophy, Calendar, MapPin, ChevronRight } from "lucide-react";
import { RecordEntry } from "@/data/records";

interface RecordCardProps {
  record: RecordEntry;
  index: number;
}

export default function RecordCard({ record, index }: RecordCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      className="group relative"
    >
      <Link href={`/records/${record.id}`}>
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 transition-all hover:border-red-500/50 hover:shadow-[0_0_20px_rgba(239,68,68,0.1)]">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-2xl font-bold text-white group-hover:text-red-500 transition-colors">
                {record.time}s
              </h3>
              <p className="text-neutral-400 font-medium">{record.athlete}</p>
            </div>
            <div className="bg-neutral-800 p-2 rounded-lg">
              <Trophy className="w-5 h-5 text-yellow-500" />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center text-sm text-neutral-500">
              <Calendar className="w-4 h-4 mr-2" />
              {record.year}
            </div>
            <div className="flex items-center text-sm text-neutral-500">
              <MapPin className="w-4 h-4 mr-2" />
              <span className="truncate">{record.competition}</span>
            </div>
          </div>

          <div className="mt-6 flex items-center text-xs font-bold uppercase tracking-widest text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">
            자세히 보기 <ChevronRight className="w-4 h-4 ml-1" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
