import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { GoThumbsdown, GoThumbsup } from "react-icons/go";
import { Link } from "react-router-dom";

interface TopicCardProps {
  id: number;
  title: string;
  author: string;
  comments: any[];
  votes: number;
  handleUpVote: (topicId: number) => void;
  handleDownVote: (topicId: number) => void;
}

export const TopicCard = ({ id, title, author, comments, votes, handleUpVote, handleDownVote }: TopicCardProps) => {
  return (
    <div key={id} className="w-full flex gap-2 items-center shadow-md rounded-md p-2">
      <div className="w-8 h-8 bg-green-500 rounded-full border-2 " />

      <div className="w-full">
        <header>
          <h2 className="font-bold">
            {title}
          </h2>
        </header>

        <footer className="w-full flex items-center justify-between">
          <div>
            <span className="italic">
              {author}
            </span>
          </div>

          <div className="flex items-center gap-1">
            <span className="hover:cursor-pointer flex gap-1 items-center">
              {comments.length}
              <Link to={`/comments-post-id-${id}`}>
                <IoChatboxEllipsesOutline className="w-5 h-5" />
              </Link>
            </span>

            <span className="hover:cursor-pointer" onClick={() => handleUpVote(id)}>
              <GoThumbsup className="w-5 h-5" />
            </span>

            <span className={`${votes > 7 ? 'text-red-500' : ''} px-1 font-bold`}>
              {votes}
            </span>

            <span className="hover:cursor-pointer" onClick={() => handleDownVote(id)}>
              <GoThumbsdown className="w-5 h-5" />
            </span>
          </div>
        </footer>
      </div>
    </div>
  )
}