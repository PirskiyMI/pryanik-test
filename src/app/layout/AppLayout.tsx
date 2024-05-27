import { Outlet } from 'react-router-dom';

export const AppLayout = () => {
   return (
      <div className="wrapper">
         <header>Header</header>
         <main>
            <Outlet />
         </main>
         <footer>Footer</footer>
      </div>
   );
};
