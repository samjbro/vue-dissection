import Vue from 'vue'

describe('Options el', () => {
  fit('basic usage', () => {
    const el = document.createElement('div')
    el.innerHTML = '<span>{{ message }}</span>'
    const vm = new Vue({
      el,
      data: { message: 'hello world' }
    })
    expect(vm.$el.tagName).toBe('DIV')
    expect(vm.$el.textContent).toBe(vm.message)
  })
})