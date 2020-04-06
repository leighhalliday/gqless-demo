import React, { Suspense } from "react";
import { query } from "./graphql";
import { graphql } from "@gqless/react";

const App = () => {
  return (
    <Suspense fallback={<span>Loading... very slow, sorry!</span>}>
      <Launches />
    </Suspense>
  );
};

const Launches = graphql(() => {
  return (
    <div>
      {query.launchesPast({ limit: 10 }).map((launch) => (
        <div key={launch.id}>
          <h2>{launch.mission_name}</h2>

          <ul>
            {launch.ships.map((ship) => (
              <li
                key={ship.id}
                onClick={() => {
                  ship.clicked();
                }}
              >
                <h3>
                  {ship.name} - {ship.model}
                </h3>
                {ship.image ? (
                  <img
                    src={ship.image}
                    alt={ship.name}
                    style={{ width: "200px" }}
                  />
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
});

export default App;
