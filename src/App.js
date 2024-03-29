import React from "react";
import AppRouter from "./routers/AppRouter";
import AppLayout from "./layout/appLayout";
import store from "./reducer/store";
import "./index.css"

function App() {
  let unsubscribe = store.subscribe(() =>
  {}
);
  return (
    <div>
      <AppLayout>
        <AppRouter/>
      </AppLayout>
    </div>
  );
}

export default App;
