import MenuList from "./menu-list";
export default function Treeview({ menus }) {
  console.log(menus.length);
  return (
    <div className="tree-view-container">
      <MenuList list={menus} />
    </div>
  );
}
