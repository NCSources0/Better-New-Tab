location.hash = '';

const searchBar = document.getElementsByClassName('searchBar')[0],
  search = location.search.split('=')[1],
  iframe = document.getElementsByClassName('page')[0],
  topBar = document.getElementsByClassName('topBar')[0],
  localStoragePopup = document.getElementsByClassName('localStorage')[0];

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
  if (!localStorage.getItem('consent')) {
    localStoragePopup.style.bottom = '0';
  } else {
    localStoragePopup.style.bottom = '';
  }
}, 0)

function bookmark() {
  const name = prompt('Bookmark name:');
}

function ask(what) {
  let promptBG = document.createElement('div'),
    prompt = document.createElement('div'),
    promptInput = document.createElement('input');
  promptBG.setAttribute('class', 'promptBG');
  prompt.setAttribute('class', 'prompt');
  promptInput.setAttribute('class', 'promptInput');
  prompt.innerHTML = `${what}:`;
  prompt.appendChild(promptInput);
  promptBG.appendChild(prompt);
  document.body.appendChild(promptBG);
}