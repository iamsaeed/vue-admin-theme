<template>
  <div class="flex text-gray-500">
    <div v-if="sideBar" class="flex-none w-64 h-16 min-h-screen p-2">
      1
    </div>
    <div class="flex-grow w-16 h-16 bg-gray-200 min-h-screen">
        <div class="flex bg-blue-700 p-2 text-white">
            <div class="flex-1">
                <svg @click="sideBar = !sideBar" class="fill-current cursor-pointer w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
            </div>
            <div>My Account</div>
        </div>
        <div class="bg-white p-2 m-3">4</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sideBar: true,
    };
  },
};
</script>