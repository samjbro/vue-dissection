import Vue from 'vue'

describe('Component', () => {
  fit('static', () => {
    const vm = new Vue({
      template: '<test></test>',
      components: {
        test: {
          data () {
            return { a: 123 }
          },
          template: '<span>{{a}}</span>'
        }
      }
    }).$mount()
    expect(vm.$el.tagName).toBe('SPAN')
    expect(vm.$el.innerHTML).toBe('123')
  })
})