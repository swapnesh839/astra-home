import Link from "next/link";
import Logo from "./logo";
import Button from "./button";

const Navbar = ({ toggle }: { toggle: () => void }) => {
  const Menu = [
    { id:0, name: "Features", url: "/Features" },
    { id:1, name: "Usecases", url: "/Usecases" },
    { id:2, name: "Pricing", url: "/Pricing" },
    { id:3, name: "Solutions", url: "/Solutions" },
  ];
  return (
    <>
      <div className="w-full h-20 bg-gray-100 sticky top-0 z-20">
        <div className="container mx-auto px-7 h-full">
          <div className="flex justify-between items-center h-full">
            <Logo />
            <button
              type="button"
              className="inline-flex items-center md:hidden"
              onClick={toggle}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#000"
                  d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
                />
              </svg>
            </button>
            <ul className="hidden md:flex gap-x-6">
              {Menu.map((i) => (
                <li key={i.id}>
                  <Link href={i.url} className="hover:text-purple-700">
                    <p>{i.name}</p>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="hidden md:block">
              <Button />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
