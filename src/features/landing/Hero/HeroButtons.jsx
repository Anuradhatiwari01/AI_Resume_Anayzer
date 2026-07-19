import { Link } from "react-router-dom";
import Button from "../../../components/common/Button";

export default function HeroButtons() {
  return (
    <div className="mt-10 flex flex-wrap gap-4">

      <Link to="/upload">
        <Button className="px-8">
          Upload Resume
        </Button>
      </Link>

      <a href="#live-demo">
        <Button
          variant="outline"
          className="px-8"
        >
          View Demo
        </Button>
      </a>

    </div>
  );
}