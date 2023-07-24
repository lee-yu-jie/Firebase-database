<template>
  <div>
    addDoc 存檔完成時回傳的id： {{ id }}
  </div>
</template>

<script setup>
// 基礎新增資料
// addDoc會自動產生一個隨機id, 每次呼叫都會新增一筆資料, 舊資料不會被覆蓋
// 會有回傳值

import { ref } from 'vue';
import db from '@/firebase/init.js';
import { collection, addDoc } from 'firebase/firestore';

const id = ref('');

const addData = async () => {
  const colRef = collection(db, 'users')
  const data = {
    first: "Ada",
    last: "Lovelace",
    born: 1815
  }

  const docRef = await addDoc(colRef, data);
  console.log(docRef);
  id.value = docRef.id;
}

addData();
</script>

<style lang="scss">

</style>