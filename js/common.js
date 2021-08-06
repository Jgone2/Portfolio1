// 검색창
const search = document.querySelector('.search');
const searchInput = document.querySelector('input');

search.addEventListener('click', function() {
  searchInput.focus();
});

searchInput.addEventListener('focus', function() {
  search.classList.add('focused');
  searchInput.setAttribute('placeholder', '검색어를 입력해주세요.');
});
searchInput.addEventListener('blur', function() {
  search.classList.remove('focused');
  searchInput.setAttribute('placeholder', ' ');
});

// footer Copyright 년도
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();