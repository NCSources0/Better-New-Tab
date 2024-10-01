location.hash = '';

const searchBar = document.getElementsByClassName('searchBar')[0],
  search = location.search.split('=')[1],
  iframe = document.getElementsByClassName('page')[0];

iframe.setAttribute('src', 'search.html#gsc.q=');
if (location.search != '') {
  iframe.setAttribute('src', 'search.html#gsc.q=' + search);
}

// There is probably a better way to do this...
searchBar.value = "";
for (let i = 0; i < search.length; i++) {
  if (search[i] == "+" || search[i] == "%") {
    if (search[i] == "+") {
      searchBar.value += ' ';
    } else {
      searchBar.value += decodeURIComponent(search[i] + search[i + 1] + search[i + 2]);
      i += 2;
    }
  } else {
    searchBar.value += search[i];
  }
}

setInterval(() => {
  document.querySelectorAll('a').forEach((a) => {
    a.setAttribute('target', '_blank');
  })
}, 0)
