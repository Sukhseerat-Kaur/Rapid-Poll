import { useRouter } from "next/router";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Header from "../../components/Header";
import { ArrowRight, CopyIcon } from "../../assets/Icons";
import ShareOnWhatsapp from "../../components/SocialButtons/ShareOnWhatsapp";
import ShareOnTwitter from "../../components/SocialButtons/ShareOnTwitter";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import getPoll from "../../services/getPoll";
import { PollType } from "../../interfaces/PollType";
import Spinner from "../../components/Spinner";
import NotFound from "../../components/NotFound";

interface Props {
  host: string | null;
}
export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => ({ props: { host: context.req.headers.host || null } });

const PollCreated = (props: Props) => {
  const router = useRouter();
  const HOST = props.host;
  const BASE_PATH = `https://${HOST}`;
  const KEY: string = router.query.key as string;
  const POLL_URL = `${BASE_PATH}/poll/${KEY}`;

  const [poll, setPoll] = useState<PollType>();
  const [isPollExisting, setIsPollExisting] = useState(true);

  const copyText = async (text: string) => {
    const myPromise = navigator.clipboard.writeText(text);
    toast.promise(
      myPromise,
      {
        loading: "Copying...",
        success: "Copied to Clipboard",
        error: "Error Occurred While Copying",
      },
      { style: { minWidth: "250px" } }
    );
  };

  useEffect(() => {
    const getPollData = async () => {
      try {
        const pollData = await getPoll(KEY);
        if (pollData) {
          setPoll(pollData);
          toast.success("Poll Created Successfully");
        } else {
          setIsPollExisting(false);
        }
      } catch {
        toast.error("Something Went Wrong");
      }
    };
    getPollData();
  }, [KEY]);

  if (!isPollExisting) {
    return (
      <div className="flex-1 bg-gray-100 items-center justify-center">
        <NotFound message="Poll doesn't exists" />
      </div>
    );
  }

  if (!poll && isPollExisting) {
    return (
      <div className="flex-1 flex items-center justify-center min-h-screen">
        <Spinner height="28px" width="28px" />
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen max-h-max flex flex-col">
      <Head>
        <title>New</title>
      </Head>
      <Header />
      <main className="flex-1 flex justify-center items-center shadow-sm flex-col gap-10">
        <div className="text-3xl font-bold mb-14 text-red-600">
          Poll Created Successfully
        </div>
        <div className="w-1/2 flex flex-col gap-10">
          <div className="w-full h-max content shadow-md rounded-md bg-white p-4 pb-2 flex flex-col justify-center gap-5">
            <div className="font-semibold text-gray-700 text-xl">
              Copy the link to share your poll{" "}
              <span role="img" aria-label="below">
                👇
              </span>
            </div>
            {/* <input
            readOnly
            type="text"
            value={POLL_URL}
            className="w-full bg-gray-100 p-2 rounded-md pr-4"
          /> */}

            <div
              onClick={(e: any) => copyText(e.target.innerText)}
              className="tooltip-parent w-full bg-gray-100 hover:bg-gray-300 p-3 rounded-md pr-4 text-gray-600 flex justify-between cursor-pointer text-lg overflow-hidden transition-all"
            >
              <div>{POLL_URL}</div>
              <CopyIcon className="h-6 w-6 text-red-500" />
            </div>
            <a
              className="flex justify-end mt-3 text-red-500 font-semibold"
              href={POLL_URL}
            >
              <span className="flex items-center gap-1 mt-1">
                Visit your poll <ArrowRight className="h-4 w-4" />
              </span>
            </a>
          </div>

          <div className="flex w-full gap-6 p-4 justify-center flex-wrap">
            <ShareOnWhatsapp message={`Vote on this poll ${POLL_URL}`} />
            <ShareOnTwitter message={`Vote on this pole&url=${POLL_URL}`} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default PollCreated;
