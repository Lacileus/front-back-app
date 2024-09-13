<script setup>
import {ref} from "vue";
import axios from "axios";

const url = "http://localhost:3000"

const data = ref(0)

async function get() {
  return axios.get(url+'/getData/')
      .then(response => {
        data.value = response.data
        console.log(data)
      })
      .catch(error => {
        console.error(error);
      });
}


</script>

<template>
  <div class="container">
 <button class="btn" @click="get()">{{ data }}</button>
    <span> </span>
  </div>
</template>

<style scoped>

.container {
  margin: auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.btn {
  width: 200px;
  height: 200px;
  padding: 2rem;
  border: none;
  border-radius: 3rem;
  background-color: #336;
  color: #ffffff;
  font-size: 2rem;
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  transition: all 0.3s;
}

.btn:hover {
background-color: #559;
  cursor: pointer;
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  transform: translateY(-16px);
}

</style>
