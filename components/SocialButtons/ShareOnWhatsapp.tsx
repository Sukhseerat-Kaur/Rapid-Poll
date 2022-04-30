import { WhatsAppIcon } from "../../assets/Icons";

const ShareOnWhatsapp = ({ message }: { message: string }) => {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      type="button"
      href={encodeURI(`whatsapp://send?text=${message}`)}
      className="bg-green-500 rounded-md hover:bg-green-600 flex px-4 py-2 gap-3 text-white transition-all items-center justify-center min-w-fit w-2/5"
    >
      <WhatsAppIcon className="h-6 w-6" />
      <span>Share on Whatsapp</span>
    </a>
  );
};

export default ShareOnWhatsapp;
