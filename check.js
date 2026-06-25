function getRegisterUrl() {
    if (window.SITE_CONFIG && typeof window.SITE_CONFIG.getRegisterUrl === 'function') {
        return window.SITE_CONFIG.getRegisterUrl();
    }
    return 'https://mm88e9e06qc.mm2188.com/register.html';
}

function goToRegister() {
    window.location.href = getRegisterUrl();
}

function checklinkvn() { goToRegister(); }
function checklinkbr() { goToRegister(); }
function checklinkph() { goToRegister(); }
function checklinkabc() { goToRegister(); }

function initRegisterLinks() {
    var url = getRegisterUrl();
    var btn = document.getElementById('btnRegister');
    if (btn) btn.href = url;

    var links = document.querySelectorAll('.register-link');
    for (var i = 0; i < links.length; i++) {
        links[i].href = url;
    }
}
