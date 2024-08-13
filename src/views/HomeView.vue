<template>
  <div id="battlePane">
    <div id="playerContainer">
      <img class="characterSprite" :src="playerUrl">
    </div>
    <div id="enemyContainer">
      <img class="characterSprite" :src="enemyUrl">
    </div>
  </div>
  <div id="dataPane">
    <div id="points"></div>
  </div>
</template>

<script setup lang="ts">
import playerUrl from '@/assets/characters/player.png'
import enemyUrl from '@/assets/characters/enemy.png'
</script>

<style>
#battlePane {
  display: flex;
  justify-content: space-between;
}

.characterSprite {
  width: 128px;
  height: 128px;
}
</style>