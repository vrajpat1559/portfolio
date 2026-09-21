// =============================================================================
// projects.js — the ONLY file you need to edit to update the portfolio.
//
// To add a project: copy one of the objects in PROJECTS, paste it anywhere in
// the array, and fill it in. The page sorts by start date automatically.
// Dates are "YYYY-MM-DD". Leave `end` as null for ongoing work.
// status: "in-progress" | "completed" | "planned"
// =============================================================================

const PROFILE = {
  name: "Vraj Patel",
  title: "Computer Engineering @ UIC",
  role: "RTL design & verification",          // small status pill in the nav
  headline: ["Computer Engineering", "at UIC."],  // second part is rendered in italic serif
  tagline: "My focus is RTL design and design verification: writing SystemVerilog, checking behavior against reference models, and learning through FPGA hardware.",
  bio: "My name is Vraj Patel and I'm a computer engineering student at UIC. Most of my time goes into RTL design and verification: writing SystemVerilog, building testbenches that check my designs against reference models, and bringing them up on real FPGA hardware to see them work.",
  location: "Chicago, IL",
  email: "vrajpat1559@outlook.com",
  links: [
    { label: "GitHub", url: "https://github.com/vrajpat1559" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/vraj-patel-afs" },
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
    tech: ["SystemVerilog", "Quartus Prime", "Questa", "Cyclone 10 LP", "Git"],
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
    title: "AI Accelerator Simulator + Systolic Array RTL",
    start: "2026-08-30",
    end: null,
    status: "in-progress",
    featured: true,
    summary:
      "Two-person project: a Python simulator that predicts tokens/sec for TPU-style accelerator designs, validated against a weight-stationary systolic array I'm building in SystemVerilog.",
    description:
      "I own the hardware side (CE) while my partner builds the cycle-approximate simulator (CS). The RTL is a weight-stationary systolic array in the style of the Google TPU: each processing element parks one weight, passes activations to the right and partial sums down, and the Python model and the Verilog must agree on both the matmul results and the tick counts for identical workloads. Building bottom-up — MAC, then a processing element, then a 2x2 array, then a parameterized NxN array — with a self-checking testbench at every step.",
    tech: ["SystemVerilog", "Quartus Prime", "Questa", "Python", "Git"],
    tags: ["FPGA", "RTL", "Accelerator", "Verification"],
    highlights: [
      "Signed, parameterized combinational MAC (psum_out = psum_in + act * weight) with no per-PE accumulator, matching the weight-stationary dataflow",
      "Self-checking testbench against the shared 2x2 hand-traced example (outputs 26, 33, 28, 22), sign combinations, and 8-bit corner cases",
      "Phase 0 complete: TPU (Jouppi et al., ISCA 2017), Eyeriss dataflow taxonomy, SCALE-Sim",
    ],
    milestones: [
      { date: "2026-08-30", text: "Repo created with partner; roadmap, workflow guide, decision log" },
      { date: "2026-09-15", text: "Read the TPU and Eyeriss papers; Phase 0 (learn) marked complete" },
      { date: "2026-09-15", text: "Quartus project set up; combinational MAC unit + self-checking testbench merged (PR #6)" },
      { date: "2026-09-16", text: "MAC testbench run in Icarus Verilog: 17/17 checks passing (2x2 hand trace, sign cases, 8-bit corners)" },
      { date: "2026-09-16", text: "Phase 1 started: Python simulator skeleton for array config, workload shapes, and cycle model, with unit tests" },
    ],
    links: [
      { label: "GitHub", url: "https://github.com/vrajpat1559/AI-Hardware-Accelerator" },
    ],
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
