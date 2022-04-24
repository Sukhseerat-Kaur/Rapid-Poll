import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useCallback, useState } from "react";
import { ChevronDoubleRight, PlusIcon } from "../assets/Icons";
import Header from "../components/Header";
import OptionInput from "../components/OptionInput";
import Toggler from "../components/Toggler";
import useUid from "../Hooks/useUid";
import { OptionType, PollType } from "../interfaces/PollType";

const Home: NextPage = () => {
  const getId = useUid();
  const [showDateTimeInput, setShowDateTimeInput] = useState(false);
  const [data, setData] = useState<PollType>({
    question: "",
    options: [
      { id: getId(), name: "", votes: 0 },
      { id: getId(), name: "", votes: 0 },
    ],
    totalVotes: 0,
    expireAfter: null,
  });

  const handleChange = useCallback((val: string, index: number) => {
    setData((data) => {
      let newOptions = [...data.options];
      newOptions[index].name = val;
      return { ...data, options: newOptions };
    });
  }, []);

  const handleDelete = useCallback((id: number) => {
    setData((data) => {
      return {
        ...data,
        options: data.options.filter((opt) => opt.id !== id),
      };
    });
  }, []);

  const addOption = () => {
    setData({
      ...data,
      options: [...data.options, { id: getId(), name: "", votes: 0 }],
    });
  };

  const createPoll = () => {
    console.log(data);
  };

  return (
    <div className="bg-gray-100 min-h-screen max-h-max">
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <main className="container mx-auto w-3/5 py-8">
        <div className="text-3xl font-bold mb-6 text-gray-700">
          Create a New Poll
        </div>
        <form>
          <div className="flex flex-col gap-5">
            <div>
              <div className="text-xl font-semibold text-gray-500 mb-2">
                Question
              </div>
              <textarea
                required
                placeholder="Which is your favourite programming language?"
                value={data.question}
                onChange={(e) => setData({ ...data, question: e.target.value })}
                name="question"
                className="w-full mb-2 p-4 h-28 text-lg text-gray-700 placeholder-gray-300 rounded-md resize-none outline-none shadow-sm focus:shadow-md focus:scale-105 transition duration-300 font-medium"
              />

              {/* -------expire after a fixed time starts-------- */}

              <div className="w-full flex justify-end gap-5">
                <Toggler
                  label="Auto expire after a fixed time"
                  setShowDateTimeInput={setShowDateTimeInput}
                />
                {showDateTimeInput && (
                  <input
                    type="datetime-local"
                    value={data.expireAfter ? data.expireAfter : ""}
                    onChange={(e) =>
                      setData({ ...data, expireAfter: e.target.value })
                    }
                    className="rounded-md p-2 cursor-pointer"
                  />
                )}
              </div>

              {/* -------expire after a fixed time starts ends -------- */}
            </div>
            {data.options.map((opt, index) => (
              <OptionInput
                key={opt.id}
                value={opt.name}
                id={opt.id}
                index={index}
                handleChange={handleChange}
                handleDelete={handleDelete}
                showDelete={data.options.length > 2}
              />
            ))}

            <div className="mt-2 flex gap-5">
              <div
                onClick={addOption}
                className="flex items-center gap-2 bg-red-500 w-max py-2 px-3 rounded text-white font-medium cursor-pointer text-xl"
              >
                Add Option <PlusIcon className="h-5 w-5" />
              </div>
              <div
                onClick={createPoll}
                className="flex items-center gap-2 bg-blue-600 w-max py-2 px-3 rounded text-white font-medium cursor-pointer text-xl"
              >
                Create Poll <ChevronDoubleRight className="h-5 w-5" />
              </div>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Home;
