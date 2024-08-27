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

