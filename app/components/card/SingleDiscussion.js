import { getRelativeDays } from "@/app/lib/getRelativeDays";
import ProfileImage from "@/public/images/profile.png";
import Image from "next/image";
export default function SingleDiscussion({ discussion }) {
  const relativeDate = getRelativeDays(discussion.date);
  console.log(discussion);
  return (
    <div className="relative space-y-4">
      <div className="flex items-start justify-start gap-3">
        <Image
          src={ProfileImage}
          height={30}
          width={30}
          alt={discussion.user}
          className="border rounded-full border-primary-dark"
        />
        <div className="space-y-1">
          <p className="mr-1 body-semibold">{discussion.user}</p>{" "}
          <p className="body">{discussion?.comment}</p>
          <div className="flex gap-6 caption1-semibold text-[#656565]">
            <p>{relativeDate} </p>
            <button>Like</button>
            <p>Reply</p>
          </div>
        </div>
      </div>
      {discussion.replies &&
        discussion.replies.map((reply, index) => (
          <div key={`reply-${index}`} className="absolute left-6">
            <SingleDiscussion discussion={reply} />
          </div>
        ))}
    </div>
  );
}
