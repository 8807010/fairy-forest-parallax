window.addEventListener('scroll', e => {
  document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`)
  // document.body.style.cssText += `--scrollTop: ${this.scrollY}px`
});


