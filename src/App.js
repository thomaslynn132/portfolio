import React, { useState, useEffect, Suspense } from "react";
import "./App.css";
import Loading from "./Pages/Loading/Loading";
import RouterConfig from "./Routing/RouterConfig";
import AnimatedCursor from "react-animated-cursor";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating an asynchronous operation (replace this with your actual async operation)
    const fetchData = async () => {
      try {
        // Perform your asynchronous operation here
        //       // For example, fetching data from an API
        const response = await fetch("your-api-endpoint");
        const data = await response.json();

        // Simulating a delay for demonstration purposes
        //       await new Promise((resolve) => setTimeout(resolve, 5000));

        //       // Set loading to false when the operation is complete
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); // Handle errors and still set loading to false
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div className="App">
        <Suspense fallback={<Loading />}>
          <RouterConfig />
          <AnimatedCursor
            innerSize={40}
            outerSize={50}
            color="red"
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
