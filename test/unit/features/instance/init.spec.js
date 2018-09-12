import Vue from 'vue'

describe('Initialisation', () => {
  it('without new', () => {
    try { Vue() } catch (e) {}
    expect('Vue is a constructor and should be called with the `new` keyword').toHaveBeenWarned()
  })
})