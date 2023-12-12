import Editor from "./components/Editor";
import Preview from "./components/Previews";

import "./App.css";
import Layout from "./components/Layout";

const App = () => {
  return (
    <Layout>
      <Editor />
      <Preview />
    </Layout>
  );
};

export default App;
