<template>
  <div id="page">
	<div id="battlePane">
	  <div id="playerContainer" :class="{doBonk: bonkTime}" key="doBonk">
		<img class="characterSprite" :src="playerUrl">
	  </div>
	  <div id="enemyContainer">
		<img class="characterSprite" :src="enemyUrl">
	  </div>
	</div>
	<div id="dataPane">
	  <div id="points">Bonk x{{ pointStore.count }}</div>
	</div>
  </div>
</template>

<script setup lang="ts">
import playerUrl from '@/assets/characters/player.png'
import enemyUrl from '@/assets/characters/enemy.png'
import { ref } from 'vue';
import { usePointsStore } from '@/stores/points';

const pointStore = usePointsStore();

const bonkTime = ref(false);

let myInterval = setInterval(() => {
	bonkTime.value = false;
	setTimeout(() => {
    	bonkTime.value = true;
  	}, 10);
	pointStore.increment();
}, 1000);
</script>

<style>
#page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}

#battlePane {
  display: flex;
  justify-content: space-between;
  width: 512px;
  margin: auto;
}

#dataPane {
	margin: 16px;
}

#points {
	text-align: center;
	font-size: x-large;
}

.characterSprite {
  width: 128px;
  height: 128px;
  image-rendering: crisp-edges;
}

@keyframes bonkAnimation {
	0%, 100% {transform: translate(0px, 0px);}
	50% {transform: translate(256px, 0px);}
}

.doBonk {
	animation-name: bonkAnimation;
	animation-duration: 500ms;
}
</style>