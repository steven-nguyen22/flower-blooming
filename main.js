onload = () => {
  // Remove loading state after 1 s so all CSS animations start together
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);

  const cardPage = document.getElementById('card-page');
  const card     = document.getElementById('birthday-card');
  let   cardPageShown = false;

  // First click anywhere on the flowers page → fade in the card page
  document.addEventListener('click', () => {
    if (!cardPageShown) {
      cardPage.classList.add('visible');
      cardPageShown = true;
    }
  });

  // Click the closed card → open it (book-style: cover swings to the left)
  card.addEventListener('click', (e) => {
    e.stopPropagation(); // don't re-trigger the document listener
    card.classList.add('is-open');
  });
};
