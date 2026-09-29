/**
 * Ultra-lightweight Scroll Reveal Observer
 * Triggers subtle CSS transitions once when elements enter the viewport.
 * Uses native IntersectionObserver with zero continuous scroll calculations.
 */
export function initScrollReveal() {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    // Fallback: reveal all elements immediately
    document.querySelectorAll('.reveal-item').forEach((el) => {
      el.classList.add('is-revealed');
    });
    document.querySelectorAll('[data-motion-section]').forEach((el) => {
      el.classList.add('is-motion-visible');
    });
    document.querySelectorAll('[data-scroll-reveal]').forEach((el) => {
      el.classList.add('is-scroll-revealed');
    });
    return () => {};
  }

  // Check user motion preferences
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    document.querySelectorAll('.reveal-item').forEach((el) => {
      el.classList.add('is-revealed');
    });
    return () => {};
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.target.hasAttribute('data-motion-section')) {
          entry.target.classList.toggle('is-motion-visible', entry.isIntersecting);
        }

        if (entry.isIntersecting) {
          if (entry.target.hasAttribute('data-scroll-reveal')) {
            entry.target.classList.add('is-scroll-revealed');
            observer.unobserve(entry.target);
          }

          if (entry.target.matches('.reveal-item')) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        }
      });
    },
    {
      threshold: 0.08,
      rootMargin: '0px 0px -30px 0px',
    }
  );

  const root = document.getElementById('root') ?? document.body;
  const observed = new WeakSet<Element>();
  const observeNode = (node: Node) => {
    if (!(node instanceof Element)) return;

    const candidates: Element[] = [];
    if (node.matches('.reveal-item:not(.is-revealed), [data-motion-section], [data-scroll-reveal]:not(.is-scroll-revealed)')) candidates.push(node);
    candidates.push(...node.querySelectorAll('.reveal-item:not(.is-revealed), [data-motion-section], [data-scroll-reveal]:not(.is-scroll-revealed)'));

    candidates.forEach((element) => {
      if (!observed.has(element)) {
        observed.add(element);
        observer.observe(element);
      }
    });
  };

  observeNode(root);

  // Watch only newly mounted subtrees (for lazy sections) instead of rescanning the page.
  const mutationObserver = new MutationObserver((records) => {
    records.forEach((record) => record.addedNodes.forEach(observeNode));
  });

  mutationObserver.observe(root, { childList: true, subtree: true });

  return () => {
    observer.disconnect();
    mutationObserver.disconnect();
  };
}
