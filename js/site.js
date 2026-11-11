// Plays the short muted clips only while they are on screen.
// With reduced motion on, clips stay paused and get native controls instead.
(function () {
	var clips = document.querySelectorAll('video[data-inview]');
	if (!clips.length) return;

	var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	if (reduce || !('IntersectionObserver' in window)) {
		clips.forEach(function (v) { v.controls = true; });
		return;
	}

	var io = new IntersectionObserver(function (entries) {
		entries.forEach(function (e) {
			if (e.isIntersecting) {
				var p = e.target.play();
				if (p && p.catch) p.catch(function () { e.target.controls = true; });
			} else {
				e.target.pause();
			}
		});
	}, { threshold: 0.35 });

	clips.forEach(function (v) { io.observe(v); });
})();
