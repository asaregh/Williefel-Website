document.getElementById('performance-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Retrieve form values
    const leadership = parseInt(document.getElementById('leadership').value);
    const creativity = parseInt(document.getElementById('creativity').value);
    const innovation = parseInt(document.getElementById('innovation').value);
    const talent = parseInt(document.getElementById('talent').value);
    const hardwork = parseInt(document.getElementById('hardwork').value);
    const efficiency = parseInt(document.getElementById('efficiency').value);
    const performance = parseInt(document.getElementById('performance').value);
  
    // Display results
    document.getElementById('results-section').style.display = 'block';
  
    // Chart data
    const chartData = {
      labels: ['Leadership', 'Creativity', 'Innovation', 'Talent', 'Hard Work', 'Efficiency', 'Performance'],
      datasets: [{
        label: 'Performance Score',
        data: [leadership, creativity, innovation, talent, hardwork, efficiency, performance],
        backgroundColor: [
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)'
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)'
        ],
        borderWidth: 1
      }]
    };
  
    // Chart options
    const chartOptions = {
      scales: {
        y: {
          beginAtZero: true,
          max: 100
        }
      }
    };
  
    // Create chart
    const ctx = document.getElementById('performanceChart').getContext('2d');
    new Chart(ctx, {
      type: 'bar', // You can change this to 'radar' or 'line' for different infographics
      data: chartData,
      options: chartOptions
    });
  });
  