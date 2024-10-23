const splitting = require('./splitting')

describe('splitting', () => {
  test('single word', () => {
    expect(splitting('ok')).toEqual('<span aria-label="ok"><span aria-hidden="true" style="--split-char: 0">o</span><span aria-hidden="true" style="--split-char: 1">k</span></span>')
  })

  test('multiple words', () => {
    expect(splitting('ok dude')).toEqual('<span aria-label="ok dude"><span aria-hidden="true" style="--split-char: 0">o</span><span aria-hidden="true" style="--split-char: 1">k</span><span aria-hidden="true" style="--split-char: 2"> </span><span aria-hidden="true" style="--split-char: 3">d</span><span aria-hidden="true" style="--split-char: 4">u</span><span aria-hidden="true" style="--split-char: 5">d</span><span aria-hidden="true" style="--split-char: 6">e</span></span>')
  })

  test('multiple words with punctuation', () => {
    expect(splitting('ok, dude')).toEqual('<span aria-label="ok, dude"><span aria-hidden="true" style="--split-char: 0">o</span><span aria-hidden="true" style="--split-char: 1">k</span><span aria-hidden="true" style="--split-char: 2">,</span><span aria-hidden="true" style="--split-char: 3"> </span><span aria-hidden="true" style="--split-char: 4">d</span><span aria-hidden="true" style="--split-char: 5">u</span><span aria-hidden="true" style="--split-char: 6">d</span><span aria-hidden="true" style="--split-char: 7">e</span></span>')
  })
})
