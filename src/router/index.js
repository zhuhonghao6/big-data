import Vue from "vue";
import VueRouter from "vue-router";

import index from "../components/index.vue";
import cs from "../components/cs.vue";
import csv from "../components/csv.vue";
import lunb from "../components/lunb.vue";
import bingtu from "../components/bingtu.vue";
Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "index",
        component: index
    }, {
        path: "/cs",
        name: "cs",
        component: cs
    },
    {
        path: "/csv",
        name: "csv",
        component: csv
    },
    {
        path: "/lunb",
        name: "lunb",
        component: lunb
    },
    {
        path: "/bingtu",
        name: "bingtu",
        component: bingtu
    },
];

const router = new VueRouter({
    routes
});

export default router;