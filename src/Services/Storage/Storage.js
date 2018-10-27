function setToStore(key, data) {
  sessionStorage.setItem(key, JSON.stringify(data));
}

function getFromStore(key) {
  return JSON.parse(sessionStorage.getItem(key));
}

export const store = {setToStore, getFromStore};