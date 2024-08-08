<template>
  <section class="portfolio-container">
    <h1>Portfolio</h1>
    <div class="portfolio-item-container">
      <div v-for="image in images" :key="image.id" class="portfolio-item">
        <img :src="image.src" @click="openModal(image)" />
      </div>
    </div>
    <div v-if="dialog" class="modal" @click="dialog = false">
      <div class="modal-content" @click.stop>
        <span class="close" @click="dialog = false">&times;</span>
        <img :src="selectedImage.src" />
        <h2>{{ selectedImage.title }}</h2>
        <p v-html="selectedImage.description"></p>
      </div>
    </div>
  </section>
</template>

<script>
import cvImage from '../assets/image4.png';
import comsImage from '../assets/image3.png';

export default {
  name: 'Portfolio',
  data() {
    return {
      dialog: false,
      selectedImage: {},
      images: [
        { id: 1, src: cvImage, title: 'CV', description: 'Mon CV réalisé en HTML et CSS au début de ma formation. <a href="https://github.com/Oranssipony/CV" target="_blank">Voir sur GitHub</a>' },
        { id: 2, src: comsImage, title: 'Espace commentaire', description: 'Dynamiser un espace commentaire via Javascript, avec comme contrainte de mettre à jour les commentaires sans reload la page. <a href="https://github.com/Oranssipony/commentaire2" target="_blank">Voir sur GitHub</a>' },
      ],
    };
  },
  methods: {
    openModal(image) {
      this.selectedImage = image;
      this.dialog = true;
    },
  },
};
</script>

<style>
.portfolio-container {
  text-align: center;
}

.portfolio-item-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3rem;
}

.portfolio-item {
  display: flex;
  justify-content: center;
}

.portfolio-item img {
  cursor: pointer;
  max-width: 300px;
  max-height: 300px;
  transition: transform 0.2s;
}

.portfolio-item img:hover {
  transform: scale(1.1);
}

.modal {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
}

.modal-content {
  background: #fff;
  padding: 2rem;
  border-radius: 5px;
  text-align: center;
  max-width: 90%;
  max-height: 90%;
  overflow: auto;
}

.modal-content img {
  max-width: 100%;
  max-height: 500px;
}

.close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
  font-size: 1.5rem;
}
</style>
