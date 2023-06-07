document.querySelector('#darkmode').addEventListener('click', function(event) {
    document.querySelector('body').classList.toggle('dark');
    var button = document.querySelector('#darkmode');
    if (button.textContent === 'Light Mode') {
      button.textContent = 'Dark Mode';
      document.querySelector('#logo1').src = 'images/googlelogo_light_color_272x92dp.png';
      document.querySelector('#search').src = 'images/search-icon.png';
    } else {
      button.textContent = 'Light Mode';
      document.querySelector('#logo1').src = 'images/googlelogo_color.png';
      document.querySelector('#search').src = 'images/search-icon-dark.png';
    }
  });
