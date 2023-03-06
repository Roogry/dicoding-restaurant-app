import Home from '../views/pages/home';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';

const routes = {
  '/': Home, // default page
  '/cafes': Home, // default page
  '/detail/:id': Detail,
  '/favorite': Favorite,
};

export default routes;
