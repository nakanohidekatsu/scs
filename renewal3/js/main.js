// 現行サイト再現: ヒーローカルーセル（外部ライブラリ非依存）
document.addEventListener('DOMContentLoaded', function () {
  var slides = document.querySelectorAll('.rc-hero .slide');
  var dots = document.querySelectorAll('.rc-hero-dots span');
  if (!slides.length) return;
  var current = 0;

  function show(index) {
    slides.forEach(function (s, i) { s.classList.toggle('active', i === index); });
    dots.forEach(function (d, i) { d.classList.toggle('active', i === index); });
    current = index;
  }

  dots.forEach(function (dot, i) {
    dot.addEventListener('click', function () { show(i); });
  });

  setInterval(function () {
    show((current + 1) % slides.length);
  }, 3500);
});
