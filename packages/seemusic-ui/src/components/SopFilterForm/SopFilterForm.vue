<script setup lang="ts">
import { ref } from 'vue';

const isFilterShow = ref(true);
</script>

<template>
  <ElForm
    class="sop-filter sop-filter--toggleable"
    :class="isFilterShow ? 'sop-filter--opened' : ''"
    label-position="top"
    @submit.prevent
  >
    <div class="sop-filter__toggle">
      <strong>查询或筛选</strong>
      <a
        href="#"
        @click.prevent="isFilterShow = !isFilterShow"
      >{{ isFilterShow ? '收起' : '展开' }}</a>
    </div>

    <div
      v-show="isFilterShow"
      class="sop-filter__content"
    >
      <slot />
    </div>

    <div
      v-show="isFilterShow"
      class="sop-filter__operation"
    >
      <slot name="opt" />
    </div>
  </ElForm>
</template>

