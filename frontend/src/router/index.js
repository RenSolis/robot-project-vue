// Modules
import Router from 'vue-router';
import Vue from 'vue';
// Components
import HomePage from '../home/HomePage.vue';
import SidebarStandard from '../sidebar/SidebarStandard.vue';
import SidebarBuild from '../sidebar/SidebarBuild.vue';
import RobotBuilder from '../build/RobotBuilder.vue';
import PartInfo from '../parts/PartInfo.vue';
import BrowseParts from '../parts/BrowseParts.vue';
import RobotHeads from '../parts/RobotHeads.vue';
import RobotTorsos from '../parts/RobotTorsos.vue';
import RobotArms from '../parts/RobotArms.vue';
import RobotBases from '../parts/RobotBases.vue';
import ShoppingCart from '../cart/ShoppingCart.vue';

// Add Router
Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      components: {
        default: HomePage,
        sidebar: SidebarStandard,
      },
    },
    {
      path: '/build',
      name: 'Build',
      components: {
        default: RobotBuilder,
        sidebar: SidebarBuild,
      },
    },
    {
      path: '/cart',
      name: 'Cart',
      component: ShoppingCart,
    },
    {
      path: '/parts/browse',
      name: 'BrowseParts',
      component: BrowseParts,
      children: [
        {
          path: 'heads',
          name: 'BrowseHeads',
          component: RobotHeads,
        },
        {
          path: 'torsos',
          name: 'BrowseTorsos',
          component: RobotTorsos,
        },
        {
          path: 'arms',
          name: 'BrowseArms',
          component: RobotArms,
        },
        {
          path: 'bases',
          name: 'BrowseBases',
          component: RobotBases,
        },
      ],
    },
    {
      path: '/parts/:partType/:id',
      name: 'Parts',
      component: PartInfo,
      props: true,
      beforeEnter(to, from, next) {
        const isValidId = Number.isInteger(Number(to.params.id));
        next(isValidId);
      },
    },
  ],
});
