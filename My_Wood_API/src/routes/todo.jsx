import { useEffect, useState } from "react";
import "../global.css";

const fallbackData = [
  { userId: 1, id: 1, title: "Plan the weekend getaway", completed: false },
  { userId: 2, id: 2, title: "Book the cabin for Friday", completed: true },
  { userId: 3, id: 3, title: "Check the trail guide", completed: false },
];

const TODO = () => {
  const [data, setData] = useState(fallbackData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const callAPI = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Unable to fetch from remote API");
      }

      const result = await response.json();
      setData(Array.isArray(result) ? result : fallbackData);
    } catch (err) {
      console.error(err);
      setError("Remote data is unavailable right now, so the sample todo data is being shown.");
      setData(fallbackData);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    callAPI();
  }, []);

  return (
    <section className="todo-page">
      <div className="todo-card">
        <div className="todo-toolbar">
          <div>
            <p className="todo-eyebrow">Task Board</p>
            <h1>Travel checklist</h1>
            <p className="todo-subtitle">Keep track of your latest travel plans and completed actions.</p>
          </div>
          <button className="refresh-btn" onClick={callAPI} disabled={loading}>
            {loading ? "Loading..." : "Refresh data"}
          </button>
        </div>

        {error ? <div className="cms-status todo-status-warning">{error}</div> : null}

        <div className="table-container">
          {loading && !data.length ? (
            <div className="todo-loading">Loading To-Do content...</div>
          ) : data.length > 0 ? (
            <table className="custom-table">
              <thead>
                <tr>
                  <th>User ID</th>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {data.map((item) => (
                  <tr key={item.id}>
                    <td>{item.userId}</td>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>
                      <span className={`status-pill ${item.completed ? "done" : "pending"}`}>
                        {item.completed ? "Completed" : "Pending"}
                      </span>
                    </td>
                    <td>
                      <div className="button-group">
                        <button className="edit-btn">Edit</button>
                        <button className="delete-btn">Delete</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="todo-empty-state">No tasks available yet.</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TODO;