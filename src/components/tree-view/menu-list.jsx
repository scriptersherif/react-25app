import MenuItem from "./menu-item";
export default function MenuList({ list }) {
  console.log(list.length);
  return (
    <ul className="menu-list-container">
      {list && list.length
        ? list.map((listItem, index) => (
            <MenuItem item={listItem} key={index} />
          ))
        : null}
    </ul>
  );
}
