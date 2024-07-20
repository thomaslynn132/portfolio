import React, { Suspense } from "react";
import "./App.css";
import Loading from "./Pages/Loading/Loading";
import RouterConfig from "./Components/RouterConfig";
import AnimatedCursor from "react-animated-cursor";

function App() {
  return (
    <>
      <div className="App">
        <Suspense fallback={<Loading />}>
          <RouterConfig />
          <AnimatedCursor
            innerSize={20}
            outerSize={30}
            outerAlpha={0.2}
            innerScale={0.7}
            outerScale={3}
          />
        </Suspense>
      </div>
    </>
  );
}

export default App;
