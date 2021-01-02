<template>
  <div class="flex bg-gray-300 min-h-screen text-gray-500">
      <aside v-if="sideBar" class="flex-col bg-white w-48">
        <div class="p-2 text-center bg-blue-600 text-white">Menu</div>
        <div class="text-xs">
            <div v-for="item in items" :key="item.name" class="hover:bg-gray-200 cursor-pointer">
                <div class="flex items-center">
                    <svg @click="sideBar = !sideBar" class="fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                    <router-link tag="a" exact class="flex p-2" :to="{name: item.route_name}">{{ item.name }}</router-link>
                </div>
            </div>
        </div>
      </aside>
      <div class="flex-grow bg-blue-100">
        <nav class="flex bg-blue-600 text-white p-2">
         <div class="flex-1">
            <svg @click="sideBar = !sideBar" class="fill-current w-6 h-6 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
         </div>
         <div class="flex-grow">
            Navbar
         </div>
        </nav>
        <main>
          <router-view />
        </main>
      </div>
  </div>
</template>

<script>
export default {
  watch: {
  },
  data() {
    return {
      sideBar: true,
      items : [
          {name : 'Leads', route_name: 'home', separator:false},
          {name : 'Lead Statuses', route_name: 'home', separator:false},
          {name : 'Leads Sources', route_name: 'home', separator:false},
          {name : 'Users', route_name: 'home', separator:false},
          {name : 'Settings', route_name: 'home', separator:true},
          {name : 'Logout', route_name: 'logout', separator:true},
      ]
    };
  },
};
</script>