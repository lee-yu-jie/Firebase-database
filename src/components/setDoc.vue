<template>
  <div>
  </div>
</template>

<script setup>
import { doc, setDoc } from 'firebase/firestore';
import db from '@/firebase/init.js';

// setDoc 自訂一個id, 不會有回傳值
// doc(db, "資料庫名稱", "自定義id");
// 若沒有特定指定需資料合併
// 則會覆蓋原本相同id下的所有資料

// 若指定需資料合併{ merge: true}
// 已存在的key會被覆蓋, 不存在的key會被新增
const createCountry = async () => {
  const docRef = doc(db, "cities", "BJ");
  const payload = {
    name: "Beijing4",
    gg: "China1",
    cc: "Asia1"
  }
  await setDoc(docRef, payload, { merge: true});

}

createCountry();
</script>

<style>
</style>