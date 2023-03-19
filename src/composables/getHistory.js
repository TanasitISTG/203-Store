const getAllHistory = async () => {
  try {
    const data = await fetch("http://localhost:3001/history");

    if (data.ok) {
      const history = await data.json();
      return history;
    } else {
      throw new Error("Something went wrong");
    }
  } catch (error) {
    console.error(error);
  }
};

const getHistoryById = async (id) => {
  try {
    const data = await fetch(`http://localhost:3001/history/${id}`);
    if (data.ok) {
      const history = await data.json();
      return history;
    } else {
      throw new Error("Something went wrong");
    }
  } catch (error) {
    console.error(error);
  }
};

export { getAllHistory, getHistoryById };
