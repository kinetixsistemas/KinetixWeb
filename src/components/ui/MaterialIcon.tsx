const iconCodepoints: Record<string, number> = {
  add: 0xe145,
  add_circle: 0xe147,
  battery_5_bar: 0xebd4,
  call: 0xe0b0,
  check_circle: 0xe86c,
  close: 0xe5cd,
  code: 0xe86f,
  done_all: 0xe877,
  expand_more: 0xe5cf,
  facebook: 0xf234,
  hub: 0xe9f4,
  inventory_2: 0xe1a1,
  medical_services: 0xf109,
  music_note: 0xe405,
  photo_camera: 0xe412,
  sell: 0xf05b,
  send: 0xe163,
  signal_cellular_alt: 0xe202,
  smart_toy: 0xf06c,
  star: 0xe838,
  videocam: 0xe04b,
  web: 0xe051,
  work: 0xe8f9,
};

interface MaterialIconProps {
  name: string;
  className?: string;
}

export default function MaterialIcon({ name, className = '' }: MaterialIconProps) {
  const codepoint = iconCodepoints[name];
  if (!codepoint) return null;

  return (
    <span aria-hidden="true" className={`material-icon ${className}`.trim()}>
      {String.fromCodePoint(codepoint)}
    </span>
  );
}
