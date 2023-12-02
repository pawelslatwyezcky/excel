import { storage } from '../core/utils';

export function toHTML(key) {
  const data = storage(key);
  const id = key.split(':')[1];
  return `
  <li class="db__record">
    <a href="#excel/${id}">${data.titleState}</a>
    <strong>${new Date(Date(id)).toLocaleDateString()} ${new Date(
    Date(id)
  ).toLocaleTimeString()}</strong>

  </li>`;
}

function getAllKeys() {
  const keys = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.includes('excel')) keys.push(key);
  }
  return keys;
}

export function createRecordsTable() {
  const keys = getAllKeys();
  console.log(keys);
  if (!keys.length) {
    return `<p>No tables created yet.</p>`;
  }
  return `
    <div class="db__list-header">
          <span>Title</span>
          <span>Created at</span>
        </div>
        <ul class="db__list">
            ${keys.map(toHTML).join('')}
        </ul>
    `;
}
