import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { ChevronDoubleRight, PlusIcon } from "../assets/Icons";
import Header from "../components/Header";
import OptionInput from "../components/OptionInput";
import Toggler from "../components/Toggler";
import useUid from "../Hooks/useUid";
import { OptionType, PollType } from "../interfaces/PollType";

const Home: NextPage = () => {
  const getId = useUid();
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState<Array<OptionType>>([
    { id: getId(), name: "", votes: 0 },
    { id: getId(), name: "", votes: 0 },
  ]);

  const data = {
    question: question,
    options: options,
    totalVotes: 0,
  } as PollType;

  return (
    <div className="bg-gray-100 min-h-screen max-h-max">
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <main className="container mx-auto w-3/5 py-8">
        <div className="text-3xl font-semibold mb-6 text-gray-700">
          Create a New Poll
        </div>
        <div className="flex flex-col gap-5">
          <div>
            <textarea
              placeholder="Question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              name="question"
              className="w-full mb-2 p-6 text-lg text-gray-700 placeholder-gray-400 rounded-md resize-none outline-none shadow-md focus:shadow-lg focus:scale-105 transition duration-300 font-medium"
            />
            <div className="w-full flex justify-end">
              <Toggler label="Auto expire after a fixed time" />
            </div>
          </div>
          <OptionInput />
          <OptionInput />

          <div className="mt-2 flex gap-5">
            <div className="flex items-center gap-2 bg-red-500 w-max py-2 px-3 rounded text-white font-medium cursor-pointer text-xl">
              Add Option <PlusIcon className="h-5 w-5" />
            </div>
            <div className="flex items-center gap-2 bg-blue-600 w-max py-2 px-3 rounded text-white font-medium cursor-pointer text-xl">
              Create Poll <ChevronDoubleRight className="h-5 w-5" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
