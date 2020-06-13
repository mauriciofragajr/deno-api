import { BenchmarkTimer, bench, runBenchmarks } from "https://deno.land/std/testing/bench.ts";

bench(function forIncrementX1e9(b: BenchmarkTimer): void {
  b.start();
  for (let i = 0; i < 1e9; i++);
  b.stop();
});

bench({
  name: "runs100ForIncrementX1e6",
  runs: 100,
  func(b): void {
    b.start();
    for (let i = 0; i < 1e6; i++);
    b.stop();
  },
});

runBenchmarks();