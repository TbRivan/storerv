import Divider from "./Divider";
import Info from "./Info";

export default function Reached() {
  return (
    <section className="reached pt-50 pb-50">
      <div className="container-fluid">
        <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">
          <Info title="290M+" desc="Players Top Up" />
          <Divider />
          <Info title="12.500" desc="Games Available" />
          <Divider />
          <Info title="99,9%" desc="Happy Players" />
          <Divider />
          <Info title="4.7" desc="Rating Worldwide" />
        </div>
      </div>
    </section>
  );
}
