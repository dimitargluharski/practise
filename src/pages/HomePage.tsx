import { useEffect, useState } from "react";

import { InputField } from "../components/InputField/InputField";
import { TopicCard } from "./HomePage/Topics";
import db from "../db/firebase";
import { collection, doc, setDoc } from "firebase/firestore";

const posts = [
  { id: 1, title: "Breaking News", author: "Alice Smith", comments: [], votes: 3 },
  { id: 2, title: "Tech Trends 2025", author: "Bob Johnson", comments: [], votes: 7 },
  { id: 3, title: "Healthy Living Tips", author: "Alice Smith", comments: [], votes: 5 },
  { id: 4, title: "Space Exploration Updates", author: "Charlie Brown", comments: [], votes: 10 },
  { id: 5, title: "AI and the Future", author: "Diana Green", comments: [], votes: 2 },
  { id: 6, title: "Cooking Made Easy", author: "Emily White", comments: [], votes: 8 },
  { id: 7, title: "The Rise of Electric Cars", author: "Jack Black", comments: [], votes: 6 },
  { id: 8, title: "Best Travel Destinations", author: "Sophia Lee", comments: [], votes: 9 },
  { id: 9, title: "Mindfulness and Meditation", author: "John Doe", comments: [], votes: 4 },
  { id: 10, title: "Investing in Crypto", author: "Lisa Brown", comments: [], votes: 5 },
  { id: 11, title: "History of the Internet", author: "Tom Hanks", comments: [], votes: 7 },
  { id: 12, title: "Climate Change Solutions", author: "Emma Watson", comments: [], votes: 8 },
  { id: 13, title: "The Art of Photography", author: "Mark Lee", comments: [], votes: 3 },
  { id: 14, title: "Music Industry Trends", author: "Taylor Swift", comments: [], votes: 9 },
  { id: 15, title: "Psychology Behind Habits", author: "Jordan Peterson", comments: [], votes: 6 },
  { id: 16, title: "SpaceX and Mars", author: "Elon Musk", comments: [], votes: 10 },
  { id: 17, title: "Artificial Intelligence Today", author: "Andrew Ng", comments: [], votes: 5 },
  { id: 18, title: "The Future of Work", author: "Bill Gates", comments: [], votes: 7 },
  { id: 19, title: "The Science of Sleep", author: "Matthew Walker", comments: [], votes: 4 },
  { id: 20, title: "Virtual Reality Explained", author: "John Carmack", comments: [], votes: 8 },
];

interface TopicsInterface {
  id: number;
  title: string;
  author: string;
  comments: any[];
  votes: number;
}

export const HomePage = () => {
  const [search, setSearch] = useState("");
  const [filteredPosts, setFilteredPosts] = useState<TopicsInterface[]>(posts);

  const handleOnChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event?.target.value);
  }

  const handleUpVote = (postId: number) => {
    setFilteredPosts((oldValue) => oldValue.map((topic) =>
      topic.id === postId
        ? { ...topic, votes: (topic.votes ?? 0) + 1 }
        : topic
    ))
  }

  const handleDownVote = (postId: number) => {
    setFilteredPosts((oldValue) => oldValue.map((topic) =>
      topic.id === postId
        ? { ...topic, votes: (topic.votes ?? 0) - 1 }
        : topic
    ))
  }

  useEffect(() => {
    if (search.trim() === "") {
      setFilteredPosts(posts);
    } else {
      setFilteredPosts(
        posts.filter((post) =>
          post.title.toLowerCase().includes(search.toLowerCase())
          || post.author.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }, [search]);

  // useEffect(() => {
  //   const fetchDocument = async (collectionName, docId) => {
  //     try {
  //       const docRef = doc(db, collectionName, docId);
  //       const docSnap = await getDoc(docRef);

  //       if (docSnap.exists()) {
  //         console.log("Document data:", docSnap.data());
  //         return docSnap.data();
  //       } else {
  //         console.log("No such document!");
  //         return null;
  //       }
  //     } catch (error) {
  //       console.error("Error fetching document:", error);
  //     }
  //   };

  // }, []);

  return (
    <div className="max-w-3xl mx-auto p-4 flex flex-col shadow-md">
      <InputField handleOnChangeInput={handleOnChangeInput} term={search} />

      {filteredPosts.length ? (
        <div className="flex flex-col gap-1">
          {filteredPosts.map((post) => (
            <TopicCard
              id={post.id}
              title={post.title}
              author={post.author}
              votes={post.votes}
              comments={post.comments}
              handleUpVote={handleUpVote}
              handleDownVote={handleDownVote}
            />
          ))}
        </div>

      ) : 'There are no posts.'}
    </div>
  );
};
