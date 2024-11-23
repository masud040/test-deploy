import SingleDiscussion from "../card/SingleDiscussion";
export default function ProductDiscussion({ discussions }) {
  return (
    <div>
      {discussions?.length > 0 ? (
        discussions.map((discussion, index) => (
          <SingleDiscussion
            key={`discussion-${index}`}
            discussion={discussion}
          />
        ))
      ) : (
        <div>
          <input type="text" />
        </div>
      )}
    </div>
  );
}
