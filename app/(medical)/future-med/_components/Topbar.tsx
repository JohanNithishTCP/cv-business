import { MailIcon, PhoneIcon, SearchIcon, UserIcon } from "./Icons";

export default function Topbar() {
  return (
    <div className="w-full bg-[#f8f9fa] border-b border-gray-200">
      <div className="container h-10 flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center gap-4 md:gap-6">
          <a href="mailto:enquiries@futuremedglobal.com" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
            <MailIcon className="w-4 h-4 text-blue-600" />
            <span className="hidden sm:inline">enquiries@futuremedglobal.com</span>
          </a>
          <a href="tel:1300014924" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
            <PhoneIcon className="w-4 h-4 text-blue-600" />
            <span className="hidden sm:inline">1300 014 924</span>
          </a>
        </div>
        <div className="flex items-center gap-4">
          <button aria-label="Search" className="hover:text-black transition-colors">
            <SearchIcon className="w-5 h-5 text-gray-700" />
          </button>
          <button aria-label="User Account" className="hover:text-black transition-colors">
            <UserIcon className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </div>
    </div>
  );
}
