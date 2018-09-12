function createCompareFn (spy) {
  return {
    compare: msg => {
      console.log(msg)
    }
  }
}

beforeEach(() => {
  jasmine.addMatchers({
    toHaveBeenWarned: () => createCompareFn(console.error)
  })
})