'use client';

import { ArcElement, ChartData, Chart as ChartJS, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip);

export function Chart({
	data,
}: {
	data: ChartData<'doughnut', number[], unknown>;
}) {
	return (
		<Doughnut
			data={data}
			options={{
				aspectRatio: 2,
				// radius: "50%",
				spacing: 10,
				cutout: '80%',
				layout: { autoPadding: true, padding: 8 },
			}}
			className="aspect-square"
		/>
	);
}
