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

const addHistory = async (history) => {
  try {
    const data = await fetch("http://localhost:3001/history", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(history),
    });
    if (data.status === 201) {
      const history = await data.json();
      return history;
    } else {
      throw new Error("Something went wrong");
    }
  } catch (error) {
    console.error(error);
  }
};

const deleteHistory = async (id) => {
  try {
    const data = await fetch(`http://localhost:3001/history/${id}`, {
      method: "DELETE",
    });
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

const updateHistory = async (id, history) => {
  try {
    const data = await fetch(`http://localhost:3001/history/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(history),
    });
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

export {
  getAllHistory,
  getHistoryById,
  addHistory,
  deleteHistory,
  updateHistory,
};
