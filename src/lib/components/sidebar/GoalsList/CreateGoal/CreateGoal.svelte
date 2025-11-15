<script lang="ts">
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index"
  import { CirclePlus } from "@lucide/svelte"
  import { IMAGES } from "./images.data"
  import { goalsStore } from "$lib/store/localStore.svelte"

  let title = ""
  let imageId = ""

  const createGoal = () => {
    const imageFound = IMAGES.find((img) => img.id === imageId)
    if (!title || !imageFound) return alert("Please provide a title and select an image")

    goalsStore.value = [
      ...goalsStore.value,
      {
        id: crypto.randomUUID(),
        title,
        image: imageFound.image,
        tasks: [],
      }
    ]

    title = ""
    imageId = ""
  }
</script>

<DropdownMenu.Root>
  <DropdownMenu.Trigger>
    {#snippet child({ props })}
      <button
        {...props}
        class="opacity-50 transition-opacity hover:opacity-100"
      >
        <CirclePlus size={20} />
      </button>
    {/snippet}
  </DropdownMenu.Trigger>
  <DropdownMenu.Content class="border-neutral-800">
    <DropdownMenu.Group>
      <DropdownMenu.Label>Create a goal</DropdownMenu.Label>
      <DropdownMenu.Separator />
      <div class="p-4">
        <div class="flex items-center gap-2 mb-3">
          {#each IMAGES as image}
            <button onclick={() => {
              imageId = image.id
            }}>
              <img
                src={image.image}
                alt={image.id}
                class="w-6 h-9 rounded object-cover hover:ring-2 hover:ring-white/30 {imageId === image.id ? "ring-2 ring-white/50" : ""}"
              />
            </button>
          {/each}
        </div>

        <div class="flex items-center gap-1.5 rounded px-2 py-[.45rem] border border-transparent bg-[#222222] focus-within:border-white/15 transition-colors">
          <input
            type="text"
            placeholder="Enter goal title..."
            class="bg-transparent outline-0"
            bind:value={title}
          />

        </div>
        <button
          onclick={createGoal}
          class="mt-3 w-full rounded bg-[#333] px-3 py-2 transition-colors hover:bg-[#777]"
        >
          Add
        </button>
      </div>
    </DropdownMenu.Group>
  </DropdownMenu.Content>
</DropdownMenu.Root>
