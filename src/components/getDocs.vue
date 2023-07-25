<template>
  <div>
  </div>
</template>

<script setup>
import { query, collection, getDocs } from "firebase/firestore"
import db from '@/firebase/init.js'

// getDocs 可以抓取指定資料庫內的所有資料

const getData = async () => {
  const q = query(collection(db, "users"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    console.log(doc.data());
    console.log(doc.id);
  });
}

getData()
</script>

<style>
</style>