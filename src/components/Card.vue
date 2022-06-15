<script>
import { defineComponent } from "vue";
import AddComment from "@/components/AddComment.vue";

export default defineComponent({
  components: {
    AddComment,
  },

  props: {
    id_col: Number,
    detailed: String,
  },
});
</script>

<template>
  <a-card hoverable :key="id_col">
    <template #cover>
      <img
        alt="example"
        :src="'https://picsum.photos/640/300?random=' + this.id_col"
      />
    </template>
    <a-card-meta :title="'Пост ' + this.id_col">
      <template #description>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
        perspiciatis praesentium laboriosam exercitationem aperiam atque! Magni
        culpa, mollitia ut nostrum quod, necessitatibus eligendi eum repudiandae
        dolorum dolores iusto harum quas?
      </template>
    </a-card-meta>
    <AddComment :detailed="this.detailed" :id_col="this.id_col" />
  </a-card>
</template>
