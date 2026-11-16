// Desktop browsers have no phone dialer: show the number instead of a dead link.
(function () {
  var btn = document.getElementById('callBtn');
  var isTouch = window.matchMedia('(pointer: coarse)').matches;
  if (!btn || isTouch) return;
  btn.addEventListener('click', function () {
    btn.setAttribute('title', 'Call +91 77439 57789');
  });
})();
