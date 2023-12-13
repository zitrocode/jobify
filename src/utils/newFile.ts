const createFile = (data: string, filename: string) => {
  try {
    const file = new File([data], `${filename}.md`, { type: "text/plain" });
    return file;
  } catch (e) {
    console.log(e);
  }
};

export default createFile;
