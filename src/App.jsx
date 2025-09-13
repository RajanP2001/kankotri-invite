import React, { useState, useEffect, useRef } from "react";
import FirstPage from "./components/FirstPage";
import SecondPage from "./components/SecondPage";
import HaldiPage from "./components/HaldiPage";
import TilakPage from "./components/TilakPage";
import SangeetPage from "./components/SangeetPage";
import MameruPage from "./components/MameruPage";
import WeddingPage from "./components/WeddingPage";
import ItineraryPage from "./components/ItineraryPage";

import { CSSTransition, TransitionGroup } from "react-transition-group";

import "./App.css";

function App() {
  const [page, setPage] = useState(0);
  const [autoFlipping, setAutoFlipping] = useState(true);

  const pages = [
    { id: "first", component: <FirstPage /> },
    { id: "second", component: <SecondPage /> },
    { id: "haldi", component: <HaldiPage /> },
    { id: "tilak", component: <TilakPage /> },
    { id: "sangeet", component: <SangeetPage /> },
    { id: "mameru", component: <MameruPage /> },
    { id: "wedding", component: <WeddingPage /> },
    { id: "itinerary", component: <ItineraryPage /> },
  ];

  // one ref per page
  const nodeRefs = useRef(pages.map(() => React.createRef()));

  // Auto flip effect
  useEffect(() => {
    if (!autoFlipping) return;

    if (page < pages.length - 1) {
      const timer = setTimeout(() => {
        setPage((p) => p + 1);
      }, 6000);
      return () => clearTimeout(timer);
    } else {
      setAutoFlipping(false); // stop at last page
    }
  }, [page, autoFlipping, pages.length]);

  const showPrev = !autoFlipping && page > 0;
  const showNext = !autoFlipping && page < pages.length - 1;

  return (
    <div className="App">
      <TransitionGroup component={null}>
        <CSSTransition
          key={pages[page].id}
          nodeRef={nodeRefs.current[page]} // ✅ important
          classNames="flip"
          timeout={600}
          unmountOnExit
        >
          <div ref={nodeRefs.current[page]} className="page-container">
            {pages[page].component}
          </div>
        </CSSTransition>
      </TransitionGroup>

      <div className="nav-buttons">
        {showPrev && (
          <button onClick={() => setPage((p) => Math.max(p - 1, 0))}>
            « Previous
          </button>
        )}
        {showNext && (
          <button
            onClick={() => setPage((p) => Math.min(p + 1, pages.length - 1))}
          >
            Next »
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
