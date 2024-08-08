<template>
  <footer>
    <p>&copy; 2024 Mon Portfolio</p>
    <div class="social-icons">
      <a href="https://github.com/Oranssipony" target="_blank">
        <img src="../assets/github.svg" alt="GitHub" />
      </a>
      <a href="https://www.linkedin.com/in/dimitri-louet-29440b135/" target="_blank">
        <img src="../assets/linkedin.png" alt="LinkedIn" />
      </a>
      <a href="https://x.com/Oranssi_" target="_blank">
        <img src="../assets/twitter.png" alt="Twitter" />
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',

};

</script>

<style>
/* Style de base pour le footer */
footer {
  background: #333;
  color: #fff;
  text-align: center;
  padding: 1rem;
  position: fixed;
  width: 100%;
  bottom: 0;
}

.social-icons {
  margin-top: 0.5rem;
}

.social-icons a {
  margin: 0 0.5rem;
  display: inline-block;
}

.social-icons img {
  width: 24px;
  height: 24px;
  transition: transform 0.2s;
}

.social-icons img:hover {
  transform: scale(1.2);
}
</style>
