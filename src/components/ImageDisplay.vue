<template>
  <div class="image-display__main">
    <div class="image-display__thumb-list image-display__scroll">
      <div class="image-display__thumb"
           @click="thumbClick(img.id)"
           v-for="img in images"
           :key="img.id">
        <img :src="img.src"
             :style="{'border': id === img.id ? '1px #000 solid' : ''}"
             alt="">
      </div>
    </div>
    <div class="image-display__image-panel image-display__scroll">
      <img v-if="selectedImage"
           :src="selectedImage.src"
           alt=""/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageDisplay',
  props: {
    images: {
      type: Array,
      default () {
        return []
      }
    },
    id: {
      type: String,
      default () {
        return ''
      }
    }
  },
  computed: {
    selectedImage () {
      if (!this.images || this.images.length === 0) {
        return null
      }
      let idx = this.images.map(img => img.id).indexOf(this.id)
      if (idx < 0) {
        return null
      }
      return this.images[idx]
    }
  },
  methods: {
    thumbClick (imageId) {
      this.$emit('thumb-click', imageId)
    }
  }
}
</script>

<style scoped>
.image-display__main div {
  box-sizing: border-box;
}

.image-display__main {
  box-sizing: border-box;
  display: flex;
  width: 100%;
  height: 100%;

  min-width: 200px;
}

.image-display__thumb-list {
  width: 160px;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
}

.image-display__thumb-list .image-display__thumb {
  width: 160px;
  height: 120px;
  padding: 5px 20px;
}

.image-display__thumb-list .image-display__thumb:hover {
  cursor: pointer;
}

.image-display__thumb-list .image-display__thumb img {
  width: 100%;
  height: 100%;
  border: 1px #AAAAAA solid;
}

.image-display__image-panel {
  width: calc(100% - 140px);
  height: 100%;
  padding: 10px;
  overflow: auto;
}

.image-display__scroll::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

.image-display__scroll::-webkit-scrollbar-thumb {
  background-color: gray;
}

</style>
