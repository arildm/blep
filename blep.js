/** Blep. */
function blep(r, a) {
  return r ?
      blep(r-1, a)  +
      blep(r-1, !a) +
      blep(r-1, !a) +
      blep(r-1, a)
    : a ? '╱' : '╲'
}

/** Insert newlines to create a square. */
function r(s) {
  return s.replace(new RegExp('.{' + Math.sqrt(s.length) + '}', 'g'), '$&\n')
}

r(blep(4))
