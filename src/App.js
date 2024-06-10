import Accordian from "./components/accordian";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/load-more-data";
import Treeview from "./components/tree-view";
import data from "./components/tree-view/data.js";
import TreeExample from "./components/tree-view-example/index.jsx";
import LightDarkMode from "./components/light-dark";
import ScrollIndicator from "./components/scroll-indicator";
import Tabs from "./components/custom-tabs/Tab.js";
import Github from "./components/github_profile";
import Search_autocomplete from "./components/search-autocomplete/index.jsx";
import Users from "./ArrowFunction.js";
import Tic_Tac_Toe from "./components/tic-tac-toe/index.jsx";
function App() {
  return (
    <div className="Apps">
      {/* <Accordian></Accordian> */}
      {/* <RandomColor></RandomColor> */}
      {/* <StarRating noofStars={10}/> */}
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} limit={10} /> */}
      {/* <LoadMoreData /> */}
      {/* <Treeview menus={data} /> */}
      {/* <TreeExample data={data} /> */}
      {/* <LoadMoreData /> */}
      {/* <LightDarkMode /> */}
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}
      {/* <Tabs /> */}
      {/*<Github /> */}
      {/* <Search_autocomplete /> */}
      {/* <Users /> */}
      <Tic_Tac_Toe />
    </div>
  );
}

export default App;
