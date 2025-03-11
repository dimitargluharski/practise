import { useNavigate } from "react-router-dom";

export const CreateNewTopicPage = () => {
  const navigate = useNavigate();

  const handleCreateTopic = (event: any) => {
    event.preventDefault();
    navigate("/");
  };

  return (
    <div>
      <form action="" className="flex flex-col gap-3">
        <div className="w-full">
          <label htmlFor="topic">
            <input type="text" placeholder="Topic..." className="w-full p-2" />
          </label>
        </div>

        <div>
          <label htmlFor="topic-desc">
            <textarea
              name="topic-desc"
              id="topic-desc"
              placeholder="Description..."
              className="w-full p-2"
            ></textarea>
          </label>
        </div>

        <button
          onClick={handleCreateTopic}
          className="w-full bg-blue-500 text-white p-2 hover:bg-blue-600"
        >
          Create
        </button>
      </form>
    </div>
  );
};
