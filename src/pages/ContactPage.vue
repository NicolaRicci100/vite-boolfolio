<script>
import axios from 'axios';
const endpoint = 'http://localhost:8000/api/contact-message';
const emptyForm = { email: '', subject: '', message: '', subscription: false };
export default {
  name: 'ContactPage',
  data: () => ({ form: emptyForm }),
  methods: {
    sendForm() {
      axios.post(endpoint, this.form)
        .then(() => { this.form = emptyForm })
        .catch(err => { console.error(err) })
        .then(() => { })
    }
  }
};
</script>

<template>
  <h1 class="mb-5">Pagina Contatto</h1>
  <form @submit.prevent="sendForm">
    <div class="mb-3">
      <label for="email" class="form-label">La tua email <sup class="text-danger">*</sup></label>
      <input type="email" class="form-control" id="email" placeholder="example@mail.com" v-model.trim="form.email">
      <small class="form-text text-muted">La tua email. Riceverai la risposta a questo indirizzo</small>
    </div>
    <div class="mb-3">
      <label for="subject" class="form-label">Oggetto della mail <sup class="text-danger">*</sup></label>
      <input type="text" class="form-control" id="subject" v-model.trim="form.subject">
    </div>
    <div class="mb-3">
      <label for="message" class="form-label">Messaggio <sup class="text-danger">*</sup></label>
      <textarea class="form-control" id="message" name="message" rows="5" v-model.trim="form.message"></textarea>
    </div>
    <div class="mb-3 form-check form-check-inline">
      <input type="checkbox" class="form-check-input" id="subscription" v-model="form.subscription">
      <label for="subscription" class="form-check-label">Iscriviti alla newsletter</label>
    </div>
    <div class="mb-3 d-flex justify-content-end">
      <button class="btn btn-outline-secondary" type="submit">Invia</button>
    </div>
  </form>
</template>

<style></style>