<template>
  <div>
    <image-display style="height: 600px;width: 800px"
                   :images="images"
                   :id="selectedImageId"
                   @thumb-click="thumbClick"
    />
  </div>
</template>

<script>
import ImageDisplay from '../components/ImageDisplay'

export default {
  name: 'ExampleImageDisplay',
  components: {ImageDisplay},
  created () {
    for (let idx = 0; idx < 10; idx++) {
      let imageVal = (idx % 3) + 1
      this.images.push({
        id: '' + (idx + 1),
        src: require(`@/assets/images/${imageVal}.jpg`)
      })
    }

    this.selectedImageId = this.images[0].id
  },
  data () {
    return {
      images: [],
      selectedImageId: ''
    }
  },
  methods: {
    thumbClick (imageId) {
      this.selectedImageId = imageId
    }
  }
}
</script>

<style scoped>

</style>
