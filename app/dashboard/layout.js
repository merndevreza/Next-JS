
const dashboardLayout = ({children}) => {
   return (
      <div className="flex">
      <nav className="bg-gray-500 h-screen">
        <ul className="p-3 gap-3">
          <li>Analytics</li>
          <li>Settings</li> 
        </ul>
      </nav>
         <div>
         {children}
         </div>
      </div>
   );
};

export default dashboardLayout;