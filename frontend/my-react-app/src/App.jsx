import { useState } from "react";
import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { ViewTasks } from "./components/ViewTasks";
function App() {
  return (
    <>
    <div>
      <Header />

      <ViewTasks />
    </div>
    </>
  );
}

export default App;
