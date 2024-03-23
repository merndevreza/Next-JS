
const Template = ({children}) => {
   console.log("Template is a wrapper for this route. It will re-render on every route change. But layout will render only once when the component first time mounts.");
   return (
      <div>
         {children}
      </div>
   );
};

export default Template;