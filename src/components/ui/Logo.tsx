import Image from "next/image";
import logo from "../../../public/brand/vo2-logo.png";

type Props = {
  eager?: boolean;
  // The wordmark is red on transparent; on deep grounds it sits on an ivory chip.
  chip?: boolean;
};

export function Logo({ eager = false, chip = false }: Props) {
  return (
    <span className={`inline-flex ${chip ? "rounded-[4px] bg-ivory px-3 py-[7px]" : ""}`}>
      <Image
        src={logo}
        alt="VO2"
        loading={eager ? "eager" : "lazy"}
        className={chip ? "h-7 w-auto" : "h-9 w-auto"}
        sizes="128px"
      />
    </span>
  );
}
