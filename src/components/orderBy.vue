<template>
  <div>
  </div>
</template>

<script setup>
import { query, collection, getDocs, where, orderBy } from "firebase/firestore"
import db from '@/firebase/init.js'

// 可以搭配where先條件式篩選, 再搭配orderBy排序（也可以單用 orderBy）
// orderBy('需排序的key', 'order')  order有"asc"和"desc"兩種
// 若正序則可以省略第二個參數, orderBy("需排序的key")

const getData = async () => {
  const q = query(collection(db, "users"), where("born", ">", 1800), orderBy("born", "desc"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
  });
}


getData()
</script>

<style>
</style>