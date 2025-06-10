function validateForm() {
    const isLoginMode = document.getElementById('login-form').style.display !== 'none';

    if (isLoginMode) {
        // 登入模式
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        const emailAlert = document.getElementById('email-alert');
        const passwordAlert = document.getElementById('password-alert');

        let isValid = true;

        emailAlert.style.display = 'none';
        passwordAlert.style.display = 'none';

        if (!email.value) {
            emailAlert.style.display = 'block';
            isValid = false;
        }

        if (password.value.length < 6) {
            passwordAlert.style.display = 'block';
            isValid = false;
        }

        if (isValid) {
            window.location.href = 'https://discord.com/login';
        }
    } else {
        // 註冊模式
        const displayName = document.getElementById('display-name');
        const username = document.getElementById('username');
        const email = document.getElementById('reg-email');
        const password = document.getElementById('reg-password');
        const year = document.getElementById('birth-year');
        const month = document.getElementById('birth-month');
        const day = document.getElementById('birth-day');

        let isValid = true;

        // 重設錯誤（可擴充 alert 顯示）
        // 此範例僅簡單 alert 提示，可加強細部錯誤訊息
        if (!username.value || username.value.trim() === '') {
            isValid = false;
        }

        if (!email.value || !email.value.includes('@')) {
            isValid = false;
        }

        if (password.value.length < 6) {
            isValid = false;
        }

        if (!year.value || !month.value || !day.value) {
            isValid = false;
        }

        if (isValid) {
            window.location.href = 'https://discord.com/login';
        } else {
            alert('請填寫完整且正確的註冊資料');
        }
    }
}

function switchToRegister() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
    document.getElementById('qr-section').style.display = 'none';
    document.querySelector('.login-container').classList.add('register-mode');
    document.querySelector('.form-header h2').textContent = '建立新帳號';
    document.querySelector('.form-header p').textContent = '';
}

function switchToLogin() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('qr-section').style.display = 'flex';
    document.querySelector('.login-container').classList.remove('register-mode');
    document.querySelector('.form-header h2').textContent = '歡迎回來！';
    document.querySelector('.form-header p').textContent = '我們很高興又見到您了!';
}

function handleForgotPassword() {
    const email = document.getElementById('email');
    const emailLabel = document.querySelector('label[for="email"]');
    if (!email.value) {
        emailLabel.innerHTML = '電子郵件或電話號碼 <span style="color:#ed4245;">- <i>這是必填欄位</i></span>';
        emailLabel.classList.add('label-error');
    } else {
        window.location.href = 'https://discord.com/login';
    }
}
document.addEventListener('DOMContentLoaded', () => {
    // 輸入時自動還原 label 樣式
    const email = document.getElementById('email');
    const emailLabel = document.querySelector('label[for="email"]');
    email.addEventListener('input', () => {
        emailLabel.innerHTML = '電子郵件或電話號碼<span style="color: #ed4245;">*</span>';
        emailLabel.classList.remove('label-error');
    });
});

