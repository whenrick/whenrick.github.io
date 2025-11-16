document.addEventListener('DOMContentLoaded', () => {

    const btnMobile = document.getElementById('menu-toggle');
    const menuLista = document.getElementById('menu-links');

    if (btnMobile && menuLista) {
        function toggleMenu(event) {
            if (event.type === 'touchstart') event.preventDefault();
            
            menuLista.classList.toggle('ativo');
            btnMobile.classList.toggle('ativo');

            const menuAtivo = menuLista.classList.contains('ativo');
            btnMobile.setAttribute('aria-expanded', menuAtivo);
            
            if (menuAtivo) {
                btnMobile.setAttribute('aria-label', 'Fechar Menu');
            } else {
                btnMobile.setAttribute('aria-label', 'Abrir Menu');
            }
        }

        btnMobile.addEventListener('click', toggleMenu);
        btnMobile.addEventListener('touchstart', toggleMenu);
    } 

    
    const formCadastro = document.querySelector('.formulario-cadastro');
    const mensagemSucesso = document.querySelector('#mensagem-sucesso');
    const tituloPagina = document.querySelector('.titulo-pagina');
    const introForm = document.querySelector('.formulario-introducao');
    const linkVoltar = document.querySelector('.link-voltar');

    if (formCadastro && mensagemSucesso) {
        
        formCadastro.addEventListener('submit', function(event) {
            event.preventDefault(); 
            
            formCadastro.classList.add('escondido');
            if (tituloPagina) tituloPagina.classList.add('escondido');
            if (introForm) introForm.classList.add('escondido');
            if (linkVoltar) linkVoltar.classList.add('escondido');
            
            mensagemSucesso.classList.remove('escondido');
        });
    } 

    const inputCPF = document.getElementById('cpf');
    const inputCEP = document.getElementById('cep');
    const inputTelefone = document.getElementById('telefone');

    if (inputCPF) {
        inputCPF.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, ''); 
            if (value.length > 11) value = value.slice(0, 11); 

            value = value.replace(/(\d{3})(\d)/, '$1.$2');
            value = value.replace(/(\d{3})(\d)/, '$1.$2');
            value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
            
            e.target.value = value;
        });
    }

    if (inputCEP) {
        inputCEP.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, ''); 
            if (value.length > 8) value = value.slice(0, 8); 

            value = value.replace(/(\d{5})(\d)/, '$1-$2');
            
            e.target.value = value;
        });
    }

    if (inputTelefone) {
        inputTelefone.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, ''); 
            if (value.length > 11) value = value.slice(0, 11); 

            if (value.length > 10) {
                value = value.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
            } else if (value.length > 6) {
                value = value.replace(/^(\d{2})(\d{4})(\d{0,4})$/, '($1) $2-$3');
            } else if (value.length > 2) {
                value = value.replace(/^(\d{2})(\d{0,5})$/, '($1) $2');
            } else if (value.length > 0) {
                value = value.replace(/^(\d{0,2})$/, '($1');
            }
            
            e.target.value = value;
        });
    }

});