<template>
  <div>
  </div>
</template>

<script setup>
import { doc, updateDoc, deleteField } from 'firebase/firestore';
import db from '@/firebase/init.js';

// 要刪除指定資料庫內的指定id資料內的指定key
// 可以使用 updateDoc 搭配 deleteField() 來刪除
// updateDoc(documentReference, {
//     field: deleteField()
// })
const deleteData = async () => {
  const docRef = doc(db, "countries", "Taiwan");

  await updateDoc(docRef, { 
    came: deleteField()
  });
}

deleteData();
</script>

<style>
</style>