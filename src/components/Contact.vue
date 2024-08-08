<template>
  <section class="contact">
    <h1>Contact</h1>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Pseudonyme</label>
        <input type="text" id="name" v-model="form.name" required />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="form.email" required />
      </div>
      <div class="form-group">
        <label for="message">Message</label>
        <textarea id="message" v-model="form.message" required></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  </section>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: '',
      },
    };
  },
  methods: {
    handleSubmit() {
      console.log('Form submitted:', this.form);
    },
  },
};
</script>

<style>
.contact {
  width: 500px;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  background: #f4f4f4;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.contact h1 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 2rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

form label {
  margin-bottom: 0.5rem;
  font-size: 1rem;
  color: #333;
}

form input,
form textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
}

form textarea {
  resize: vertical;
  min-height: 100px;
}

form button {
  align-self: center;
  padding: 0.75rem 1.5rem;
  border: none;
  background: #333;
  color: #fff;
  cursor: pointer;
  border-radius: 5px;
  font-size: 1rem;
  transition: background 0.3s ease;
}

form button:hover {
  background: #555;
}

</style>
