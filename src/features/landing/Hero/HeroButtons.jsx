import Button from "../../../components/common/Button";

export default function HeroButtons() {
  return (
    <div className="mt-10 flex flex-wrap gap-4">

      <Button className="px-8">
        Upload Resume
      </Button>

      <Button
        variant="outline"
        className="px-8"
      >
        View Demo
      </Button>

    </div>
  );
}