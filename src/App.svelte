<script lang="ts">
  import MainPage from "$lib/components/main-page/MainPage.svelte"
  import Sidebar from "$lib/components/sidebar/Sidebar.svelte"
</script>

<main class="flex h-screen">
  <div class="h-[900px] m-auto w-9/12 grid grid-cols-[.6fr_2fr] bg-[#181818] shadow rounded-2xl overflow-hidden">
    <Sidebar />
    <MainPage />
  </div>
</main>

