import { useContext } from "react";

import Menu from "./components/Menu";
import Layout from "./components/Layout";
import WorkSpace from "./components/Workspace/indext";
import Editor from "./components/Workspace/Editor";
import Preview from "./components/Workspace/Previews";
import NotesSection from "./components/Notes";

import AppContext from "./contexts/AppContext";
import "./App.css";

const App = () => {
  const { edit } = useContext(AppContext);

  return (
    <Layout>
      <Menu />
      <NotesSection />
      <WorkSpace>
        {edit.isEdit && <Editor />}
        {!edit.isEdit && <Preview />}
      </WorkSpace>
    </Layout>
  );
};

export default App;
