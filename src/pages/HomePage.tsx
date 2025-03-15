import { useEffect, useRef, useState } from "react";
// import { IoChatboxEllipsesOutline } from "react-icons/io5";
// import { GoThumbsdown, GoThumbsup } from "react-icons/go";
// import { Link } from "react-router-dom";
import { InputField } from "../components/InputField/InputField";
import { supabase } from "../db/config";
import { Link } from "react-router-dom";

const posts = [
  {
    id: 1,
    title: "Breaking News",
    author: "Alice Smith",
    comments: [],
    votes: 3,
  },
  {
    id: 2,
    title: "Tech Trends 2025",
    author: "Bob Johnson",
    comments: [],
    votes: 7,
  },
  {
    id: 3,
    title: "Healthy Living Tips",
    author: "Alice Smith",
    comments: [],
    votes: 5,
  },
  {
    id: 4,
    title: "Space Exploration Updates",
    author: "Charlie Brown",
    comments: [],
    votes: 10,
  },
  {
    id: 5,
    title: "AI and the Future",
    author: "Diana Green",
    comments: [],
    votes: 2,
  },
  {
    id: 6,
    title: "Cooking Made Easy",
    author: "Emily White",
    comments: [],
    votes: 8,
  },
  {
    id: 7,
    title: "Breaking News",
    author: "Alice Smith",
    comments: [],
    votes: 3,
  },
  {
    id: 8,
    title: "Tech Trends 2025",
    author: "Bob Johnson",
    comments: [],
    votes: 7,
  },
  {
    id: 9,
    title: "Healthy Living Tips",
    author: "Alice Smith",
    comments: [],
    votes: 5,
  },
  {
    id: 10,
    title: "Space Exploration Updates",
    author: "Charlie Brown",
    comments: [],
    votes: 10,
  },
  {
    id: 11,
    title: "AI and the Future",
    author: "Diana Green",
    comments: [],
    votes: 2,
  },
  {
    id: 12,
    title: "Cooking Made Easy",
    author: "Emily White",
    comments: [],
    votes: 8,
  },
  {
    id: 13,
    title: "AI and the Future",
    author: "Diana Green",
    comments: [],
    votes: 2,
  },
  {
    id: 14,
    title: "Cooking Made Easy",
    author: "Emily White",
    comments: [],
    votes: 8,
  },
];


interface TopicsInterface {
  id: number;
  title: string;
  author: string;
  votes: [];
}

export const HomePage = () => {
  // const [topics, setTopics] = useState<TopicsInterface[]>([]);
  const [topics, setTopics] = useState(posts);
  const [term, setTerm] = useState("");

  const handleOnChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(event.target.value);
  };

  // const handlePositiveVote = (postId: number) => {
  //   setTopics((oldValue) =>
  //     oldValue.map((value) =>
  //       value.id === postId ? { ...value, votes: value.votes + 1 } : value
  //     )
  //   );
  // };

  // const handleNegaviteVote = (postId: number) => {
  //   setTopics((oldValue) =>
  //     oldValue.map((value) =>
  //       value.id === postId ? { ...value, votes: value.votes - 1 } : value
  //     )
  //   );
  // };

  // useEffect(() => {
  //   async function fetchData() {
  //     const { data, error } = await supabase.from("posts").select("*");

  //     if (error) {
  //       console.log('error', error);
  //       return;
  //     }

  //     setTopics(data);
  //   }

  //   fetchData();
  // }, []);


  const handlePositiveVote = async (postId: number) => {
    const updatedTopics = topics.map((value) =>
      value.id === postId ? { ...value, votes: value.votes + 1 } : value
    );
    setTopics(updatedTopics);

    const { data, error } = await supabase
      .from("posts")
      .update({ votes: updatedTopics.find((t) => t.id === postId)?.votes })
      .eq("id", postId);

    if (error) {
      console.error("Грешка при записване на вота:", error.message);
    } else {
      console.log("Вотът е записан успешно!", data);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4 flex flex-col shadow-md">
      <InputField handleOnChangeInput={handleOnChangeInput} term={term} />

      <div className="flex flex-col gap-2">
        {topics
          .sort((a, b) => b.votes - a.votes)
          .map((topic) => (
            <div
              key={topic.id}
              className="flex text-center gap-2 border rounded-md p-2"
            >
              <div className="w-full flex flex-col">
                <div className="flex gap-1">
                  <span className="font-bold italic">{topic.title}</span>
                </div>

                <div className="flex gap-2">
                  <div className="flex gap-1">
                    <span>author:</span>

                    <span className="italic font-bold">{topic.author}</span>
                  </div>

                  <div className="font-bold">{topic.votes}</div>

                  <button className="hover:cursor-pointer">
                    {/* <Link to={`/${topic.id}`}>
                      <IoChatboxEllipsesOutline
                       className="w-5 h-5" />
                    </Link> */}
                  </button>

                  <button
                    onClick={() => handlePositiveVote(topic.id)}
                    className="hover:cursor-pointer"
                  >
                    {/* <GoThumbsup className="w-5 h-5" /> */}
                  </button>

                  <button
                    onClick={() => handlePositiveVote(topic.id)}
                    className="hover:cursor-pointer"
                  >
                    dd
                    {/* <GoThumbsdown className="w-5 h-5" /> */}
                  </button>
                </div>
              </div>

              <div className="flex justify-end w-full">
                <span
                  className={`${topic.votes >= 8 ? "bg-red-400" : ""
                    } p-2 rounded`}
                >
                  {topic.votes >= 8 ? "hot topic" : ""}
                </span>
              </div>
            </div>
          ))}
      </div>

      {/* {topics.sort((a, b) => b.votes - a.votes).map((topic) => (
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <div>
              {topic.author}
            </div>

            <div>
              author:
              <span>
                {topic.author}
              </span>
            </div>

            <div>
              {topic.votes}
            </div>
          </div>

          {topic.votes > 8 && <div className={`${topic.votes > 8 ? 'bg-red-500 rounded-md text-white' : ''} p-1 flex flex-col justify-center`}>
            hot topic
          </div>}
        </div>
      ))} */}
    </div>
  );
};
