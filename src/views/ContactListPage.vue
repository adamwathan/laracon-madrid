<template>
  <demo-layout>
    <div class="p-8">
      <contact-list></contact-list>
    </div>
  </demo-layout>
</template>

<script>
import ContactList from "@/components/ContactList.vue"
import DemoLayout from "@/components/DemoLayout.vue"

export default {
  name: "ContactListPage",
  components: {
    ContactList,
    DemoLayout
  }
}
</script>
