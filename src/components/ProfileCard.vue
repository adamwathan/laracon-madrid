<template>
  <div class="profile-card">
    <img class="profile-card-image" src="/img/toby.jpg" alt="">
    <div class="profile-card-meta">
      <div class="mb-4">
        <p class="text-xl leading-tight">
          Toby Flenderson
        </p>
        <p class="text-sm leading-tight text-gray-600">Human Resources at Dunder Mifflin</p>
      </div>
      <div>
        <button class="btn btn-sm btn-pill btn-indigo-outline">Message</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {},
}
</script>

<style>
.profile-card {
  @apply bg-white shadow-lg rounded-lg overflow-hidden px-6 py-4;
}
.profile-card-image {
  @apply block rounded-full mx-auto mb-4;
  height: 5rem;
}
.profile-card-meta {
  @apply text-center;
}
.profile-card--horizontal {
  @apply flex items-center;
}
.profile-card--horizontal .profile-card-image {
  @apply ml-0 mr-4 mb-0 h-24;
}
.profile-card--horizontal .profile-card-meta {
  @apply text-left;
}

.btn {
  @apply leading-tight inline-flex items-center font-bold px-4 py-2 rounded;
}
.btn-sm {
  @apply text-sm px-4 py-1;
}
.btn-indigo-outline {
  @apply border border-indigo-600 text-indigo-600;
}
.btn-indigo-outline:hover {
  @apply bg-indigo-600 text-white;
}
.btn-pill {
  @apply leading-normal rounded-full;
}
</style>
