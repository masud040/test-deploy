import FeatureBanner from "@/public/images/featurebanner.jpg";
export default function Feature() {
  return (
    <section
      className="bg-no-repeat bg-cover flex-center bg-blend-multiply"
      style={{ backgroundImage: `url(${FeatureBanner.src})` }}
    >
      <div>
        <div></div>
        <div>
          <p></p>
          <p></p>
        </div>
      </div>
    </section>
  );
}
