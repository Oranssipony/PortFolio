<template>
  <header @mousemove="handleMouseMove" @mouseleave="handleMouseLeave">
    <div class="image-container" @click="toggleImage">
      <img :src="currentImage" alt="Profile Image" class="profile-image" />
    </div>
    <nav>
      <ul>
        <li><router-link to="/about">About Me</router-link></li>
        <li><router-link to="/portfolio">Portfolio</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </nav>
    <div class="cursor-follower" ref="cursorFollower"></div>
  </header>
</template>

<script>
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.png';

export default {
  name: 'Header',
  data() {
    return {
      image1,
      image2,
      currentImage: image1,
      cursorX: 0,
      cursorY: 0,
    };
  },
  methods: {
    toggleImage() {
      this.currentImage = this.currentImage === this.image1 ? this.image2 : this.image1;
    },
    handleMouseMove(e) {
      this.cursorX = e.clientX;
      this.cursorY = e.clientY;
      this.updateCursorFollower();
    },
    handleMouseLeave() {
      const follower = this.$refs.cursorFollower;
      follower.style.opacity = 0;
    },
    updateCursorFollower() {
      const follower = this.$refs.cursorFollower;
      follower.style.opacity = 1;
      follower.style.left = `${this.cursorX}px`;
      follower.style.top = `${this.cursorY}px`;
    }
  },
};
</script>

<style>
header {
  position: relative;
  background: #333;
  color: #fff;
  padding: 1rem;
  text-align: center;
  overflow: hidden;
}
.image-container {
  margin-bottom: 1rem;

  height: 150px;
}
.profile-image {
  max-width: 150px;
  max-height: 150px;
  border-radius: 50%;
  cursor: pointer;
  height: 100%; 
}
nav ul {
  list-style: none;
  display: flex;
  justify-content: space-around;
}
nav ul li {
  margin: 0 1rem;
}
nav ul li a {
  color: #fff;
  text-decoration: none;
}
li:hover {
  text-decoration: underline;
  color: pink;
}

.cursor-follower {
  position: absolute;
  width: 15px;
  height: 15px;
  background: rgba(255, 105, 180, 0.7);
  border-radius: 50%;
  pointer-events: none;
  transition: all 0.15s ease;
  transform: translate(-50%, -50%);
  opacity: 0;
}
</style>
