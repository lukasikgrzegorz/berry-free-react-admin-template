// assets
import { IconPlus } from '@tabler/icons';

// constant
const icons = {
  IconPlus
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const products = {
  id: 'products',
  title: 'Products',
  type: 'group',
  children: [
    {
      id: 'util-typography',
      title: 'Add new product',
      type: 'item',
      url: '/utils/util-typography',
      icon: icons.IconPlus,
      breadcrumbs: false
    }
  ]
};

export default products;
