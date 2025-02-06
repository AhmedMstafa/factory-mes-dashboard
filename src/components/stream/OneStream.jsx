import { ResponsiveStream } from '@nivo/stream';

export default function OneStream({ data }) {
  return (
    <ResponsiveStream
      data={data}
      keys={['Raoul', 'Josiane', 'Marcel', 'René', 'Paul', 'Jacques']}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        // @ts-ignore
        orient: 'bottom',
        tickSize: 0,
        tickPadding: 10,
        tickRotation: 0,
        legend: '',
        legendOffset: -60,
        truncateTickAt: 0,
      }}
      axisLeft={{
        // @ts-ignore
        orient: 'left',
        tickSize: 0,
        tickPadding: 10,
        tickRotation: 0,
        legend: '',
        legendOffset: -60,
        truncateTickAt: 0,
      }}
      offsetType="none"
      colors={{ scheme: 'nivo' }}
      fillOpacity={0}
      borderWidth={5}
      borderColor="black"
      defs={[
        {
          id: 'dots',
          type: 'patternDots',
          background: 'inherit',
          color: '#2c998f',
          size: 4,
          padding: 2,
          stagger: true,
        },
        {
          id: 'squares',
          type: 'patternSquares',
          background: 'inherit',
          color: '#e4c912',
          size: 6,
          padding: 2,
          stagger: true,
        },
      ]}
      fill={[
        {
          match: {
            id: 'Paul',
          },
          id: 'dots',
        },
        {
          match: {
            id: 'Marcel',
          },
          id: 'squares',
        },
      ]}
      enableDots={true}
      dotSize={10}
      dotColor={{ from: 'color' }}
      dotBorderColor={{ theme: 'background' }}
      legends={[
        {
          anchor: 'bottom-right',
          direction: 'column',
          translateX: 100,
          itemWidth: 80,
          itemHeight: 20,
          itemTextColor: '#999999',
          symbolSize: 12,
          symbolShape: 'circle',
          effects: [
            {
              on: 'hover',
              style: {
                itemTextColor: '#000000',
              },
            },
          ],
        },
      ]}
    />
  );
}
