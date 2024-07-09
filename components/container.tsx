import TextInput from "./text-input";
import PropTypes from "prop-types";

const Container = ({ className = "" }) => {
  return (
    <div
      className={`w-[400px] flex flex-col items-center justify-start gap-[64px] max-w-[400px] text-left text-sm text-d-colors-base-neutral font-ibm-plex-mono mq450:gap-[32px] mq450:max-w-full ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[12px] text-5xl">
        <div className="self-stretch relative leading-[150%] font-medium mq450:text-lgi mq450:leading-[29px]">
          Let’s Generate Your Research Model Canvas
        </div>
        <div className="self-stretch relative text-sm leading-[150%] text-lightslategray">
          <p className="m-0">
            Answer 5 quick questions to generate your research model canvas.
          </p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">It only takes a couple minutes!</p>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full">
        <TextInput
          label="What is your degree program?"
          placeholder="Example: Computer Science"
        />
        <TextInput
          label="What is your specialization study?"
          placeholder="Example: Artificial Intelligence"
        />
        <TextInput
          label="If you already have, what is your favorite research topic?"
          placeholder="Example: AI implementation in health industry"
        />
        <TextInput
          label="If you already have, what is your method for this research?"
          placeholder="Example: Computer Vision"
        />
      </div>
      <div className="self-stretch rounded-t-borders-radius-rounded-lg bg-d-colors-semantic-primary flex flex-row items-center justify-center py-3 px-5 gap-[8px] text-d-colors-semantic-primary-content border-[1px] border-solid border-d-colors-semantic-primary">
        <img
          className="h-5 w-5 relative hidden min-h-[20px]"
          alt=""
          src="/lefticon.svg"
        />
        <div className="relative leading-[20px] inline-block min-w-[68px]">
          Generate
        </div>
        <img
          className="h-5 w-5 relative hidden min-h-[20px]"
          alt=""
          src="/righticon.svg"
        />
        <div className="rounded-t-borders-radius-rounded-full bg-t-colors-base-white hidden flex-row items-center justify-center py-t-spacing-05 px-t-spacing-3 text-center text-xs text-d-colors-base-neutral font-daisyui-text-xs">
          <div className="relative leading-[16px]">Badge</div>
        </div>
      </div>
    </div>
  );
};

Container.propTypes = {
  className: PropTypes.string,
};

export default Container;
