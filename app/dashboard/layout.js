import CustomLink from "../components/CustomLink";

const dashboardLayout = ({ children }) => {
  return (
    <div className="flex">
      <nav className="bg-gray-500 h-screen">
        <ul className="p-3 gap-3">
          <li>
            <CustomLink path="/dashboard/analytics#text">Text</CustomLink>
          </li> 
        </ul>
      </nav>
      <div>{children}</div>
    </div>
  );
};

export default dashboardLayout;
