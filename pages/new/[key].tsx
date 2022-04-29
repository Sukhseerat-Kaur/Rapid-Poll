import { useRouter } from "next/router";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Header from "../../components/Header";
import { Copy } from "../../assets/Icons";

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

  return (
    <div className="bg-gray-100 min-h-screen max-h-max flex flex-col">
      <Head>
        <title>New</title>
      </Head>
      <Header />
      <main className="flex-1 flex justify-center items-center shadow-sm">
        <div className="w-2/5 h-max content shadow-sm rounded-md bg-white p-4 flex flex-col justify-center gap-3">
          <div className="font-semibold text-gray-700 text-lg">
            Copy the link to share your poll
          </div>
          {/* <input
            readOnly
            type="text"
            value={POLL_URL}
            className="w-full bg-gray-100 p-2 rounded-md pr-4"
          /> */}

          <div className="tooltip-parent w-full bg-gray-100 hover:bg-gray-200 p-3 rounded-md pr-4 text-gray-600 flex justify-between cursor-pointer">
            <div>{POLL_URL}</div>
            <Copy className="h-6 w-6 text-red-500" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default PollCreated;
