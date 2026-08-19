export function TankDiagram() {
  return (
    <div
      className="diagram"
      role="img"
      aria-label="A top-down tank crossing an arena of geometric food shapes"
    >
      <div className="scan-ring scan-ring-one" aria-hidden="true" />
      <div className="scan-ring scan-ring-two" aria-hidden="true" />
      <div className="arena-shape shape-square" aria-hidden="true" />
      <div className="arena-shape shape-triangle" aria-hidden="true" />
      <div className="arena-shape shape-pentagon" aria-hidden="true" />
      <div className="tank" aria-hidden="true">
        <div className="tank-track track-left" />
        <div className="tank-track track-right" />
        <div className="tank-body" />
        <div className="tank-turret" />
        <div className="tank-barrel" />
      </div>
      <span className="diagram-label label-level">LEVEL UP</span>
      <span className="diagram-label label-target">TARGET / FOOD</span>
      <span className="diagram-coordinate">ZONE 7X3 · GRID 119</span>
    </div>
  );
}
