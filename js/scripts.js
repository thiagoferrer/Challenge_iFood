// index.HTML
function toggleMenu(){
    let toggle = document.querySelector('.toggle');
    let navigation = document.querySelector('.navigation');
    let main = document.querySelector('.main');
    toggle.classList.toggle('active');
    navigation.classList.toggle('active');
    main.classList.toggle('active');
}

// grafico Financeiro.html
document.querySelectorAll('.bar').forEach(function(bar) {
    var value = bar.getAttribute('data-value');
    var maxValue = 6000; // Ajuste conforme necessário
    var height = (value / maxValue) * 100;
    bar.style.height = height + '%';
});


// grafico metas.html
function createHalfDoughnutChart(ctx, planejado, realizado) {
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [realizado, planejado - realizado],
                backgroundColor: ['#ea1d2c', '#CCCCCC'],
                hoverBackgroundColor: ['#FF6384', '#EEEEEE'],
                borderWidth: 0
            }],
            labels: ['Realizado', 'Planejado'],
        },
        options: {
            circumference: 180,
            rotation: 270,
            cutout: '70%',
            responsive: true,
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
}

document.addEventListener("DOMContentLoaded", function() {
    createHalfDoughnutChart(document.getElementById('chartDespesas'), 30, 10);
    createHalfDoughnutChart(document.getElementById('chartSaldo'), 70, 50);
    createHalfDoughnutChart(document.getElementById('chartClientes'), 90, 85);
    createHalfDoughnutChart(document.getElementById('chartReceitas'), 80, 60);
    createHalfDoughnutChart(document.getElementById('chartVendas'), 80, 30);
});

