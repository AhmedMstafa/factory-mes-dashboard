import { ResponsiveBar } from '@nivo/bar';

export default function LineChart({ data /* see data tab */ }) {
  return (
    <ResponsiveBar
      data={data}
      indexBy="country"
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      padding={0}
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
      borderColor={{
        from: 'color',
        // @ts-ignore
        modifiers: [['darker', '0']],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'country',
        legendPosition: 'middle',
        legendOffset: 32,
        truncateTickAt: 0,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'food',
        legendPosition: 'middle',
        legendOffset: -40,
        truncateTickAt: 0,
      }}
      enableGridY={false}
      enableLabel={false}
      totalsOffset={0}
      labelTextColor={{
        from: 'color',
        // @ts-ignore
        modifiers: [['darker', '0']],
      }}
      labelOffset={-16}
      isInteractive={false}
      role="application"
      ariaLabel="Nivo bar chart demo"
      barAriaLabel={(e) =>
        e.id + ': ' + e.formattedValue + ' in country: ' + e.indexValue
      }
    />
  );
}
