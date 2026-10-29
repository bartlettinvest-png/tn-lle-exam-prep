/* Simple inline-SVG teaching diagrams. Keys are referenced from lessons in app.js. */
window.DIAGRAMS = {
  faultpath: {
    caption: "Fault-clearing path: a ground fault returns on the EGC to the source — not through the earth — so the breaker trips fast (250.4).",
    svg: `<svg viewBox="0 0 640 240" role="img" aria-label="Fault clearing path diagram">
      <rect x="20" y="80" width="130" height="80" rx="8" fill="#dce9f7" stroke="#2f81f7" stroke-width="2"/>
      <text x="85" y="112" text-anchor="middle" font-size="14" font-weight="700">PANEL</text>
      <text x="85" y="132" text-anchor="middle" font-size="11">source / breaker</text>
      <rect x="470" y="80" width="150" height="80" rx="8" fill="#fde8e8" stroke="#d33" stroke-width="2"/>
      <text x="545" y="112" text-anchor="middle" font-size="14" font-weight="700">METAL CASE</text>
      <text x="545" y="132" text-anchor="middle" font-size="11">fault touches case</text>
      <line x1="150" y1="100" x2="470" y2="100" stroke="#d33" stroke-width="3"/>
      <text x="310" y="90" text-anchor="middle" font-size="12" fill="#d33" font-weight="700">hot conductor — fault current out</text>
      <line x1="470" y1="145" x2="150" y2="145" stroke="#2e7d32" stroke-width="3"/>
      <text x="310" y="168" text-anchor="middle" font-size="12" fill="#2e7d32" font-weight="700">EGC (green/bare) — low-impedance return path</text>
      <path d="M545 160 L545 205 L85 205 L85 160" fill="none" stroke="#bbb" stroke-width="2" stroke-dasharray="5 4"/>
      <text x="310" y="228" text-anchor="middle" font-size="11" fill="#888">earth path = high impedance — breaker may NOT trip (why we bond, not just ground)</text>
    </svg>`
  },
  boxfill: {
    caption: "Box-fill worked count (314.16): every conductor, device, and clamp takes volume allowances.",
    svg: `<svg viewBox="0 0 640 250" role="img" aria-label="Box fill count diagram">
      <rect x="30" y="40" width="180" height="160" rx="8" fill="#eef3f8" stroke="#2f81f7" stroke-width="2"/>
      <text x="120" y="66" text-anchor="middle" font-size="13" font-weight="700">DEVICE BOX</text>
      <text x="120" y="92" text-anchor="middle" font-size="12">6 × 12 AWG conductors = 6</text>
      <text x="120" y="114" text-anchor="middle" font-size="12">all EGCs together = 1</text>
      <text x="120" y="136" text-anchor="middle" font-size="12">1 device yoke = 2</text>
      <text x="120" y="158" text-anchor="middle" font-size="12">internal clamps = 1</text>
      <text x="120" y="186" text-anchor="middle" font-size="13" font-weight="700">Total = 10 allowances</text>
      <text x="360" y="80" font-size="14">10 × 2.25 cu in (12 AWG, Table 314.16(B))</text>
      <text x="360" y="110" font-size="14">= <tspan font-weight="700">22.5 cu in</tspan> minimum box volume</text>
      <text x="360" y="150" font-size="12" fill="#555">Pigtails that start and end in the box: no allowance.</text>
      <text x="360" y="172" font-size="12" fill="#555">Each conductor that passes through unbroken: counts once.</text>
    </svg>`
  },
  ohmslaw: {
    caption: "Ohm's law wheel: E = I × R · I = E ÷ R · R = E ÷ I · P = E × I (Ugly's).",
    svg: `<svg viewBox="0 0 300 300" role="img" aria-label="Ohm's law wheel">
      <circle cx="150" cy="150" r="130" fill="#eef3f8" stroke="#2f81f7" stroke-width="2"/>
      <circle cx="150" cy="150" r="62" fill="#fff" stroke="#2f81f7" stroke-width="2"/>
      <line x1="150" y1="20" x2="150" y2="280" stroke="#2f81f7"/>
      <line x1="20" y1="150" x2="280" y2="150" stroke="#2f81f7"/>
      <text x="150" y="158" text-anchor="middle" font-size="17" font-weight="700">P = E·I</text>
      <text x="105" y="75" text-anchor="middle" font-size="15" font-weight="700">E</text>
      <text x="105" y="95" text-anchor="middle" font-size="11">volts = I × R</text>
      <text x="195" y="75" text-anchor="middle" font-size="15" font-weight="700">I</text>
      <text x="195" y="95" text-anchor="middle" font-size="11">amps = E ÷ R</text>
      <text x="105" y="225" text-anchor="middle" font-size="15" font-weight="700">R</text>
      <text x="105" y="245" text-anchor="middle" font-size="11">ohms = E ÷ I</text>
      <text x="195" y="225" text-anchor="middle" font-size="15" font-weight="700">P</text>
      <text x="195" y="245" text-anchor="middle" font-size="11">watts = E × I</text>
    </svg>`
  },
  burial: {
    caption: "Burial depths (Table 300.5, selected): UF cable 24 in. · PVC 18 in. · RMC/IMC 6 in. · GFCI-protected residential branch circuit 12 in.",
    svg: `<svg viewBox="0 0 640 260" role="img" aria-label="Burial depth diagram">
      <rect x="0" y="30" width="640" height="18" fill="#8a6d3b"/>
      <text x="8" y="24" font-size="12" font-weight="700">GRADE (ground surface)</text>
      <g font-size="12">
        <rect x="60" y="48" width="16" height="120" fill="#666"/><text x="45" y="185">RMC 6"</text>
        <rect x="210" y="48" width="16" height="150" fill="#f5b942"/><text x="180" y="215">GFCI branch 12"</text>
        <rect x="360" y="48" width="16" height="180" fill="#2f81f7"/><text x="345" y="245">PVC 18"</text>
        <rect x="510" y="48" width="16" height="205" fill="#3fb950"/><text x="490" y="258">UF cable 24"</text>
      </g>
      <g stroke="#ccc"><line x1="0" y1="108" x2="640" y2="108" stroke-dasharray="4 4"/><line x1="0" y1="168" x2="640" y2="168" stroke-dasharray="4 4"/><line x1="0" y1="228" x2="640" y2="228" stroke-dasharray="4 4"/></g>
    </svg>`
  },
  service: {
    caption: "Service entrance: utility → meter → service disconnect → panel. The grounding electrode system bonds at the service (250.24).",
    svg: `<svg viewBox="0 0 660 220" role="img" aria-label="Service entrance diagram">
      <g font-size="12" text-anchor="middle">
        <rect x="10" y="70" width="110" height="70" rx="8" fill="#eef3f8" stroke="#2f81f7" stroke-width="2"/>
        <text x="65" y="100" font-weight="700">UTILITY</text><text x="65" y="118">service drop/lateral</text>
        <rect x="170" y="70" width="100" height="70" rx="8" fill="#eef3f8" stroke="#2f81f7" stroke-width="2"/>
        <text x="220" y="100" font-weight="700">METER</text><text x="220" y="118">utility owned</text>
        <rect x="320" y="70" width="130" height="70" rx="8" fill="#fdf3d7" stroke="#f5b942" stroke-width="2"/>
        <text x="385" y="100" font-weight="700">DISCONNECT</text><text x="385" y="118">service equipment</text>
        <rect x="500" y="70" width="140" height="70" rx="8" fill="#e8f5e9" stroke="#3fb950" stroke-width="2"/>
        <text x="570" y="100" font-weight="700">PANEL</text><text x="570" y="118">branch circuits</text>
      </g>
      <g stroke="#333" stroke-width="2"><line x1="120" y1="105" x2="170" y2="105"/><line x1="270" y1="105" x2="320" y2="105"/><line x1="450" y1="105" x2="500" y2="105"/></g>
      <line x1="385" y1="140" x2="385" y2="185" stroke="#2e7d32" stroke-width="3"/>
      <text x="385" y="203" text-anchor="middle" font-size="12" fill="#2e7d32" font-weight="700">GEC → ground rods / water pipe (electrode system)</text>
      <text x="385" y="45" text-anchor="middle" font-size="12" fill="#555">Neutral bonds to ground ONLY at the service disconnect — never downstream.</text>
    </svg>`
  }
};
