<template>
  <section class="about-me">
    <h1>About Me</h1>
    <p>
      LOUET Dimitri, plus connu sur internet sous le pseudonyme Oranssi. Je suis un jeune développeur-web récemment formé au Centre Européen de Formation. Je suis en pleine reconversion, étant anciennement ingénieur du son studio. Attentif à la veille technologique et à l'accessibilité des contenus, je vous ferai profiter de ces connaissances afin de créer un site qui correspond à vos besoins !
    </p>

  </section>
</template>

<script>
export default {
  name: 'AboutMe',
};
</script>

<style>
.about-me {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  background: #f4f4f4;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.about-me h1 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
}

.about-me p {
  font-size: 1.2rem;
  line-height: 1.6;
  color: #666;
  margin-bottom: 1.5rem;
}

  .about-me h1 {
    font-size: 2rem;
  }

  .about-me p {
    font-size: 1rem;
  }

</style>
