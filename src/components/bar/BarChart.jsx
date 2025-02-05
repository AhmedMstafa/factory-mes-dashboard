import { ResponsiveBar } from '@nivo/bar';

export default function BarChart({ data }) {
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
      margin={{ top: 30, right: 10, bottom: 50, left: 10 }}
      padding={0.4}
      valueScale={{ type: 'linear' }}
      indexScale={{ type: 'band', round: false }}
      colors={{ scheme: 'nivo' }}
      axisTop={null}
      axisRight={null}
      axisBottom={null}
      axisLeft={null}
      enableGridY={false}
      enableLabel={false}
      labelTextColor={{
        from: 'color',
        modifiers: [
          [
            'darker',
            // @ts-ignore
            '0',
          ],
        ],
      }}
      barAriaLabel={(e) =>
        e.id + ': ' + e.formattedValue + ' in country: ' + e.indexValue
      }
    />
  );
}
