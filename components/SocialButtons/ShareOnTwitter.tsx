import { TwitterIcon } from "../../assets/Icons";

const ShareOnTwitter = ({ message }: { message: string }) => {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      type="button"
      href={encodeURI(`https://twitter.com/intent/tweet?text=${message}`)}
      className="bg-blue-500 rounded-md hover:bg-blue-600 flex px-4 py-2 gap-3 text-white transition-all items-center justify-center min-w-fit w-1/3"
    >
      <TwitterIcon className="h-6 w-6" />
      <span>Share on Twitter</span>
    </a>
  );
};

export default ShareOnTwitter;
