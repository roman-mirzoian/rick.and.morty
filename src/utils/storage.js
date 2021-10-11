export function addToStorage(item) {
  localStorage.setItem(JSON.stringify(item.id), JSON.stringify(item));
}

export function removeFromStorage(id) {
  localStorage.removeItem(JSON.stringify(id));
}

export function getStorageItem(id) {
  const key = localStorage.key(JSON.stringify(id));
  const item = JSON.parse(localStorage.getItem(key));
  return item;
}

export function getStorageData() {
  const local = [];
  for (let i = 0; i < localStorage.length; i++) {
    local.push(getStorageItem(i));
  }
  return local;
}
