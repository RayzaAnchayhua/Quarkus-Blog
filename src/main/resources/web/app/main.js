
function applySavedTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.className = savedTheme;
    updateButtonIcon(savedTheme);
    updateGiscusTheme(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.body.classList.contains('light') ? 'light' : 'dark';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.body.className = newTheme;
    localStorage.setItem('theme', newTheme);
    updateButtonIcon(newTheme);
    updateGiscusTheme(newTheme);
}

function updateButtonIcon(theme) {
    const button = document.getElementsByClassName('change-mode')[0];
    button.innerHTML = theme === 'dark'
        ? '<i class="fa-solid fa-sun"></i>'
        : '<i class="fa-solid fa-moon"></i>';
}

function sendMessageToGiscus(message) {
    const iframe = document.querySelector('iframe.giscus-frame');
    if (!iframe) return;
    iframe.contentWindow.postMessage({ giscus: message }, 'https://giscus.app');
}

function updateGiscusTheme(theme) {
    sendMessageToGiscus({
        setConfig: {
            theme: theme
        }
    });
}

window.toggleTheme = toggleTheme;

applySavedTheme();