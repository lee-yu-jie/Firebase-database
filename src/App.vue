<template>
  <div>
    <addDoc />
    <setDoc />
    <updateDoc />
    <getDoc />
    <getDocs />
    <Where />
    <orderBy />
  </div>
</template>

<script setup>
import addDoc from '@/components/addDoc.vue';
import setDoc from './components/setDoc.vue';
import updateDoc from './components/updateDoc.vue';
import getDoc from './components/getDoc.vue';
import getDocs from './components/getDocs.vue';
import Where from './components/where_.vue';
import orderBy from './components/orderBy.vue';

</script>

<style lang="scss">

</style>
