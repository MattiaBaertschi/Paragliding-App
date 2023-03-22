<template>
    <div class="fixed bottom-0 w-full bg-white border-t border-gray-200 z-50">
    <nav class="flex justify-between">
      <router-link to="/home" class="w-1/4 py-3 text-center text-sm font-medium text-gray-500 hover:text-gray-900">
        <i class="fas fa-home"></i>
        <span class="block">Home</span>
      </router-link>
      <router-link to="/search" class="w-1/4 py-3 text-center text-sm font-medium text-gray-500 hover:text-gray-900">
        <i class="fas fa-search"></i>
        <span class="block">Search</span>
      </router-link>
      <router-link to="/map" class="w-1/4 py-3 text-center text-sm font-medium text-gray-500 hover:text-gray-900">
        <i class="fas fa-map"></i>
        <span class="block">Map</span>
      </router-link>
      <router-link to="/user" class="w-1/4 py-3 text-center text-sm font-medium text-gray-500 hover:text-gray-900">
        <i class="fas fa-user"></i>
        <span class="block">User</span>
      </router-link>
    </nav>
  </div>
</template>