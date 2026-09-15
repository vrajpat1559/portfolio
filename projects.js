// =============================================================================
// projects.js — the ONLY file you need to edit to update the portfolio.
//
// To add a project: copy one of the objects in PROJECTS, paste it anywhere in
// the array, and fill it in. The page sorts by start date automatically.
// Dates are "YYYY-MM-DD". Leave `end` as null for ongoing work.
// status: "in-progress" | "completed" | "planned"
// =============================================================================

const PROFILE = {
  name: "Vraj",                       // TODO: add your full name
  title: "Electrical / Computer Engineering Student",
  tagline: "I build digital hardware from the ground up — RTL, testbenches, and the tooling around them.",
  location: "",                       // e.g. "Toronto, ON"
  email: "heyitsvraj@gmail.com",
  links: [
    // { label: "GitHub",   url: "https://github.com/YOUR_USERNAME" },
    // { label: "LinkedIn", url: "https://linkedin.com/in/YOUR_HANDLE" },
    // { label: "Resume",   url: "resume.pdf" },
  ],
};

const PROJECTS = [
  {
    id: "uart",
    repo: "vrajpat1559/UART",              // GitHub repo the sync routine watches
    title: "UART Serial Core (TX + RX)",
    start: "2026-08-21",
    end: null,
    status: "in-progress",            // wrapping up
    featured: true,
    summary:
      "A parameterized 8N1 UART transmitter and receiver written in SystemVerilog, verified with self-checking testbenches and a full-duplex loopback simulation.",
    description:
      "Built from scratch targeting an Altera Cyclone 10 LP in Quartus Prime. The transmitter is a four-state FSM (idle, start, data, stop) with a cycle-accurate baud counter. The receiver adds a two-flop input synchronizer, oversampling with mid-bit sampling, start-bit detection, and a bit counter. Each block was written and reviewed one at a time, then tied together in a loopback bench that drives TX into RX and checks every byte.",
    tech: ["SystemVerilog", "Quartus Prime 25.1", "Questa", "Cyclone 10 LP", "Git"],
    tags: ["FPGA", "RTL", "Verification"],
    highlights: [
      "Parameterized CLK_FREQ_HZ / BAUD_RATE so the same core drops into any board",
      "Self-checking testbenches with pass/fail counters — no manual waveform inspection",
      "Metastability-safe RX input via a two-stage synchronizer",
      "Full-duplex loopback bench exercising TX and RX together",
    ],
    milestones: [
      { date: "2026-08-21", text: "Quartus project scaffolded, target device chosen" },
      { date: "2026-08-25", text: "Transmitter FSM complete with self-checking testbench" },
      { date: "2026-08-27", text: "Receiver: synchronizer, oversampler, FSM, bit counter" },
      { date: "2026-08-28", text: "RX synchronizer finalized and reviewed" },
      { date: "2026-09-01", text: "Receiver testbench passing" },
      { date: "2026-09-13", text: "Full-duplex loopback testbench passing; TX bench moved to non-blocking assignments" },
      { date: "2026-09-14", text: "README written; Quartus project file cleaned up (top-level entity, stale source entries)" },
    ],
    links: [
      { label: "GitHub", url: "https://github.com/vrajpat1559/UART" },
    ],
  },

  {
    id: "hw-accelerator",
    repo: "vrajpat1559/AI-Hardware-Accelerator",
    title: "Hardware Accelerator",
    start: "2026-09-01",
    end: null,
    status: "in-progress",
    featured: true,
    summary:
      "A custom hardware accelerator in RTL — offloading a compute-heavy kernel from software into dedicated logic.",
    description:
      "TODO: describe the workload being accelerated (matrix multiply, convolution, FFT, hashing…), the datapath architecture, how data is fed in, and how it compares to the software baseline. Add throughput / latency / resource numbers once measured.",
    tech: ["SystemVerilog", "Quartus Prime", "Questa"],
    tags: ["FPGA", "RTL", "Accelerator"],
    highlights: [
      "TODO: one concrete result (e.g. 'Nx speedup over C baseline at M MHz')",
    ],
    milestones: [
      { date: "2026-09-01", text: "Architecture and datapath design started" },
    ],
    links: [],
  },

  {
    id: "riscv-cpu",
    repo: null,                            // set when the repo exists
    title: "Pipelined RISC-V CPU",
    start: "2026-09-15",
    end: null,
    status: "planned",
    featured: true,
    summary:
      "A 5-stage pipelined RV32I processor in SystemVerilog with hazard detection, forwarding, and a self-checking instruction testbench.",
    description:
      "Classic IF / ID / EX / MEM / WB pipeline implementing the RV32I base integer ISA. Planned: data-hazard forwarding, load-use stall detection, branch resolution with flush, and a memory-mapped UART (reusing the UART core) for console output. Verified with assembled test programs checked against a reference model.",
    tech: ["SystemVerilog", "RISC-V RV32I", "Quartus Prime", "Questa"],
    tags: ["FPGA", "RTL", "CPU"],
    highlights: [],
    milestones: [
      { date: "2026-09-15", text: "Kickoff — ISA study and pipeline block diagram" },
    ],
    links: [],
  },

  {
    id: "uvm",
    repo: null,
    title: "UVM Verification Environment",
    start: "2026-12-15",
    end: null,
    status: "planned",
    featured: true,
    summary:
      "Winter project: a full UVM testbench (agents, scoreboard, coverage) for one of my RTL designs.",
    description:
      "An industry-style verification environment using the Universal Verification Methodology — sequencer / driver / monitor agents, a scoreboard with a reference model, constrained-random stimulus, and functional coverage. Target DUT is the UART core or the RISC-V CPU.",
    tech: ["SystemVerilog", "UVM", "Questa"],
    tags: ["Verification", "UVM"],
    highlights: [],
    milestones: [
      { date: "2026-12-15", text: "Planned start" },
    ],
    links: [],
  },

  // ---------------------------------------------------------------------------
  // Template — copy, uncomment, and fill in:
  // ---------------------------------------------------------------------------
  // {
  //   id: "my-next-project",
  //   title: "Project Name",
  //   start: "2027-01-01",
  //   end: null,
  //   status: "planned",
  //   featured: false,
  //   summary: "One or two sentences for the card.",
  //   description: "Longer write-up shown when the card is expanded.",
  //   tech: ["Verilog", "Python"],
  //   tags: ["FPGA"],
  //   highlights: ["Something concrete you're proud of"],
  //   milestones: [ { date: "2027-01-01", text: "Kickoff" } ],
  //   links: [ { label: "GitHub", url: "https://github.com/..." } ],
  // },
];

// Optional: group your skills for the Skills section. Anything in `tech` above
// that isn't listed here shows up under "Other".
const SKILL_GROUPS = {
  "Languages":     ["SystemVerilog", "Verilog", "C", "Python"],
  "Tools":         ["Quartus Prime", "Questa", "Git"],
  "Hardware":      ["Cyclone 10 LP", "RISC-V RV32I"],
  "Methodologies": ["UVM"],
};
