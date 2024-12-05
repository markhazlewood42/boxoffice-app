import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

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
         <NavList>
            {
               // Iterate through the LINKS array, rendering a <Link>
               // in an <li> item for each entry.
               LINKS.map((item) => (
                  <li key={item.path}>
                     <StyledNavLink to={item.path}>{item.title}</StyledNavLink>
                  </li>
               ))
            }
         </NavList>
      </div>
   );
};

export default Nav;

// Styling components *********************************************************

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0 0 30px;
  padding: 0;
  li {
    margin: 0 10px;
  }
`;

const StyledNavLink = styled(NavLink)`
  display: block;
  padding: 3px 15px;
  position: relative;
  text-decoration: none;
  color: ${({ theme }) => theme.mainColors.gray};
  &.active {
    color: ${({ theme }) => theme.mainColors.blue};
    &:after {
      content: '';
      position: absolute;
      display: block;
      height: 2px;
      left: 0%;
      bottom: 0;
      background-color: ${({ theme }) => theme.mainColors.blue};
      animation: expand-from-center 0.2s ease-out forwards;
      @keyframes expand-from-center {
        from {
          left: 50%;
          width: 0;
        }
        to {
          left: 0;
          width: 100%;
        }
      }
    }
  }
`;