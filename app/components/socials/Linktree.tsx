import { SiLinktree } from "react-icons/si";

const Linktree = ({ href }: { href: string }) => {
  return (
    <a className="nav-link responsive-text" href={href} target="_blank">
      <SiLinktree />
    </a>
  );
};

export default Linktree;
