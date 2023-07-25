<template>
  <div>
    <addDoc />
    <setDoc />
    <updateDoc />
    <getDoc />
    <getDocs />
    <Where />
    <orderBy />
    <Limit />
    <deleteDoc />
    <deleteField />
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
import Limit from './components/limit_.vue';
import deleteDoc from './components/deleteDoc.vue';
import deleteField from './components/deleteField.vue';
</script>

<style lang="scss">

</style>
