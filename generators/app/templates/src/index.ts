import <%=name%>Component from "./<%=nameKebab%>.component.vue";

export default {
  install(Vue: any, options: any) {
    Vue.component('<%=nameKebab%>', <%=name%>Component);
  }
}

export { <%=name%>Component };