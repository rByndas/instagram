<template>
  <a-list
    class="comment-list"
    :data-source="three_comments"
    :header="`${
      comments[0] !== 'qwerty' ? comments.length : three_comments.length
    } ${comments.length > 1 ? 'Коммент.' : 'Коммент.'}`"
    item-layout="horizontal"
  >
    <template #renderItem="{ item }">
      <a-list-item :key="item">
        <a-comment
          :author="item.author"
          :avatar="item.avatar"
          :content="item.content"
          :datetime="item.datetime"
        />
      </a-list-item>
    </template>
  </a-list>

  <span v-if="+detailed">
    <a-comment>
      <template #avatar>
        <a-avatar
          :src="'https://joeschmoe.io/api/v1/random?' + this.id_col"
          alt="Han Solo"
        />
      </template>
      <template #content>
        <a-form-item>
          <a-textarea v-model:value="value" :rows="4" />
        </a-form-item>
        <a-form-item>
          <a-button
            html-type="submit"
            :loading="submitting"
            type="primary"
            @click="handleSubmit"
          >
            Add Comment
          </a-button>
        </a-form-item>
      </template>
    </a-comment>
  </span>
</template>

<script>
import { defineComponent, ref } from "vue";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

export default defineComponent({
  data() {
    return {
      comments: [{}, {}, {}],
      submitting: false,
      value: "",
    };
  },
  methods: {
    handleSubmit() {
      if (!this.value) {
        return;
      }

      this.submitting = true;
      this.submitting = false;
      this.comments = [
        {
          author: "Han Solo",
          avatar:
            "https://joeschmoe.io/api/v1/random" +
            this.id_col +
            +this.comments.length,
          content: this.value,
          datetime: dayjs().fromNow(),
        },
        ...this.comments,
      ];
      let posts_ = this.getPosts();
      posts_[+this.$route.params.id_post - 1] = this.comments;
      localStorage.setItem("posts", JSON.stringify(posts_));
      this.value = "";
    },
    getPosts() {
      let posts = localStorage.getItem("posts");
      if (posts) {
        return JSON.parse(posts);
      } else {
        return [];
      }
    },
  },
  mounted() {
    let id_p = this.id_col;

    if (+this.detailed) {
      id_p = +this.$route.params.id_post;
    }
    let p = this.getPosts();

    if (p[id_p - 1] && p[id_p - 1][0] != "qwerty") {
      this.comments = p[id_p - 1];
    } else {
      this.comments = ["qwerty"];
    }
  },
  computed: {
    three_comments() {
      let three = [0, 1, 2],
        arr = [];

      if (+this.detailed) {
        if (this.comments[0] == "qwerty") {
          return [];
        }
        return JSON.parse(JSON.stringify(this.comments));
      } else {
        if (this.comments[0] == "qwerty") {
          return [];
        }

        three.forEach((item) => {
          if (
            this.comments &&
            this.comments[item] &&
            this.comments[item]["author"]
          ) {
            arr.push(JSON.parse(JSON.stringify(this.comments[item])));
          }
        });

        if (!arr.length) {
          this.comments = JSON.parse(JSON.stringify([]));
        }

        return JSON.parse(JSON.stringify(arr));
      }
    },
  },
  props: {
    id_col: Number,
    detailed: String,
  },
});
</script>
