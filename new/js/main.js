// リニューアル案: 統計数字のカウントアップ（プログレッシブエンハンスメント）
// JS無効環境でも .num には最終値がそのまま表示されるため、機能・情報は損なわれない。
document.addEventListener('DOMContentLoaded', function () {
  var nums = document.querySelectorAll('[data-count-to]');
  if (!nums.length || !('IntersectionObserver' in window)) return;

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      var el = entry.target;
      var target = parseFloat(el.getAttribute('data-count-to'));
      var unitEl = el.querySelector('.unit');
      var unitHTML = unitEl ? unitEl.outerHTML : '';
      var duration = 900;
      var start = performance.now();

      function frame(now) {
        var progress = Math.min((now - start) / duration, 1);
        var value = Math.round(target * progress);
        el.innerHTML = value + unitHTML;
        if (progress < 1) requestAnimationFrame(frame);
      }
      requestAnimationFrame(frame);
      observer.unobserve(el);
    });
  }, { threshold: 0.4 });

  nums.forEach(function (el) { observer.observe(el); });
});
