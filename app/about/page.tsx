import BackButton from "@/components/Shared/BackButton";
import { title } from "@/components/Shared/primitives";

export default function AboutPage() {
  return (
    <div>
      <BackButton goToRootPage={false}  />
      <h1 className={title({ color: "yellow" })}>Sobre</h1>
    </div>
  );
}
