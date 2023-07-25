<template>
  <div>
  </div>
</template>

<script setup>
import { doc, onSnapshot} from 'firebase/firestore';
import db from '@/firebase/init.js';

// onSnapshot 可以監聽指定資料庫的資料  

// 監聽整個資料庫 collection
// onSnapshot(collection(db, '資料庫名稱'), (snap) => {
//   snap.data()
// })

// 監聽指定資料庫內的指定id  doc
// onSnapshot(doc(db, '資料庫名稱', 'id'), (snap) => {
//   snap.data()
// })

// 監聽查詢結果 query
// onSnapshot(query(collection(db, '資料庫名稱'), where('key', '運算子', '條件')), (snap) => {})

const getData = async () => {
  const docRef = doc(db, "users", "6F0NWyvT5K4S3z8gQ5hG");
  // const collectionRef = collection(db, "users");
  onSnapshot(docRef, (doc) => {
    console.log("Current data: ", doc.data());
  });
}

// 在create或mounted時就要註冊監聽器
getData();
</script>

<style>
</style>