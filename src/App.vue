<template>
  <component v-if="dataSource.length > 0" :is="customWidget" :dataSource="dataSource"></component>
</template>

<script  lang="ts">
import { defineComponent, ref } from 'vue';
type chartInterface = {
  day: string;
  oranges: number;
}

export default defineComponent({
  components: {

  }, props: {

  }, setup() {
    const dataSource = ref<chartInterface[]>(
      [{
        day: 'Monday',
        oranges: 3,
      }, {
        day: 'Tuesday',
        oranges: 2,
      }, {
        day: 'Wednesday',
        oranges: 3,
      }, {
        day: 'Thursday',
        oranges: 4,
      }, {
        day: 'Friday',
        oranges: 6,
      }, {
        day: 'Saturday',
        oranges: 11,
      }, {
        day: 'Sunday',
        oranges: 4,
      }]

    )
    const customWidget = ref<string>('DemoCustomReportWidget');
    return { customWidget, dataSource }
  }
});

</script>

<style scoped></style>