import React, { Suspense } from "react";
import "./App.css";
import Loading from "./Pages/Loading/Loading";
import RouterConfig from "./Routing/RouterConfig";
import AnimatedCursor from "react-animated-cursor";
import DayOrNightMode from "./Components/DayOrNightMode";

function App() {
  return (
    <>
      <div className="App">
        <DayOrNightMode />
        <Suspense fallback={<Loading />}>
          <RouterConfig />
          <AnimatedCursor
            innerSize={40}
            outerSize={50}
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
