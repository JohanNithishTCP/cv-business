import { Mail, Phone, MapPin } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-primary text-white py-2 text-xs font-medium">
      <div className="container mx-auto px-4 lg:px-6 flex flex-col md:flex-row justify-between items-center gap-3">
        <div className="flex items-center gap-4 md:gap-6 text-[14px]!">
          <a href="mailto:admin@dmorthotics.com" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Mail size={14} className="text-white shrink-0" />
            <span className="hidden sm:inline">admin@dmorthotics.com</span>
          </a>
          <a href="tel:+441209219205" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Phone size={14} className="text-white fill-white shrink-0" />
            <span>+441209 219205</span>
          </a>
        </div>
        <div className="hidden md:flex items-center gap-2 opacity-90">
          <MapPin size={14} className="text-white shrink-0" />
          <span className="tracking-tight line-clamp-1 text-[14px]!">2, Cardrew Way Cardrew Industrial Estate, Redruth TR15 1SS</span>
        </div>
      </div>
    </div>
  );
}
