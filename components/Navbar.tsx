import { MenuIcon, SmilePlusIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white dark:border-gray-800 dark:bg-gray-950">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <SmilePlusIcon className="h-6 w-6" />
          <span className="">Linky.</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <Link
            href="/"
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
          >
            Home
          </Link>
          <Link
            href="/apply"
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
          >
            Apply
          </Link>
          <Link
            href="#"
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
          >
            Features
          </Link>
          <Link
            href="/features"
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
          >
            [Placeholder]
          </Link>
          <Link
            href="#"
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
          >
            [Placeholder]
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full md:hidden"
            >
              <MenuIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="md:hidden">
            <div className="grid gap-4 p-4">
              <Link
                href="/"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              >
                Home
              </Link>
              <Link
                href="/apply"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              >
                Apply
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              >
                Features
              </Link>
              <Link
                href="/features"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              >
                [Placeholder]
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              >
                [Placeholder]
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
