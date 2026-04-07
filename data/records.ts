export interface RecordEntry {
  id: string;
  time: number;
  athlete: string;
  country: string;
  competition: string;
  year: number;
  date: string;
  scramble: string;
  solveMoves: string[];
  optimizedMoves?: string[]; // Added for optimization simulation
  rankInYear?: number; // 1, 2, or 3
}

export const WORLD_RECORDS: RecordEntry[] = [
  // --- 2026 (Current Year) ---
  {
    id: "teodor-zajder-2026",
    time: 2.76, // 신기록!
    athlete: "Teodor Zajder",
    country: "Poland",
    competition: "GLS Big Cubes Gdańsk 2026",
    year: 2026,
    date: "2026-02-07",
    scramble: "D' R2 U2 B2 D2 L' F2 L' B2 R D2 B' R2 F D' B' R2 U' L' F2",
    solveMoves: ["x2", "D' R' F R D2", "U R U' R'", "U' L U L'"],
    rankInYear: 1,
  },
  {
    id: "yiheng-wang-2026",
    time: 3.08,
    athlete: "Yiheng Wang",
    country: "China",
    competition: "Beijing Spring 2026",
    year: 2026,
    date: "2026-03-15",
    scramble: "F2 U2 L' U2 R' F2 L2 U2 R' D2 L' B' D' B2 L2 U' R' U' L' B' R'",
    solveMoves: ["z2", "y", "U R2 U' F' L F' U' L'"],
    rankInYear: 2,
  },
  {
    id: "max-park-2026",
    time: 3.11,
    athlete: "Max Park",
    country: "USA",
    competition: "California Speed 2026",
    year: 2026,
    date: "2026-01-20",
    scramble: "D2 B2 U2 L2 F2 U' L2 U' B2 R2 F2 R' B' L' F' D' U' B' R' D2",
    solveMoves: ["x2", "R' U' R2 D' R' U' R D"],
    rankInYear: 3,
  },

  // --- 2023 ---
  {
    id: "max-park-2023",
    time: 3.13,
    athlete: "Max Park",
    country: "USA",
    competition: "Pride in Long Beach 2023",
    year: 2023,
    date: "2023-06-11",
    scramble: "D2 B2 U2 L2 F2 U' L2 U' B2 R2 F2 R' B' L' F' D' U' B' R' D2",
    solveMoves: [
      "x2",
      "R' U' R2 D' R' U' R D",
      "U' R U R'",
      "U' L' U L",
      "U R U' R' U2 R U' R'",
      "U' R U R' U R U2 R'",
      "U R U R' U' R' F R2 U' R' U' R U R' F' U",
    ],
    rankInYear: 1,
  },
  {
    id: "yiheng-wang-2023",
    time: 3.48,
    athlete: "Yiheng Wang",
    country: "China",
    competition: "Singapore Championship 2023",
    year: 2023,
    date: "2023-03-12",
    scramble: "F2 U2 L' U2 R' F2 L2 U2 R' D2 L' B' D' B2 L2 U' R' U' L' B' R'",
    solveMoves: ["z2", "y", "U R2 U' F' L F' U' L'"],
    rankInYear: 2,
  },
  {
    id: "luke-garrett-2023",
    time: 3.51,
    athlete: "Luke Garrett",
    country: "USA",
    competition: "Southeast Championship 2023",
    year: 2023,
    date: "2023-06-17",
    scramble: "U2 F' L2 U2 B2 R2 F' D2 F' R2 U' L2 B' D2 R' B2 D' F' R2 U'",
    solveMoves: ["x2", "D' R' F R D2"],
    rankInYear: 3,
  },

  // --- 2018 ---
  {
    id: "yusheng-du-2018",
    time: 3.47,
    athlete: "Yusheng Du",
    country: "China",
    competition: "Wuhu Open 2018",
    year: 2018,
    date: "2018-11-24",
    scramble: "F2 R2 B' L2 F' R2 D2 B R2 F' R2 U' L B2 U2 F' R2 U' L' B' R'",
    solveMoves: ["z2", "y", "U R2 U' F' L F' U' L'"],
    rankInYear: 1,
  },
  {
    id: "feliks-zemdegs-2018",
    time: 4.22,
    athlete: "Feliks Zemdegs",
    country: "Australia",
    competition: "Cube for Cambodia 2018",
    year: 2018,
    date: "2018-05-06",
    scramble: "U2 R2 F2 U' L2 D2 B2 R2 D2 B2 R' D' B2 L' F' R' D2 F' U2 R2",
    solveMoves: ["z2", "L' U' L U' F' L' U L D"],
    rankInYear: 2,
  },
  {
    id: "max-park-2018",
    time: 4.4,
    athlete: "Max Park",
    country: "USA",
    competition: "WCA World Championship 2018",
    year: 2018,
    date: "2018-07-15",
    scramble: "D2 R2 F2 D2 B2 D2 R2 U' L2 U' B2 L' F' U' R2 D2 F' L' B' L2",
    solveMoves: ["x2", "y", "D' R' F R D2"],
    rankInYear: 3,
  },

  // --- 2015 ---
  {
    id: "lucas-etter-2015",
    time: 4.9,
    athlete: "Lucas Etter",
    country: "USA",
    competition: "River Hill Fall 2015",
    year: 2015,
    date: "2015-11-21",
    scramble: "D2 L2 U2 B2 R2 F2 D2 R2 U' B2 U' L' F' U' R2 D2 F' L' B' L2",
    solveMoves: ["x2", "y", "D' R' F R D2"],
    rankInYear: 1,
  },
  {
    id: "collin-burns-2015",
    time: 5.25,
    athlete: "Collin Burns",
    country: "USA",
    competition: "Doylestown Spring 2015",
    year: 2015,
    date: "2015-04-25",
    scramble: "L2 U2 L2 B2 L2 R2 F' R2 U2 R2 D B2 L' B' D' R' B2 U' F' R2",
    solveMoves: ["y2", "D R' U L D2"],
    rankInYear: 2,
  },
  {
    id: "feliks-zemdegs-2015",
    time: 5.39,
    athlete: "Feliks Zemdegs",
    country: "Australia",
    competition: "World Championship 2015",
    year: 2015,
    date: "2015-07-19",
    scramble: "U2 R2 F2 U' L2 D2 B2 R2 D2 B2 R' D' B2 L' F' R' D2 F' U2 R2",
    solveMoves: ["z2", "L' U' L U' F' L' U L D"],
    rankInYear: 3,
  },

  // --- 2011 ---
  {
    id: "feliks-zemdegs-2011",
    time: 5.66,
    athlete: "Feliks Zemdegs",
    country: "Australia",
    competition: "Melbourne Winter Open 2011",
    year: 2011,
    date: "2011-06-25",
    scramble: "R' U2 R2 F L D' B' L2 R2 D2 B2 D2 R2 B' U2 R2 F' D2 R2 U2",
    solveMoves: ["z2", "y'", "U R' F R D2"],
    rankInYear: 1,
  },
  {
    id: "faz-2011-618",
    time: 6.18,
    athlete: "Feliks Zemdegs",
    country: "Australia",
    competition: "Melbourne Winter Open 2011",
    year: 2011,
    date: "2011-06-25",
    scramble: "U2 F' L2 U2 B2 R2 F' D2 F' R2 U' L2 B' D2 R' B2 D' F' R2 U'",
    solveMoves: ["x2", "D' R' F R D2"],
    rankInYear: 2,
  },
  {
    id: "faz-2011-624",
    time: 6.24,
    athlete: "Feliks Zemdegs",
    country: "Australia",
    competition: "Kubaroo Open 2011",
    year: 2011,
    date: "2011-05-07",
    scramble: "L2 B2 D2 F2 R2 U' L2 R2 B2 D' B2",
    solveMoves: ["y2", "F' L2 B' D' R' D2"],
    rankInYear: 3,
  },

  // --- 2003 ---
  {
    id: "dan-knights-2003",
    time: 16.71,
    athlete: "Dan Knights",
    country: "USA",
    competition: "World Championship 2003",
    year: 2003,
    date: "2003-08-23",
    scramble: "L2 B2 D2 F2 R2 U' L2 R2 B2 D' B2",
    solveMoves: ["// Early CFOP"],
    rankInYear: 1,
  },
  {
    id: "jess-bonde-2003",
    time: 20.0,
    athlete: "Jess Bonde",
    country: "Denmark",
    competition: "World Championship 2003",
    year: 2003,
    date: "2003-08-23",
    scramble: "Unknown",
    solveMoves: ["// Layer by Layer"],
    rankInYear: 2,
  },
  {
    id: "david-wesley-2003",
    time: 21.07,
    athlete: "David Wesley",
    country: "Sweden",
    competition: "World Championship 2003",
    year: 2003,
    date: "2003-08-23",
    scramble: "Unknown",
    solveMoves: ["// Corners First"],
    rankInYear: 3,
  },
];
// Convenience export: only the 1st-place (rankInYear === 1) entries mapped to the
// minimal shape expected by the chart component.
export const records = WORLD_RECORDS.filter((r) => r.rankInYear === 1).map(
  (r) => ({
    year: r.year,
    time: r.time,
    athlete: r.athlete,
    scramble: r.scramble,
  }),
);
