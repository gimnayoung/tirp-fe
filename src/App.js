import React from "react";
import AppRouter from "./routers/AppRouter";
import AppLayout from "./layout/appLayout";
import store from "./reducer/store";

function App() {
  let unsubscribe = store.subscribe(() =>
  console.log(store.getState(),"상태알려줌")
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
