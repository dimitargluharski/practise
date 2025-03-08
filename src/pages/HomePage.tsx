import { useEffect, useState } from "react";
import { InputField } from "../components/inputField/InputField"
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { GoThumbsdown, GoThumbsup } from "react-icons/go";
import { Link } from "react-router-dom";

const posts = [
  { id: 1, title: 'Breaking News', author: 'Alice Smith', comments: [], votes: 3 },
  { id: 2, title: 'Tech Trends 2025', author: 'Bob Johnson', comments: [], votes: 7 },
  { id: 3, title: 'Healthy Living Tips', author: 'Alice Smith', comments: [], votes: 5 },
  { id: 4, title: 'Space Exploration Updates', author: 'Charlie Brown', comments: [], votes: 10 },
  { id: 5, title: 'AI and the Future', author: 'Diana Green', comments: [], votes: 2 },
  { id: 6, title: 'Cooking Made Easy', author: 'Emily White', comments: [], votes: 8 },
];

export const HomePage = () => {
  const [topics, setTopics] = useState(posts);
  const [term, setTerm] = useState('');
  const [showMore, setShowMore] = useState(3);

  const handleOnChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(event.target.value);
  }

  const handlePositiveVote = (postId: number) => {
    setTopics((oldValue) => oldValue.map((value) => value.id === postId ? { ...value, votes: value.votes + 1 } : value))
  }

  const handleNegaviteVote = (postId: number) => {
    setTopics((oldValue) => oldValue.map((value) =>
      value.id === postId
        ? { ...value, votes: value.votes - 1 }
        : value
    ))
  }

  const handleComment = (postId: number, title: string) => {
    console.log(postId);
    console.log(title);
  }

  const handleShowMoreTopics = () => {
    setShowMore((oldValue) => oldValue + showMore);
  }

  return (
    <div className="max-w-3xl mx-auto p-4 flex flex-col shadow-md">
      <InputField handleOnChangeInput={handleOnChangeInput} term={term} />

      <div className="flex flex-col gap-2">
        {topics.sort((a, b) => b.votes - a.votes).map((topic) => (
          <div key={topic.id} className="flex flex-col gap-2 border rounded-md p-2">
            <div className="flex gap-1">
              <span className="font-bold italic">
                {topic.title}
              </span>
            </div>

            <div className="flex gap-2">
              <div className="flex gap-1">
                <span>
                  author:
                </span>

                <span className="italic font-bold">
                  {topic.author}
                </span>
              </div>

              <div className="font-bold">
                {topic.votes}
              </div>

              <button onClick={() => handleComment(topic.id, topic.title)} className="hover:cursor-pointer">
                <Link to={`/${topic.id}`}>
                  <IoChatboxEllipsesOutline className="w-5 h-5" />
                </Link>
              </button>

              <button onClick={() => handlePositiveVote(topic.id)} className="hover:cursor-pointer">
                <GoThumbsup className="w-5 h-5" />
              </button>

              <button onClick={(() => handleNegaviteVote(topic.id))} className="hover:cursor-pointer">
                <GoThumbsdown className="w-5 h-5" />
              </button>

            </div>
          </div>
        ))}

      </div>
    </div>
  )
}