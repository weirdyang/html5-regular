document.addEventListener('DOMContentLoaded', () => {

  const $darkMode = document.getElementById('darkmode-toggle') as HTMLElement;
  console.log($darkMode);
  const setDarkPreference = (setting: boolean): void => {
    localStorage.setItem('dark', setting.toString())
    if (setting) {
      $darkMode.innerText = "☀️";
      document.body.setAttribute('data-theme', 'dark')
    } else {
      $darkMode.innerText = "🌙";
      document.body.removeAttribute('data-theme')
    }
  }
  const checkPreference = () => {
    let setting = localStorage.getItem('dark');
    if (Boolean(setting)) {
      setDarkPreference(setting === 'true');
    } else {
      const isDarkPreferred =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;

      setDarkPreference(isDarkPreferred);
    }
  }

  checkPreference();

  $darkMode.addEventListener('click', () => {
    const preference = localStorage.getItem('dark');
    console.log('click');
    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    preference === 'true'
      ? setDarkPreference(false)
      : setDarkPreference(true)

  });
});