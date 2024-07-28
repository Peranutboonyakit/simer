import classNames from "classnames";

interface PrimaryButtonProps {
  title: string;
  width: "sm" | "md" | "lg" | "";
  rounded?: string;
  onClick: () => void;
}

const PrimaryButton = (props: PrimaryButtonProps) => {
  const sizeButton = () => {
    switch (props.width) {
      case "sm":
        return "h-[40px] w-[100px]";
      case "md":
        return "h-[50px] w-[150px]";
      case "lg":
        return "h-[60px] w-[180px]";
      default:
        return "h-[40px] w-full";
    }
  };

  const roundedButton = () => {
    return props.rounded ? props.rounded : "rounded-[5px]";
  };

  return (
    <button
      className={classNames(
        `p-2 font-extrabold bg-primary-200 hover:bg-primary-100 z-[2] transition-all`,
        sizeButton(),
        roundedButton()
      )}
      onClick={props.onClick}
    >
      <p className="text-white">{props.title}</p>
    </button>
  );
};

export default PrimaryButton;
