function emit(name, data) {
  const event = new window.CustomEvent(name);
  event.sendData = data;

  window.dispatchEvent(event);
}

function listen(name, fn) {
  window.addEventListener(name, fn);
}

function unlisten(name, fn) {
  window.removeEventListener(name, fn);
}

export const eventService = {emit, listen, unlisten};