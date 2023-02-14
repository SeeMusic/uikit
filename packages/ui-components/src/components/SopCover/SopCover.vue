<script lang="ts" setup>
import { computed, onMounted, onBeforeUnmount, ref } from 'vue';
import type { PropType } from 'vue';

type MouseEventHandle = () => void

const CoverTypeList = [
  'album',
  'track',
  'cp',
  'customer',
  'contract',
  'dsp',
  'playlist-project',
  'playlist'
];

const props = defineProps({
  type: {
    type: String,
    default: 'album',
    validator(value: string) {
      return [
        'album',
        'track',
        'cp',
        'customer',
        'contract',
        'dsp',
        'playlist-project',
        'playlist'
      ].indexOf(value) !== -1;
    }
  },
  src: {
    type: String,
    default: ''
  },
  width: {
    type: Number,
    default: 72
  },
  height: {
    type: Number,
    default: 72
  },
  placeholder: {
    type: String,
    default: ''
  },
  isCoverEdit: {
    type: Boolean,
    default: false
  },
  coverEdit: {
    type: Function as PropType<MouseEventHandle>,
    default: () => ({})
  }
});

const backgroundStyle = computed(() => {
  return {
    backgroundPosition: `0 -${props.width * CoverTypeList.indexOf(props.type)}px`,
    backgroundSize: `${props.width}px auto`
  };
});

const coverRef = ref<HTMLDivElement | null>(null);

function mouseenterHandler(event: MouseEvent) {
  const target = (event.target as HTMLElement).children.item(0) as HTMLElement;
  target.style.opacity = '1';
}
function mouseleaveHandler(event: MouseEvent) {
  const target = (event.target as HTMLElement).children.item(0) as HTMLElement;
  target.style.opacity = '0';
}

onMounted(() => {
  if (coverRef.value && props.isCoverEdit) {
    coverRef.value.addEventListener('mouseenter', mouseenterHandler);
    coverRef.value.addEventListener('mouseleave', mouseleaveHandler);
  }
});

onBeforeUnmount(() => {
  if (coverRef.value && props.isCoverEdit) {
    coverRef.value.removeEventListener('mouseenter', mouseenterHandler);
    coverRef.value.removeEventListener('mouseleave', mouseleaveHandler);
  }
});

</script>

<template>
  <div
    ref="coverRef"
    class="sop-cover"
    :style="{
      width: `${width}px`,
      height: `${height}px`,
    }"
  >
    <div
      class="edit"
      :style="{
        width: `${width}px`,
        height: `${height}px`,
        lineHeight: `${height}px`
      }"
    >
      <template v-if="!!coverEdit">
        <i
          class="sop-icon sop-icon--input"
          @click="coverEdit"
        />
      </template>
    </div>
    <template v-if="src !== ''">
      <img
        :src="src"
        :width="width"
        :height="height"
      >
    </template>
    <template v-else-if="placeholder !== ''">
      <span>
        {{ placeholder }}
      </span>
    </template>
    <template v-else>
      <span
        class="default-cover"
        :style="backgroundStyle"
      />
    </template>
  </div>
</template>

