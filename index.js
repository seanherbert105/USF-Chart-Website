const ctx = document.getElementById('chart');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Under 18", "18-64", "65+", "All Ages"],
        datasets: [{
                label: 'Total Population',
                data: ['545173', '1850665', '350550', '2746388'],
                borderWidth: 1
            },
            {
                label: 'Vaccinated Population - 16 September',
                data: ['6', '449', '191', '646'],
                borderWidth: 1
            },
            {
                label: 'Vaccinated Population - 21 October',
                data: ['6073', '94887', '43882', '144842'],
                borderWidth: 1
            },
            {
                label: 'Vaccinated Population - 04 November',
                data: ['8331', '108391', '51125', '167847']
            }
        ]
    },
    options: {
        responsive: true,
        scales: {
            y: {
            beginAtZero: true
            }
        }
    }
});