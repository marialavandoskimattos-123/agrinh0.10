document.addEventListener('DOMContentLoaded', () => {
    const themeBtn = document.getElementById('theme-toggle');
    const actionBtn = document.getElementById('btn-action');
    const nameInput = document.getElementById('user-name');
    const welcomeH1 = document.getElementById('welcome-msg');

    // 1. Troca de Tema (Modo Escuro / Claro)
    themeBtn.onclick = () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        themeBtn.textContent = isDark ? "☀️ Modo Claro" : "🌓 Alternar Tema";
        
        // Efeito Visual: Altera a cor do botão via JS
        themeBtn.style.border = isDark ? "2px solid #8bc34a" : "2px solid #2d5a27";
    };

    // 2. Manipulação de Variáveis e DOM para Personalização
    actionBtn.onclick = () => {
        const usuario = nameInput.value.trim();
        
        if (usuario !== "") {
            // Processa a informação e altera o HTML
            welcomeH1.innerHTML = `Olá, ${usuario}!<br>O Agro é Nossa Força.`;
            welcomeH1.style.color = "var(--primary)";
            
            // Feedback visual: remove o formulário de entrada
            document.querySelector('.input-area').innerHTML = 
                "<p>✅ Você está conectado ao futuro sustentável.</p>";
        } else {
            alert("Por favor, sinta-se em casa e digite seu nome!");
        }
    };
});
