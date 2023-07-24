<template>
  <div>
  </div>
</template>

<script setup>
import { doc, getDoc } from 'firebase/firestore';
import db from '@/firebase/init.js';

// getData 取得指定資料庫內的指定id資料
// doc(db, "資料庫名稱", "id")

// 回傳值可以用 .exists() 內建方法判斷是否有資料
const getData = async () => {
  const docRef = doc(db, "users", "8cpysBZ3KsQUidj9HHNeY");
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    console.log("No such document!");
  }
}

getData();
</script>

<style>
</style>