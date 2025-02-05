import { ResponsiveStream } from '@nivo/stream';

export default function Stream({ data, color, border, show }) {
  return (
    <ResponsiveStream
      data={data}
      keys={[show]}
      margin={{ top: 10, right: -5, bottom: -5, left: -5 }}
      axisTop={null}
      axisRight={null}
      axisBottom={null}
      axisLeft={null}
      enableGridY={false}
      offsetType="none"
      colors={color}
      borderWidth={5}
      borderColor={border}
    />
  );
}
