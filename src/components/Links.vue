<template>
  <div class="p-6 text-center">
    <router-link to="/" class="inline-block no-underline font-bold" :class="$route.path === '/' ? 'text-white' : 'text-gray-500'">Home</router-link>
    <span class="text-gray-700 mx-3">|</span>
    <router-link to="/contact-list" class="inline-block no-underline font-bold" :class="$route.path === '/contact-list' ? 'text-white' : 'text-gray-500'">Contact List</router-link>
    <span class="text-gray-700 mx-3">|</span>
    <router-link to="/profile-card" class="inline-block no-underline font-bold" :class="$route.path === '/profile-card' ? 'text-white' : 'text-gray-500'">Profile Card</router-link>
    <span class="text-gray-700 mx-3">|</span>
    <router-link to="/landing-page" class="inline-block no-underline font-bold" :class="$route.path === '/landing-page' ? 'text-white' : 'text-gray-500'">Landing Page</router-link>
  </div>
</template>
