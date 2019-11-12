<template>
  <div id="app">
    <<%=nameSnake%>></<%=nameSnake%>>
  </div>
</template>

<script lang="ts">
import Vue, { VueConstructor } from "vue";
import <%=name%>Component from "../src/<%=nameSnake%>.component.vue";

export default Vue.extend({
  components: { "<%=nameSnake%>": <%=name%>Component }
});
</script>
