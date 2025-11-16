# 🌳 Planting the Future - Plataforma Web para ONG

![License: MIT](https://img.shields.io/badge/License-MIT-green.svg) ![Status](https://img.shields.io/badge/Status-Concluído-blue)

Este é um projeto web completo desenvolvido para a ONG fictícia "Planting the Future". O seu objetivo é servir como uma plataforma digital profissional para a organização divulgar os seus projetos de reflorestamento, engajar voluntários e captar recursos.

O projeto foi construído como parte da avaliação da disciplina, integrando conceitos de HTML5, CSS3 avançado e JavaScript para criar uma experiência de utilizador moderna, responsiva e interativa.

---

## 🏛️ Objetivos do Projeto (Requisitos Cumpridos)

Este projeto foi desenvolvido para aplicar de forma integrada os fundamentos de desenvolvimento web front-end. Os seguintes objetivos foram cumpridos:

* **HTML5 Semântico:** As 3 páginas (`index.html`, `projetos.html`, `cadastro.html`) utilizam uma estrutura semântica robusta (com `<nav>`, `<main>`, `<section>`, `<article>`, `<address>` e `<footer>`). A hierarquia de títulos (`<h1>` a `<h3>`) foi aplicada de forma lógica e consistente, garantindo a acessibilidade.
* **CSS3 Avançado e Responsivo:** Foi implementado um sistema de design "dark mode" utilizando Variáveis CSS (`:root`) para uma gestão de cores centralizada. O leiaute é **Mobile First**, adaptando-se a ecrãs de todos os tamanhos através de `Media Queries`.
* **JavaScript Dinâmico e Interativo:**
    * **Menu Hamburger:** Navegação totalmente responsiva que se transforma em menu hamburger em dispositivos móveis, controlado via JavaScript (Manipulação do DOM e `classList.toggle`).
    * **Formulário Interativo:** Máscaras de input (RegEx) foram aplicadas nos campos de CPF, CEP e Telefone, melhorando a experiência do utilizador (`UX`).
    * **Feedback ao Utilizador:** Uma mensagem de sucesso é exibida dinamicamente após o envio do formulário, escondendo os campos e confirmando a ação.
* **Ferramentas e Acessibilidade:**
    * **Validação Nativa:** O formulário de cadastro utiliza atributos HTML5 (`required`, `pattern`, `minlength`, `type="email"`) para validação nativa.
    * **Acessibilidade (A11y):** O menu hamburger utiliza atributos `aria-label` e `aria-expanded` para ser acessível a leitores de ecrã.
* **Documentação Profissional:** Este `README.md` documenta a estrutura, propósito e execução do projeto.

---

## 🚀 Funcionalidades Principais

* **Página Inicial:** Apresenta a ONG, o seu propósito (com um *Hero Banner*) e informações de contacto.
* **Página de Projetos:** Detalha os projetos em andamento (`<article>`), informa os métodos de doação e inclui uma chamada para ação (CTA) para o voluntariado.
* **Página de Cadastro:** Contém um formulário complexo agrupado por `<fieldset>`, com validação nativa e máscaras de input em JavaScript.

---

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Para a estrutura e semântica do conteúdo.
* **CSS3:** Para estilização, leiaute responsivo (Flexbox) e sistema de design (Variáveis CSS).
* **JavaScript (ES6+):** Para manipulação do DOM, eventos (`addEventListener`) e interatividade.
* **Git:** Para o controlo de versão do projeto.

---

## ▶️ Como Executar o Projeto

Este projeto é composto apenas por ficheiros estáticos (HTML, CSS, JS) e **não requer um servidor** ou instalação de dependências.

1.  Clone este repositório (ou faça o download dos ficheiros).
2.  Navegue até à pasta do projeto.
3.  Abra o ficheiro `index.html` diretamente no seu navegador de preferência.

---

## 👨‍💻 Autor

Desenvolvido por **Willian**.
