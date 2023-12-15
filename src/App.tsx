import { useContext } from "react";

import Menu from "./components/Menu";
import Layout from "./components/Layout";
import Editor from "./components/Editor";
import Preview from "./components/Previews";
import Control from "./components/Controls";
import NotesSection from "./components/Notes";

import AppContext from "./contexts/AppContext";
import "./App.css";

const App = () => {
  const { edit } = useContext(AppContext);

  return (
    <Layout>
      <Menu />
      <NotesSection />
      {edit.isEdit && <Editor />}
      {!edit.isEdit && <Preview />}
      <Control />
    </Layout>
  );
};

export default App;
