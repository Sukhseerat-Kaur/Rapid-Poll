import { useRouter } from "next/router";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Header from "../../components/Header";
import {
  ArrowRight,
  CopyIcon,
  TwitterIcon,
  WhatsAppIcon,
} from "../../assets/Icons";
import ShareOnWhatsapp from "../../components/SocialButtons/ShareOnWhatsapp";
import ShareOnTwitter from "../../components/SocialButtons/ShareOnTwitter";

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
  const KEY = router.query.key;
  const POLL_URL = `${BASE_PATH}/poll/${KEY}`;

  const copyText = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then((success) => console.log("text copied"));
  };

  return (
    <div className="bg-gray-100 min-h-screen max-h-max flex flex-col">
      <Head>
        <title>New</title>
      </Head>
      <Header />
      <main className="flex-1 flex justify-center items-center shadow-sm flex-col gap-10">
        <div className="w-2/5 flex flex-col gap-5">
          <div className="w-full h-max content shadow-md rounded-md bg-white p-4 flex flex-col justify-center gap-3">
            <div className="font-semibold text-gray-700 text-lg">
              Copy the link to share your poll
            </div>
            {/* <input
            readOnly
            type="text"
            value={POLL_URL}
            className="w-full bg-gray-100 p-2 rounded-md pr-4"
          /> */}

            <div
              onClick={(e: any) => copyText(e.target.innerText)}
              className="tooltip-parent w-full bg-gray-100 hover:bg-gray-200 p-3 rounded-md pr-4 text-gray-600 flex justify-between cursor-pointer"
            >
              <div>{POLL_URL}</div>
              <CopyIcon className="h-6 w-6 text-red-500" />
            </div>
            <a
              className="flex justify-end mt-3 text-red-500 font-semibold text-sm"
              href={POLL_URL}
            >
              <span className="flex items-center gap-1">
                Visit your poll <ArrowRight className="h-4 w-4" />
              </span>
            </a>
          </div>

          <div className="flex w-full gap-6 p-4 justify-center flex-wrap">
            {/* <a
                className="bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600 flex items-center gap-1 font-semibold w-1/4"
                type="button"
                target="_blank"
                rel="noreferrer"
                href={encodeURI(
                  `https://web.whatsapp.com/send?text=Vote on this poll ${POLL_URL}`
                )}
                data-action="share/whatsapp/share"
              >
                <WhatsAppIcon className="w-8 h-8" />
                <span>WhatsApp</span>
              </a>

              <a
                className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 flex items-center gap-1 font-semibold w-1/4"
                type="button"
                target="_blank"
                rel="noreferrer"
                href={encodeURI(
                  `https://twitter.com/intent/tweet?text=Vote on this pole&url=${POLL_URL}`
                )}
                data-action="share/twitter/share"
              >
                <TwitterIcon className="w-8 h-8" />
                <span>Twitter</span>
              </a> */}

            <ShareOnWhatsapp message={`Vote on this poll ${POLL_URL}`} />
            <ShareOnTwitter message={`Vote on this pole&url=${POLL_URL}`} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default PollCreated;
