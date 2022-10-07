import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  base: './',
  publicPath: './',
  outputPath: './dist',
  hash: true,
  history: {
    type: 'hash',
  },
  routes: [
    {
      path: '/',
      component: '@/pages/index',
      routes: [
        {
          path: './',
          redirect: './login',
        },
        {
          path: './login',
          component: '@/pages/login/index',
        },
        {
          path: './home',
          component: '@/pages/home/index',
        },
        {
          path: './main',
          component: '@/pages/main/index',
          routes: [
            {
              path: './',
              redirect: './graph',
            },
            {
              path: './graph/:id',
              component: '@/pages/main/graph/index',
            },
          ],
        },
      ],
    },
  ],
  fastRefresh: {},
});
