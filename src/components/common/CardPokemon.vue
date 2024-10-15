<script setup>
const props = defineProps({
  pokemon: {
    type: Object,
  },
});
</script>
<template>
  <div id="card" class="w-40 shadow-sm my-2">
    <div id="card-header" class="relative overflow-hidden">
      <img :src="pokemon.images.small" alt="" class="w-40" />
      <div class="absolute w-40 p-2 bg-violet-800 top-0 -left-10 -rotate-45">
        <h6 class="font-semibold text-xs ml-6 text-white">
          {{ pokemon.rarity ? pokemon.rarity : "Undefined" }}
        </h6>
      </div>
    </div>
    <div class="card-body">
      <h6 class="text-center font-bold text-sm">{{ pokemon.name }}</h6>
      <button class="bg-blue-500 text-xs text-white p-1 w-full">Detail</button>
    </div>
  </div>
</template>
