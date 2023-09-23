// assets
import { IconPlus } from '@tabler/icons';

// constant
const icons = {
  IconPlus
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const examples = {
  id: 'examples',
  title: 'Examples',
  type: 'group',
  children: [
    {
      id: 'util-typography',
      title: 'Product Description',
      type: 'item',
      url: '/examples/productdescription',
      icon: icons.IconPlus,
      breadcrumbs: false
    }
  ]
};

export default examples;
