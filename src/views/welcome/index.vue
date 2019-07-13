<template>
    <div class="container">
        <img height="500px" src="../../assets/images/welcome.jpg" alt="">
    </div>
</template>

<script>
export default {
  created () {
    this.$http.get('articles').then(res => console.log(res.data))
  }
}
</script>

<style>

</style>
