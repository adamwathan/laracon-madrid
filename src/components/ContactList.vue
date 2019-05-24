<template>
  <div class="rounded p-6 shadow bg-white max-w-md mx-auto">
    <h1 class="text-2xl font-bold mb-6">Your Contacts</h1>
    <div class="-mb-6">
      <div v-for="contact in contacts" :key="contact.id" class="flex items-center mb-6">
        <img :src="contact.picture.medium" class="h-12 w-12 rounded-full block mr-2" alt="">
        <div>
          <div class="font-bold">
            {{ contact.name.first }} {{ contact.name.last }}
          </div>
          <div class="text-gray-600">
            {{ contact.email }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    props: ['contacts'],
  }
</script>
