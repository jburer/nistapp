import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import * as breadcrumb from "@/store/modules/breadcrumb.js";
import * as step from "@/store/modules/step.js";
import * as minimumrequirement from "@/store/modules/minimumrequirement.js";
import * as securityobjective from "@/store/modules/securityobjective.js";
import * as impact from "@/store/modules/impact.js";
import * as securitycategorization from "@/store/modules/securitycategorization.js";
import * as publication from "@/store/modules/publication.js";
import * as businessrole from "@/store/modules/businessrole.js";
import * as glossary from "@/store/modules/glossary.js";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [
    createPersistedState({
      storage: window.sessionStorage
    })
  ],
  modules: {
    breadcrumb,
    step,
    minimumrequirement,
    securityobjective,
    impact,
    securitycategorization,
    publication,
    businessrole,
    glossary
  },
  state: {}
});
