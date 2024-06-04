import Button from "../components/Button";
import Input from "../components/Input";
import Modal from "../components/modal";

export default function SignUpPage() {
  return (
    <Modal
      width={375}
      height={434}
      title="Sign Into App"
      desc="Please enter your details to continue."
    >
      <form className="flex flex-col">
        <div className="flex flex-col gap-y-4 mb-[32px]">
          <Input
            type="text"
            placeholder="Enter Your Name"
            width={325}
            height={44}
          />
          <Input
            type="email"
            placeholder="someone@example.com"
            width={325}
            height={44}
          />
          <Input
            type="password"
            placeholder="Enter Password"
            width={325}
            height={44}
          />
          <label className="flex flex-row gap-x-[5px]">
            <input
              type="checkbox"
              className="checked:bg-custom-grey cursor-pointer"
            />
            <span className="text-custom-grey">
              I agree with <b>terms</b> and <b>policies.</b>
            </span>
          </label>
        </div>

        <div className="flex flex-col gap-y-[16px]">
          <Button type="submit" color="#4F4F4F" width="100%" fontColor="white">
            Sign Up
          </Button>
          <Button type="button" color="white" width="100%">
            Go To Log In
          </Button>
        </div>
      </form>
    </Modal>
  );
}
