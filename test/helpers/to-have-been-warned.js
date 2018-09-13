let asserted

function createCompareFn (spy) {
  const hasWarned = msg => {
    var count = spy.calls.count()
    var args
    while (count--) {
      args = spy.calls.argsFor(count)
      if (args.some(containsMsg)) {
        return true
      }
    }

    function containsMsg (arg) {
      return arg.toString().indexOf(msg) > -1
    }
  }
  return {
    compare: msg => {
      asserted = asserted.concat(msg)
      var warned = Array.isArray(msg)
        ? msg.some(hasWarned)
        : hasWarned(msg)
      return {
        pass: warned,
      }
    }
  }
}

beforeEach(() => {
  asserted = []
  spyOn(console, 'warn')
  spyOn(console, 'error')
  jasmine.addMatchers({
    toHaveBeenWarned: () => createCompareFn(console.error)
  })
})