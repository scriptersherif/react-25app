import "./App.css";
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
function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
