const collections = new Map();

export function readCollection(name) {
  if (!collections.has(name)) {
    collections.set(name, fetch('./data/' + name + '.json' + (name === 'projects' ? '?v=canva4' : '')).then(async response => {
      if (!response.ok) throw new Error('Data portofolio tidak tersedia.');
      return { data: await response.json() };
    }));
  }
  return collections.get(name);
}

let commentDatabase;
function openComments() {
  if (!commentDatabase) {
    commentDatabase = new Promise((resolve, reject) => {
      const request = indexedDB.open('portfolio-local-comments', 1);
      request.onupgradeneeded = () => request.result.createObjectStore('comments', { keyPath: 'id' });
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }
  return commentDatabase;
}

export async function comments() {
  const db = await openComments();
  return new Promise((resolve, reject) => {
    const request = db.transaction('comments').objectStore('comments').getAll();
    request.onsuccess = () => resolve({ data: request.result.sort((a, b) => b.created_at.localeCompare(a.created_at)) });
    request.onerror = () => reject(request.error);
  });
}

export function profilePhoto(file) {
  if (!file) return null;
  if (!file.type.startsWith('image/') || file.size > 5 * 1024 * 1024) {
    throw new Error('Pilih gambar berukuran maksimal 5 MB.');
  }
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

export async function addComment(user_name, content, profile_image) {
  const db = await openComments();
  const comment = { id: crypto.randomUUID(), user_name, content, profile_image, created_at: new Date().toISOString(), is_pinned: false };
  return new Promise((resolve, reject) => {
    const transaction = db.transaction('comments', 'readwrite');
    transaction.objectStore('comments').add(comment);
    transaction.oncomplete = () => resolve(comment);
    transaction.onabort = () => reject(transaction.error || new Error('Komentar gagal disimpan.'));
  });
}

export async function sendContactMessage(fields) {
  const response = await fetch('https://formsubmit.co/ajax/dedy.seti21@gmail.com', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ name: fields.name.trim(), email: fields.email.trim(), message: fields.message.trim(), _subject: 'Pesan dari portofolio Dedy Setiawan' })
  });
  const result = await response.json();
  if (response.ok && (result.success === true || result.success === 'true')) return;
  if (/activat/i.test(result.message || '')) throw new Error('Formulir sedang menunggu aktivasi. Kamu bisa menghubungi Dedy melalui Gmail di bagian Find Me.');
  throw new Error('Pesan belum dapat dikirim. Coba lagi atau gunakan Gmail di bagian Find Me.');
}
