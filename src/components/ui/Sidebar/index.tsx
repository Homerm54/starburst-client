
const SideBarMenu = () : JSX.Element | null => {

  return(
    <h1>SideBarMenu</h1>
  );
};

const SidebarItem = (): JSX.Element => {
  return <h3>Hola</h3>;
};

export default SideBarMenu;

SideBarMenu.Item = SidebarItem;
