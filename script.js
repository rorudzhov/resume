
const printButton = document.getElementById('printButton');
const header = document.getElementById('header');

// Hide header when click "Print"
printButton.addEventListener("click", function () {
    header.style.display = 'none'
    window.print()
})

// Show header after print
window.addEventListener('afterprint', function() {
    header.style.display = 'flex'
});
