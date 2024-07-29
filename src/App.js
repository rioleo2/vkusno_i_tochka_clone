import Header from "./components/header";
import ImageSlider from "./components/ImageSlider";
import Subscribe from "./components/subscribe";
import Catalog from "./components/catalog";
import Scrolling from "./components/boxshadow";
import {SLIDES} from "./const/slides"

import "./App.css"


function App() {
  Scrolling();
  return (
    <body>
      <Header></Header>
      <main className="main">
        <ImageSlider slideUrls={SLIDES}></ImageSlider>
        <Subscribe></Subscribe>
        <Catalog></Catalog>
        <Subscribe></Subscribe>
      </main>
    </body>
  );
}



export default App;
