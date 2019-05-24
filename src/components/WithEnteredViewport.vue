<template>
  <div>
    <slot :entered="entered"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      entered: false
    }
  },
  mounted() {
    const observer = new IntersectionObserver(([entry], observer) => {
      if (entry.intersectionRatio > 0) {
        this.entered = true
        observer.disconnect()
      }
    })

    observer.observe(this.$el)
  }
}
</script>
