<template>
    
    <div class="flex flex-col items-center">
    <img src="https://www.shutterstock.com/image-vector/cheerful-gray-cat-enjoys-paragliding-260nw-1981432805.jpg" alt="Profilbild" class="w-32 h-32 rounded-full mb-4">

    <h2 class="text-xl font-bold text-gray-800 mb-2">Max Mustermann</h2>

    <div class="flex mb-4 gap-x-2">
      <router-link to="/profil/bearbeiten" class="bg-primary hover:bg-blue-700 text-white rounded-full px-4 py-2">Bearbeiten</router-link>
      <router-link to="/profil/share" class="bg-primary hover:bg-blue-700 text-white rounded-full px-4 py-2">Teilen</router-link>
    </div>
  </div>

    <div class="flex w-full my-8">
        <div class="w-1/3 flex flex-col text-center gap-y-1">
            <span class="text-4xl text-bold">72</span>
            <span class="text-sm font-semibold tracking-wider">Flüge</span>
        </div>
        <div class="w-1/3 flex flex-col text-center gap-y-1">
            <span class="text-4xl text-bold">45:12</span>
            <span class="text-sm font-semibold tracking-wider">Flugzeit</span>
        </div>
        <div class="w-1/3 flex flex-col text-center gap-y-1">
            <span class="text-4xl text-bold">12</span>
            <span class="text-sm font-semibold tracking-wider">Airbuddys</span>
        </div>
    </div>

    <div class="pt-4">
    <RouterLink to="/flights" class="flex my-2">
        <div class="bg-light w-full p-4 rounded-xl">
            <div class="text-black uppercase font-bold text-sm tracking-wider">#122</div>
            <div class="text-2xl font-semibold">Flüge</div>
        </div>
    </RouterLink>
    <RouterLink to="/flights" class="flex my-2">
        <div class="bg-light w-full p-4 rounded-xl">
            <div class="text-black uppercase font-bold text-sm tracking-wider">#15</div>
            <div class="text-2xl font-semibold">Airbudys</div>
        </div>
    </RouterLink>
    </div>



</template>
