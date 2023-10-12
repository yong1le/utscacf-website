type SocialHandle = {
  Facebook: string;
  Instagram: string;
  Email: string;
};

type CommMember = {
  name: string;
  image: string;
  roles: Array<string>;
  handles: Handle;
};