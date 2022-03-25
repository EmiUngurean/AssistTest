<template>
  <div class="contact">
        <Contact/>
    </div>
</template>

<script>
import Contact from '../components/contact.vue'

export default {
  name: 'ContactView',
  components: {
      Contact,
  }
}
</script>

<style>
.contact{
    width: 500px;
    text-align: center;
}
</style>