<script lang="ts">
  interface Props {
    progress?: number
    filledColor?: string
    emptyColor?: string
  }

  let {
    progress = 0,
    filledColor = "#777",
    emptyColor = "#232323"
  }: Props = $props()
</script>

<div
  class="progress-pie"
  style="--progress: {progress}; --filled-color: {filledColor}; --empty-color: {emptyColor}"
>
  <div class="pie" ></div>
</div>

<style>
  .progress-pie {
    position: relative;
    width: 20px;
    height: 20px;
    border: 1px solid var(--filled-color);
    padding: 2px;
    border-radius: 50%;
  }

  .pie {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: conic-gradient(
      var(--filled-color) 0% calc(var(--progress) * 1%),
      var(--empty-color) calc(var(--progress) * 1%) 100%
    );
  }
</style>
