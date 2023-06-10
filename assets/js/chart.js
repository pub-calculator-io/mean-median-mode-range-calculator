'use strict'

let switchTheme = null;

import("./assets/js/lib/chartjs/chart.js").then((e) => {
	let Chart = e.Chart
	let registerables = e.registerables
	Chart.register(...registerables)

	const theme = localStorage.getItem('theme') !== 'system' ? localStorage.getItem('theme') : window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
	const colors = {
		light: {
			purple: '#A78BFA',
			yellow: '#FBBF24',
			sky: '#7DD3FC',
			blue: '#1D4ED8',
			textColor: '#6B7280',
			yellowGradientStart: 'rgba(250, 219, 139, 0.33)',
			purpleGradientStart: 'rgba(104, 56, 248, 0.16)',
			skyGradientStart: 'rgba(56, 187, 248, 0.16)',
			tealGradientStart: 'rgba(56, 248, 222, 0.16)',
			yellowGradientStop: 'rgba(250, 219, 139, 0)',
			purpleGradientStop: 'rgba(104, 56, 248, 0)',
			gridColor: '#DBEAFE',
			tooltipBackground: '#fff',
			fractionColor: '#EDE9FE',
		},
		dark: {
			purple: '#7C3AED',
			yellow: '#D97706',
			sky: '#0284C7',
			blue: '#101E47',
			textColor: '#fff',
			yellowGradientStart: 'rgba(146, 123, 67, 0.23)',
			purpleGradientStart: 'rgba(78, 55, 144, 0.11)',
			skyGradientStart: 'rgba(56, 187, 248, 0.16)',
			tealGradientStart: 'rgba(56, 248, 222, 0.16)',
			yellowGradientStop: 'rgba(250, 219, 139, 0)',
			purpleGradientStop: 'rgba(104, 56, 248, 0)',
			gridColor: '#162B64',
			tooltipBackground: '#1C3782',
			fractionColor: '#41467D',
		},
	};
	let ctx = document.getElementById('chartC76').getContext('2d');

	let tooltip = {
		enabled: false,
		external: function (context) {
			let tooltipEl = document.getElementById('chartjs-tooltip');
			if (!tooltipEl) {
				tooltipEl = document.createElement('div');
				tooltipEl.classList.add('chart-tooltip')
				tooltipEl.id = 'chartjs-tooltip';
				tooltipEl.innerHTML = '<table></table>';
				document.body.appendChild(tooltipEl);
			}

			const tooltipModel = context.tooltip;
			if (tooltipModel.opacity === 0) {
				tooltipEl.style.opacity = 0;
				return;
			}

			tooltipEl.classList.remove('above', 'below', 'no-transform');
			if (tooltipModel.yAlign) {
				tooltipEl.classList.add(tooltipModel.yAlign);
			} else {
				tooltipEl.classList.add('no-transform');
			}

			function getBody(bodyItem) {
				return bodyItem.lines;
			}

			if (tooltipModel.body) {
				const bodyLines = tooltipModel.body.map(getBody);

				let innerHtml = '<tbody>';
				innerHtml += '<tr><td class="chart-tooltip__text">' + bodyLines + '</td></tr>';
				innerHtml += '</tbody>';

				let tableRoot = tooltipEl.querySelector('table');
				tableRoot.innerHTML = innerHtml;
			}

			const position = context.chart.canvas.getBoundingClientRect();

			tooltipEl.style.opacity = "1";
			tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX - tooltipEl.clientWidth / 2 + 'px';
			tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY - tooltipEl.clientHeight - 11 + 'px';
		},
	};

	const dataCharts = {
		labels: [48, 43, 38, 32, 15, 12, 38, 15, 21, 25],
		datasets: [
			{
				data: [48, 43, 38, 32, 15, 12, 38, 15, 21, 25],
				barThickness: window.innerWidth < 1024 ? 24 : 56,
				max: 5,
				type: 'bar',
				order: 1,
				pointHoverBackgroundColor: '#FFFFFF',
				pointHoverBorderWidth: 2,
				pointHoverRadius: 6,
				pointHoverBorderColor: '#5045E5',
				borderRadius: {
					topLeft: 4,
					topRight: 4,
				},
				stacked: true,
				backgroundColor: colors[theme].sky,
			},
		],
	};

	let chart = new Chart(document.getElementById('chartC76'), {
		data: dataCharts,
		options: {
			stepSize: 1,
			response: true,
			elements: {
				point: {
					radius: 0,
				},
			},
			plugins: {
				legend: {
					display: false,
				},
				tooltip: tooltip,
			},
			interaction: {
				mode: 'index',
				intersect: false,
			},
			scales: {
				y: {
					max: 50,
					grid: {
						tickLength: 0,
						color: colors[theme].gridColor,
					},
					ticks: {
						display: false,
						stepSize: 10,
					},
					border: {
						color: colors[theme].gridColor,
					},
				},
				x: {
					border: {
						color: colors[theme].gridColor,
					},
					ticks: {
						display: false,
						color: colors[theme].gridColor,
						stepSize: 1,
					},
					grid: {
						tickLength: 0,
						color: colors[theme].gridColor,
					},
				},
			},
		},
	});

	switchTheme = function(theme) {
		let y = chart.config.options.scales.y
		let x = chart.config.options.scales.x
		let data = chart.config.data
		y.grid.color = colors[theme].gridColor;
		y.border.color = colors[theme].gridColor;
		x.border.color = colors[theme].gridColor;
		x.grid.color = colors[theme].gridColor;
		x.ticks.color = colors[theme].gridColor;
		data.datasets[0].backgroundColor = colors[theme].sky;
		chart.update()
	}

	window.changeChartData = function(values) {
		chart.data.datasets[0].data = values
		chart.data.labels = values
		chart.update()
	}

})
