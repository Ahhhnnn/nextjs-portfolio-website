import React from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-16 py-24 gap-4 relative">
      {/* <div className="absolute w-80 h-80 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full blur-lg top-full -left-4 transform -translate-x-1/2 -translate-y-1/2"></div> */}

      <div className="email-connect">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        {/* socials connect icon */}
        <div className="social-icons flex flex-row gap-2 ">
          <Link href="github.com">
            <Image src={GithubIcon} alt="github icon" />
          </Link>
          <Link href="linkedin.com">
            <Image src={LinkedinIcon} alt="linkedin icon" />
          </Link>
        </div>
      </div>
      <div className="email-from">
        <form>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block font-medium text-sm md:text-lg mb-2 text-white"
            >
              Your email
            </label>
            <input
              required
              type="email"
              name="email"
              id="email"
              className="bg-gray-[#18191E] border border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg  block w-full p-2.5"
              placeholder="jacob@google.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="block font-medium text-sm md:text-lg mb-2 text-white"
            >
              Subject
            </label>
            <input
              required
              type="subject"
              name="subject"
              id="subject"
              className="bg-gray-[#18191E] border border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg  block w-full p-2.5"
              placeholder="Just say hi"
            />
          </div>
          <div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="block mb-2 text-sm md:text-lg font-medium text-white"
              >
                Message
              </label>

              <textarea
                id="message"
                required
                className="bg-gray-[#18191E] border border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg  block w-full p-2.5"
                placeholder="Let's talk about..."
              ></textarea>
            </div>
            <div className="mb-6">
            <button
              type="submit"
              className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              {" "}
              Send message{" "}
            </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
