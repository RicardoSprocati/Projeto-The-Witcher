document.addEventListener('DOMContentLoaded', function(){
    const abas = document.querySelectorAll('.shows__tabs__button');
    const abasConteudo = document.querySelectorAll('.shows__list');

    const headers = document.querySelectorAll('.faq__question__item__question')

    abas.forEach(function(aba) {
        aba.addEventListener('click', function() {
            abas.forEach(function(t) {
                t.classList.remove('shows__tabs__button--is-active');
            });
            aba.classList.add('shows__tabs__button--is-active');

            abasConteudo.forEach(function(c) {
                c.classList.remove('shows__list--is-active');
            });
            const targetId = aba.getAttribute('data-tab-button');
            const target = document.querySelector(`[data-tab-id="${targetId}"]`);

            if (target) {
                target.classList.add('shows__list--is-active')
            }
        })
    })

    for (let i = 0; i < headers.length; i++) {
        headers[i].addEventListener('click',abreFecha)
    }

    function abreFecha(e) {
        const classe = 'faq__question__item--is-open';

        const elementoPai = e.target.parentNode;

        elementoPai.classList.toggle(classe);
    }
})