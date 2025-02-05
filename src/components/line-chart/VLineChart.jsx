import { ResponsiveBar } from '@nivo/bar';

export default function vLineCahrt({ data /* see data tab */ }) {
  return (
    <ResponsiveBar
      data={data}
      keys={[
        'Idle',
        'Cleansing process',
        'Break-down',
        'Speed Loss',
        'Quality Loss',
      ]}
      indexBy="Loss Tree"
      margin={{ top: 30, right: 20, bottom: 70, left: 20 }}
      padding={0.2}
      layout="horizontal"
      valueScale={{ type: 'linear' }}
      indexScale={{ type: 'band', round: true }}
      colors={{ scheme: 'nivo' }}
      defs={[
        {
          id: 'dots',
          type: 'patternDots',
          background: 'inherit',
          color: '#38bcb2',
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: 'lines',
          type: 'patternLines',
          background: 'inherit',
          color: '#eed312',
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        {
          match: {
            id: 'fries',
          },
          id: 'dots',
        },
        {
          match: {
            id: 'sandwich',
          },
          id: 'lines',
        },
      ]}
      borderColor={{
        from: 'color',
        modifiers: [
          [
            'darker',
            // @ts-ignore
            '1.5',
          ],
        ],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={null}
      axisLeft={null}
      enableGridY={false}
      enableLabel={false}
      totalsOffset={14}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: 'color',
        modifiers: [['darker', 1.6]],
      }}
    />
  );
}
