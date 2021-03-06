load("9ea6ef8d0280efd620f5247b330a30f1.js");
// Simple performance test of SIMD.add operation.  Use SIMD.add to average up elements
// in a Float32Array. Compare to scalar implementation of same function.
// Author: Peter Jensen

(function () {

  // Kernel configuration
  var kernelConfig = {
    kernelName:       "AverageFloat32x4LoadFromInt8Array",
    kernelInit:       initArray,
    kernelCleanup:    cleanup,
    kernelSimd:       simdAverage,
    kernelNonSimd:    average,
    kernelIterations: 1000
  };

  // Hook up to the harness
  benchmarks.add(new Benchmark(kernelConfig));

  // Benchmark data, initialization and kernel functions
  var a   = new Float32Array(10000);
  var b   = new Int8Array(a.buffer);

  function sanityCheck() {
     return Math.abs(average(1) - simdAverage(1)) < 0.0001;
  }

  function initArray() {
    var j = 0;
    for (var i = 0, l = a.length; i < l; ++i) {
      a[i] = 0.1;
    }
    // Check that the two kernel functions yields the same result, roughly
    // Account for the fact that the simdAverage() is computed using float32
    // precision and the average() is using double precision
    return sanityCheck();
  }

  function cleanup() {
    return sanityCheck();
  }

  function average(n) {
    for (var i = 0; i < n; ++i) {
      var sum = 0.0;
      for (var j = 0, l = a.length; j < l; ++j) {
        sum += a[j];
      }
    }
    return sum/a.length;
  }

  function simdAverage(n) {
    for (var i = 0; i < n; ++i) {
      var sum4 = SIMD.Float32x4.splat(0.0);
      for (var j = 0; j < a.length / 4; ++j) {
        sum4 = SIMD.Float32x4.add(sum4, SIMD.Float32x4.load(b, j << 4));
      }
    }
    return (SIMD.Float32x4.extractLane(sum4, 0) +
        SIMD.Float32x4.extractLane(sum4, 1) +
        SIMD.Float32x4.extractLane(sum4, 2) +
        SIMD.Float32x4.extractLane(sum4, 3)) / a.length;
  }

} ());

load("ebdfbee9d692c3f5771b75c1805d449f.js");
