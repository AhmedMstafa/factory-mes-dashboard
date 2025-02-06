import { ResponsiveStream } from '@nivo/stream';

export default function LineStream({ data }) {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <ResponsiveStream
        data={data}
        keys={['activity']}
        margin={{ top: 10, right: 50, bottom: 70, left: 50 }}
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
        theme={{
          axis: {
            ticks: {
              line: {
                stroke: '#B2BEC39B',
              },
              text: {
                fill: '#B2BEC39B',
              },
            },
            domain: {
              line: {
                stroke: '#B2BEC39B',
              },
            },
          },
        }}
        offsetType="none"
        fillOpacity={0}
        borderWidth={5}
        borderColor="#457B9D"
        dotPosition={'end'}
        enableDots={true}
        dotSize={10}
        dotColor="#457B9D"
      />
    </div>
  );
}
