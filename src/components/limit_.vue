<template>
  <div>
  </div>
</template>

<script setup>
import { query, collection, getDocs, limit } from "firebase/firestore"
import db from '@/firebase/init.js'

// 加入limit(2)後, 只會抓取兩筆資料

const getData = async () => {
  const q = query(collection(db, "users"), limit(2));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
  });
}

getData()
</script>

<style>
</style>