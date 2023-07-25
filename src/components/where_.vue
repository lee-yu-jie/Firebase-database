<template>
  <div>
  </div>
</template>

<script setup>
import { where, query, collection, getDocs } from "firebase/firestore"
import db from '@/firebase/init.js'

// getDocs 搭配 where 可以抓取指定資料庫內的特定條件的資料
// where("key", "運算子", "條件")

const getData = async () => {
  const q = query(collection(db, "users"), where("born", ">", 1850));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
  });
}

getData()
</script>

<style>
</style>