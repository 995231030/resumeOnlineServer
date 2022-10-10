import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);
  router.post('/', controller.home.index);
  router.post('/distributor', controller.home.distributor);
};
