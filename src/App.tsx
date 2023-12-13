import Editor from "./components/Editor";
import Preview from "./components/Previews";

import "./App.css";
import Layout from "./components/Layout";
import Control from "./components/Controls";
import { useContext } from "react";
import AppContext from "./contexts/AppContext";

const App = () => {
  const { edit } = useContext(AppContext);

  return (
    <Layout>
      {edit.isEdit && <Editor />}
      {!edit.isEdit && <Preview />}
      <Control />
    </Layout>
  );
};

export default App;
