<template>
  <div>
  </div>
</template>

<script setup>
import { doc, updateDoc } from 'firebase/firestore';
import db from '@/firebase/init.js';

// updateDoc 指定一個資料庫的名稱與其內的一個id
// 更改此id內指定的資料
// doc(db, "資料庫名稱", "id")

// 資料庫與id指定錯誤會噴錯
// 內容若無指定的key, 則新增一筆資料

const updateCountry = async () => {
  const docRef = doc(db, "users", "8cpysBZ3KsQUij9HHNeY");
  const payload = {
    jjjj: "Beidsfdsfsfdsfjing4",
  }
  await updateDoc(docRef, payload);

}

updateCountry();
</script>

<style>
</style>