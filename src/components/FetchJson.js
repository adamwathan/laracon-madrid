export default {
  props: ['url'],
  render(h) {
    return this.$scopedSlots.default({
      loading: this.loading,
      response: this.response
    })
  },
  data() {
    return {
      loading: true,
      response: null,
    }
  },
  created() {
    fetch(this.url)
      .then(response => response.json())
      .then(response => {
        setTimeout(() => {
          this.response = response
          this.loading = false
        }, 500)
      })
  }
}
