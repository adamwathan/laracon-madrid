<template>
  <div class="min-h-screen flex flex-col justify-between bg-gray-800">
    <div>
      <slot></slot>
    </div>
    <links></links>
  </div>
</template>

<script>
import Links from "@/components/Links.vue"

export default {
  components: {
    Links
  }
}
</script>
