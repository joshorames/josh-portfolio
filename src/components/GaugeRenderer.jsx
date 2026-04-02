export default function GaugeRenderer({
  config,
  isSelected,
  onSelect,
  onDragStart,
}) {
  const viewBox = 300;
  const cx = 150;
  const cy = 150;

  const clamped = Math.max(config.min, Math.min(config.max, config.value));
  const ratio =
    config.max === config.min
      ? 0
      : (clamped - config.min) / (config.max - config.min);
  const angle = config.startAngle + ratio * (config.endAngle - config.startAngle);

  const polarToCartesian = (r, angleDeg) => {
    const rad = (angleDeg * Math.PI) / 180;
    return {
      x: cx + r * Math.cos(rad),
      y: cy + r * Math.sin(rad),
    };
  };

  const labelAngles = Array.from({ length: config.majorLabels.length }, (_, i) => {
    return (
      config.startAngle +
      ((i + 1) / config.majorLabels.length) *
        (config.endAngle - config.startAngle)
    );
  });

  const majorTicks = labelAngles.map((tickAngle, i) => {
    const outer = polarToCartesian(config.majorTickOuter, tickAngle);
    const inner = polarToCartesian(config.majorTickInner, tickAngle);
    const textPoint = polarToCartesian(config.numberRadius, tickAngle);
    return {
      x1: outer.x,
      y1: outer.y,
      x2: inner.x,
      y2: inner.y,
      tx: textPoint.x,
      ty: textPoint.y,
      label: config.majorLabels[i],
    };
  });

  const minorTicks = Array.from(
    { length: Math.max(config.majorLabels.length - 1, 0) },
    (_, i) => {
      const tickAngle =
        config.startAngle +
        ((i + 1.5) / config.majorLabels.length) *
          (config.endAngle - config.startAngle);
      const outer = polarToCartesian(config.minorTickOuter, tickAngle);
      const inner = polarToCartesian(config.minorTickInner, tickAngle);
      return {
        x1: outer.x,
        y1: outer.y,
        x2: inner.x,
        y2: inner.y,
      };
    }
  );

  const needleBaseLeft = polarToCartesian(config.needleWidth, angle - 90);
  const needleBaseRight = polarToCartesian(config.needleWidth, angle + 90);
  const needleTip = polarToCartesian(config.needleLength, angle);
  const needleBack = polarToCartesian(config.needleBackLength, angle + 180);

  const wrapperStyle = {
    position: "absolute",
    left: config.x,
    top: config.y,
    width: 300 * config.scale,
    height: 300 * config.scale,
    zIndex: config.zIndex,
    transform: "translate(-50%, -50%)",
    cursor: "grab",
    userSelect: "none",
  };

  return (
    <div
      style={wrapperStyle}
      onPointerDown={(e) => onDragStart(e, config.id)}
      onClick={(e) => {
        e.stopPropagation();
        onSelect(config.id);
      }}
      className={`rounded-[28px] transition ${
        isSelected ? "ring-2 ring-cyan-300/80" : ""
      }`}
    >
      <svg
        viewBox="0 0 300 300"
        className="h-full w-full drop-shadow-[0_10px_30px_rgba(0,0,0,0.45)]"
      >
        <circle
          cx={cx}
          cy={cy}
          r={config.radius}
          fill={config.faceColor}
          stroke={config.borderColor}
          strokeWidth="2"
        />

        {majorTicks.map((tick, i) => (
          <line
            key={`major-${config.id}-${i}`}
            x1={tick.x1}
            y1={tick.y1}
            x2={tick.x2}
            y2={tick.y2}
            stroke={config.tickColor}
            strokeWidth={config.majorTickWidth}
            strokeLinecap="square"
          />
        ))}

        {minorTicks.map((tick, i) => (
          <line
            key={`minor-${config.id}-${i}`}
            x1={tick.x1}
            y1={tick.y1}
            x2={tick.x2}
            y2={tick.y2}
            stroke={config.minorTickColor}
            strokeWidth={config.minorTickWidth}
            strokeLinecap="square"
          />
        ))}

        {majorTicks.map((tick, i) => (
          <text
            key={`text-${config.id}-${i}`}
            x={tick.tx}
            y={tick.ty}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize={config.numberFontSize}
            fill={config.textColor}
            fontWeight="800"
          >
            {tick.label}
          </text>
        ))}

        <text
          x={cx}
          y={cy + config.labelOffsetY}
          textAnchor="middle"
          fontSize={config.labelFontSize}
          fill={config.textColor}
          fontWeight="800"
        >
          {config.label}
        </text>

        {config.showOdometer && (
          <g>
            <rect
              x={cx - config.odometerWidth / 2 + config.odometerOffsetX}
              y={cy + config.odometerOffsetY}
              width={config.odometerWidth}
              height={config.odometerHeight}
              fill="#000000"
              stroke="#d1d5db"
              strokeWidth="1"
            />
            <text
              x={cx + config.odometerOffsetX}
              y={cy + config.odometerOffsetY + config.odometerHeight / 2 + 4}
              textAnchor="middle"
              fontSize="11"
              fill="#ffffff"
              fontWeight="800"
              letterSpacing="1.4"
            >
              {config.odometerText}
            </text>
          </g>
        )}

        <text
          x={cx}
          y={cy + config.unitOffsetY}
          textAnchor="middle"
          fontSize={config.unitFontSize}
          fill={config.textColor}
          fontWeight="800"
        >
          {config.unitText}
        </text>

        <polygon
          points={`${needleBack.x},${needleBack.y} ${needleBaseLeft.x},${needleBaseLeft.y} ${needleTip.x},${needleTip.y} ${needleBaseRight.x},${needleBaseRight.y}`}
          fill={config.needleColor}
        />
        <circle cx={cx} cy={cy} r={config.hubRadius} fill={config.hubColor} />
      </svg>
    </div>
  );
}