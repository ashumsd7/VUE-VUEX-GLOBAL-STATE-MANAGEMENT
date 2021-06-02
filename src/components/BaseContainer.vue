<template>
  <section>
    <h2>{{ title }}</h2>
    <slot></slot>
  </section>
</template>

<script>
export default {
  props: ['title'],
};
</script>

<style scoped>
section {
  max-width: 30rem;
  margin: 2rem auto;
  box-shadow: 4px 8px 16px rgba(27, 99, 253, 0.26);
  border-radius: 10px;
  border: .5px dashed black;
  padding: 1rem;
  text-align: center;
  align-items: center;
}

h2 {
  text-align: center;
}
</style>