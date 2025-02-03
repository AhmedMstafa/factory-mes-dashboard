import { ResponsivePie } from '@nivo/pie';

export default function PieChart({ data }) {
  return (
    <ResponsivePie
      data={data}
      margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
      innerRadius={0.85}
      activeOuterRadiusOffset={10}
      borderColor={{
        from: 'color',
        // @ts-ignore
        modifiers: [['darker', '0.2']],
      }}
      enableArcLinkLabels={false}
      arcLinkLabelsSkipAngle={15}
      arcLinkLabelsTextOffset={11}
      arcLinkLabelsTextColor="#333333"
      arcLinkLabelsDiagonalLength={10}
      arcLinkLabelsStraightLength={12}
      arcLinkLabelsThickness={4}
      arcLinkLabelsColor={{ from: 'color' }}
      enableArcLabels={false}
      arcLabelsTextColor={{
        from: 'color',
        // @ts-ignore
        modifiers: [['darker', '1.7']],
      }}
      colors={data.map((datum) => datum.color)}
    />
  );
}
