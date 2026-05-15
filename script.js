(function() {
  const toggleButton = document.getElementById('theme-toggle');
  
  if (!toggleButton) return;
  
  // Функция обновления текста кнопки
  function updateButtonText(theme) {
    if (theme === 'dark') {
      toggleButton.textContent = 'Светлая тема';
    } else {
      toggleButton.textContent = 'Тёмная тема';
    }
  }
  
  // Функция установки темы
  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    updateButtonText(theme);
  }
  
  // Функция переключения темы
  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  }
  
  // Инициализация текста кнопки
  const currentTheme = document.documentElement.getAttribute('data-theme');
  updateButtonText(currentTheme || 'light');
  
  // Добавляем обработчик события
  toggleButton.addEventListener('click', toggleTheme);
  
  // Следим за изменениями системной темы (опционально)
  const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  
  darkModeMediaQuery.addEventListener('change', (e) => {
    // Меняем тему только если пользователь явно не сохранял выбор
    const savedTheme = localStorage.getItem('theme');
    if (!savedTheme) {
      const newTheme = e.matches ? 'dark' : 'light';
      setTheme(newTheme);
    }
  });
})();