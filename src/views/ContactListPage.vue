<template>
  <demo-layout>
    <div class="p-8">
      <fetch-json url="/contacts.json" v-slot="{ loading, response }">
        <div v-if="loading" class="rounded p-6 shadow bg-white max-w-md mx-auto">
          <div >Loading...</div>
        </div>
        <contact-list v-else :contacts="response"></contact-list>
      </fetch-json>
    </div>
  </demo-layout>
</template>

<script>
import ContactList from "@/components/ContactList.vue"
import DemoLayout from "@/components/DemoLayout.vue"
import FetchJson from "@/components/FetchJson.js"

export default {
  name: "ContactListPage",
  components: {
    ContactList,
    DemoLayout,
    FetchJson,
  },
}
</script>
