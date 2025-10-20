
document.addEventListener('DOMContentLoaded', () => {
  const lb = document.getElementById('lightbox');
  const lbImg = lb.querySelector('img');
  document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('click', () => {
      lbImg.src = img.src;
      lb.style.display = 'flex';
    });
  });
  lb.querySelector('.close').addEventListener('click', () => lb.style.display = 'none');
  lb.addEventListener('click', (e) => { if (e.target === lb) lb.style.display = 'none'; });

  const slides = document.querySelector('.slides');
  const dots = Array.from(document.querySelectorAll('.dot'));
  let idx = 0;
  function show(i) {
    idx = (i + dots.length) % dots.length;
    slides.style.transform = `translateX(-${idx * 100}%)`;
    dots.forEach((d, k) => d.classList.toggle('active', k === idx));
  }
  dots.forEach((d, i) => d.addEventListener('click', () => show(i)));
  setInterval(() => show(idx + 1), 6000);
  show(0);
});
