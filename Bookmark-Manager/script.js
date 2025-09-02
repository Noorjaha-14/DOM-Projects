document.addEventListener('DOMContentLoaded', () => {
  const bookmarkForm = document.getElementById('bookmark-form');
  const bookmarksList = document.getElementById('bookmarks-list');
  const filterButtons = document.querySelectorAll('.filter-btn');

  let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];

  function renderBookmarks(filter = 'All') {
    bookmarksList.innerHTML = '';

    const filtered = filter === 'All' ? bookmarks : bookmarks.filter(b => b.category.toLowerCase() === filter.toLowerCase());

    filtered.forEach((bookmark, index) => {
      const item = document.createElement('div');
      item.className = 'bookmark-item';

      item.innerHTML = `
        <div class="bookmark-info">
          <h3>${bookmark.name}</h3>
          <a href="${bookmark.url}" class="bookmark-link" target="_blank">${bookmark.url}</a>
          <div class="bookmark-category">${bookmark.category}</div>
        </div>
        <button class="delete-btn" data-index="${index}">Delete</button>
      `;

      bookmarksList.appendChild(item);
    });
  }

  bookmarkForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('bookmark-name').value.trim();
    const url = document.getElementById('bookmark-url').value.trim();
    const category = document.getElementById('category').value;

    if (!name || !url || !category) {
      alert('Please fill in all fields.');
      return;
    }

    const newBookmark = { name, url, category };
    bookmarks.push(newBookmark);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

    renderBookmarks();
    bookmarkForm.reset();
  });

  bookmarksList.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-btn')) {
      const index = e.target.getAttribute('data-index');
      bookmarks.splice(index, 1);
      localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
      renderBookmarks();
    }
  });

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      const filter = button.getAttribute('data-filter');
      renderBookmarks(filter);
    });
  });

  renderBookmarks();
});
