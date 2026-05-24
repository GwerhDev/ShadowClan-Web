import type { Directive, DirectiveBinding } from 'vue';

interface AnimateOptions {
  effect?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'fade' | 'zoom';
  delay?: number;
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target as HTMLElement;
      const delay = Number(el.dataset.animateDelay ?? 0);
      setTimeout(() => el.classList.add('animate-visible'), delay);
      observer.unobserve(el);
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

export const vAnimate: Directive = {
  mounted(el: HTMLElement, binding: DirectiveBinding<AnimateOptions | string>) {
    const options: AnimateOptions =
      typeof binding.value === 'string' ? { effect: binding.value as AnimateOptions['effect'] }
      : (binding.value ?? {});

    const effect = options.effect ?? 'fade-up';
    if (options.delay) el.dataset.animateDelay = String(options.delay);

    el.classList.add('animate-base', `animate-${effect}`);
    observer.observe(el);
  },
  unmounted(el: HTMLElement) {
    observer.unobserve(el);
  },
};
