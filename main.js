const btnToggle = document.querySelectorAll('.btn-toggle')

btnToggle.forEach(btn =>
{
    btn.addEventListener('click', () => btn.classList.toggle('active'))
})
