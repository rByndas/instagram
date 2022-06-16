<script>
if (!localStorage.getItem("posts")) {
  let ps = [
    ["qwerty"],
    ["qwerty"],
    ["qwerty"],
    ["qwerty"],
    ["qwerty"],
    ["qwerty"],
    ["qwerty"],
    ["qwerty"],
    ["qwerty"],
    ["qwerty"],
    ["qwerty"],
    ["qwerty"],
  ];
  localStorage.setItem("posts", JSON.stringify(ps));
}
import { defineComponent } from "vue";
import Card from "@/components/Card.vue";

export default defineComponent({
  components: {
    Card,
  },
  data() {
    return {
      cols: JSON.parse(localStorage.getItem("posts")),
    };
  },
});
</script>

<template>
  <a-row justify="center" :gutter="[16, 16]">
    <a-col
      v-for="(item, index) in cols"
      :xs="24"
      :sm="12"
      :md="8"
      :lg="7"
      :xl="6"
    >
      <span class="line-clamp" style="display: flex; justify-content: center">
        <router-link :to="'/post/' + (+index + 1) + '/comment/0'">
          <Card :id_col="1 + index" detailed="0" />
        </router-link>
      </span>
    </a-col>
  </a-row>
</template>

<style>
.line-clamp .ant-card-meta-description {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  line-height: 1.3em;
  height: 3.9em;
}

.line-clamp div.ant-comment-content-detail {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  line-height: 1.3em;
  height: 3.9em;
}
</style>
