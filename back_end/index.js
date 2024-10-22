document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');

        // Verifica se o href é uma âncora ou uma URL diferente
        if (href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        } else {
            // Se não for uma âncora, permite a navegação normal
            window.location.href = href;
        }
    });
});
