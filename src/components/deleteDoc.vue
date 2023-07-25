<template>
  <div>
  </div>
</template>

<script setup>
import { doc, deleteDoc } from "firebase/firestore"
import db from '@/firebase/init.js'

// 刪除指定資料庫內的指定id資料

const deleteData = async () => {
  const docRef = doc(db, "countries", "US");
  await deleteDoc(docRef);
}

deleteData();
</script>

<style>
</style>