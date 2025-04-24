
document.addEventListener('DOMContentLoaded', function () {
  const input = document.getElementById('searchInput');
  const resultsContainer = document.getElementById('searchResults');
  const countContainer = document.getElementById('resultsCount');
  const noResults = document.getElementById('noResults');

  const renderResults = (filtered) => {
    resultsContainer.innerHTML = '';
    countContainer.style.display = 'block';
    noResults.style.display = 'none';

    if (filtered.length === 0) {
      countContainer.innerText = '';
      noResults.style.display = 'block';
      return;
    }

    countContainer.innerText = `${filtered.length} result${filtered.length !== 1 ? 's' : ''} found`;

    filtered.forEach(item => {
      const card = document.createElement('div');
      card.className = 'card animate';
      card.innerHTML = `
        <a href="${item.href}">
          <div class="card-img"><img src="${item.img}" alt="${item.title}"></div>
          <div class="card-content">
            <h3>${item.title}</h3>
            <p>${item.type === 'recipe' ? 'Recipe' : 'Article'}</p>
          </div>
        </a>
      `;
      resultsContainer.appendChild(card);
    });
  };

  input.addEventListener('input', () => {
    const keyword = input.value.trim().toLowerCase();
    if (!keyword) {
      resultsContainer.innerHTML = '';
      countContainer.style.display = 'none';
      noResults.style.display = 'none';
      return;
    }

    const filtered = searchData.filter(item => item.title.toLowerCase().includes(keyword));
    renderResults(filtered);
  });
});
