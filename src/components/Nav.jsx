import { Link } from 'react-router-dom';

const LINKS = [
   {
      title: 'Home',
      path: '/',
   },
   {
      title: 'Starred',
      path: '/starred',
   },
];

const Nav = () => {
   return (
      <div>
         <ul>
            {
               // Iterate through the LINKS array, rendering a <Link>
               // in an <li> item for each entry.
               LINKS.map((item) => (
                  <li key={item.path}>
                     <Link to={item.path}>{item.title}</Link>
                  </li>
               ))
            }
         </ul>
      </div>
   );
};

export default Nav;
