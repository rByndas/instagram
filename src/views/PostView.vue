<template>
  <main>
    <a-row justify="center">
      <a-col :xs="24" :sm="20" :md="16" :lg="12" :xl="8">
        <span style="display: flex; justify-content: center">
          <Card :id_col="+$route.params.id_post" detailed="1" />
        </span>
      </a-col>
    </a-row>
  </main>
</template>

<script>
import { defineComponent } from "vue";
import Card from "@/components/Card.vue";

export default defineComponent({
  components: {
    Card,
  },
});
</script>
