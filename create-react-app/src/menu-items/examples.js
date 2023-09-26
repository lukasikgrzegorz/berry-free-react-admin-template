// assets
import { IconStack, IconPencil } from '@tabler/icons';

// constant
const icons = {
  IconStack,
  IconPencil
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const examples = {
  id: 'examples',
  title: 'Examples',
  type: 'group',
  children: [
    {
      id: 'product-description',
      title: 'Product Description',
      type: 'item',
      url: '/examples/productdescription',
      icon: icons.IconStack,
      breadcrumbs: false
    },
    {
      id: 'blog-post',
      title: 'Blog Post',
      type: 'item',
      url: '/examples/blogpost',
      icon: icons.IconPencil,
      breadcrumbs: false
    }
  ]
};

export default examples;
