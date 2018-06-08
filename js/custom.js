
  $(document).ready(function(){
    $('.collapsible').collapsible();
  });
  
  // gráfico de mapa
  var options = {
	legend: {
	  display: false
	},
	responsive: true,
	scale: {
	  ticks: {
		display: false,
		beginAtZero: true,
		max: 10
	  }
	}
  };

  var dados = {
	labels: ["HTML5", "CSS", "JavaScript", "Java EE", "Java SE", "MySQL"],
	datasets: [
	  {
		label: "Minhas habilidades",
		backgroundColor: "rgba(151,187,205,0.2)",
		borderColor: "rgba(151,187,205,1)",
		pointBackgroundColor: "rgba(151,187,205,1)",
		pointBorderColor: "#fff",
		pointHighlightFill: "#fff",
		pointHighlightStroke: "rgba(151,187,205,1)",
		data: [8, 7, 3, 8, 3, 6]
	  }
	]
  };

  var ctx = document.getElementById('minhasHabilidades').getContext('2d');
  var myRadarChart = new Chart(ctx, {
	type: 'radar',
	data: dados,
	options: options
  });
