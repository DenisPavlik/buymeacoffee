import { uploadToS3 } from "@/actions/uploadActions";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChangeEvent } from "react";
import toast from "react-hot-toast";

export default function UploadButton({
  onUploadComplete,
}: {
  onUploadComplete: (url: string) => void;
}) {
  async function upload(ev: ChangeEvent<HTMLInputElement>) {
    const target = ev.target;
    if (target.files?.length) {
      const file = target.files[0];
      const formData = new FormData();
      formData.set("file", file);
      const result = await uploadToS3(formData);
      onUploadComplete(result.url);
    }
  }

  return (
    <>
      <label className="bg-white shadow-sm shadow-black/30 px-1.5 py-1 rounded-lg cursor-pointer">
        <FontAwesomeIcon icon={faPencil} />
        <input className="hidden" type="file" onChange={upload} />
      </label>
    </>
  );
}
