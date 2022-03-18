# nvidia-gpu-info

This package is meant for real-time Nvidia GPU monitoring using nvidia-smi. Code used was extracted from a pupular npm package [systeminformation](https://github.com/sebhildebrandt/systeminformation).

The original package (as of version 5.x.x) checks attached displays, spawning over 10 short-lived threads which causes the memory usage to spike by up to 300MB and the CPU to be heavily impacted while allocating memory.

# Usage:
```typescript
const nSmi = require('nvidia-smi-info');
nSmi.getDeviceInfo()
    .then(console.log)
    .catch(console.error);

// Output:
[
  {
    driverVersion: '472.47',
    subDeviceId: '0x37751458',
    name: 'NVIDIA GeForce GTX 1060 6GB',
    pciBus: '00000000:07:00.0',
    fanSpeed: 45,
    memoryTotal: 6144,
    memoryUsed: 1473,
    memoryFree: 4671,
    utilizationGpu: 3,
    utilizationMemory: 15,
    temperatureGpu: 40,
    temperatureMemory: null,
    powerDraw: 12.66,
    powerLimit: 180,
    clockCore: 607,
    clockMemory: 405
  }, ...
]
```
