// Sistema de alternância de tema
class ThemeManager {
  constructor() {
    this.themeToggle = document.getElementById('theme-toggle');
    this.currentTheme = localStorage.getItem('theme') || 'light';
    this.init();
  }

  init() {
    this.setTheme(this.currentTheme);
    this.themeToggle.addEventListener('click', () => this.toggleTheme());
  }

  setTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      this.themeToggle.textContent = '☀️';
    } else {
      document.documentElement.removeAttribute('data-theme');
      this.themeToggle.textContent = '🌙';
    }
    this.currentTheme = theme;
    localStorage.setItem('theme', theme);
  }

  toggleTheme() {
    const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }
}

// Inicializar quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
  new ThemeManager();
});