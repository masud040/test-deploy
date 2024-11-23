import LoadingIcon from "@/public/images/icons/loading.svg";
import Image from "next/image";
export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 mx-auto mt[56px] md:mt-[80px] cursor-wait bg-black/30">
      <div className="flex h-[700px] items-center justify-center">
        <div className="text-3xl w-fit text-primary-dark">
          <Image src={LoadingIcon} alt="Loading..." width={200} height={200} />
        </div>
      </div>
    </div>
  );
}
