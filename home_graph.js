const ctx = document.getElementById('pie-chart').getContext('2d');
const chart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['Present', 'Absent'],
    datasets: [{
      label: 'Attendance',
      data: [85, 15], // Example: 85% Present, 15% Absent
      backgroundColor: [
        '#024950',  // Color for 'Present'
        'red'     // Color for 'Absent'
      ],
      hoverBackgroundColor: [
        'lightgreen', // Hover color for 'Present'
        'pink'       // Hover color for 'Absent'
      ]
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,  // Allows the chart to resize properly
    plugins: {
      tooltip: {  // Correct tooltip configuration for Chart.js v3+
        callbacks: {
          label: function(tooltipItem) {
            const data = tooltipItem.chart.data; // Access the chart data
            const label = data.labels[tooltipItem.dataIndex]; // Get the label
            const value = data.datasets[0].data[tooltipItem.dataIndex]; // Get the value
            return `${label}: ${value}%`; // Display the label with percentage
          }
        }
      }
    }
  }
});
