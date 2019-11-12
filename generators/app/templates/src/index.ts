import <%=name%>Component from "./<%=nameSnake%>.component.vue";

export default {
  install(Vue: any, options: any) {
    Vue.component('<%=nameSnake%>', <%=name%>Component);
  }
}

export { <%=name%>Component };