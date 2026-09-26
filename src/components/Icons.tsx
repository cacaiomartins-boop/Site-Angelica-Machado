import { Heart, Cloud, HeartCrack, PawPrint, Smile, Infinity as Inf, ShieldCheck, Users, Compass, Lightbulb, Flower2, Sprout, User } from "lucide-react";

const map: Record<string, typeof Heart> = {
  heart: Heart, cloud: Cloud, heartcrack: HeartCrack, paw: PawPrint, smile: Smile, infinity: Inf,
  shield: ShieldCheck, users: Users, compass: Compass, bulb: Lightbulb, lotus: Flower2, sprout: Sprout, user: User,
};

export function Icon({ name, className = "h-4 w-4" }: { name: string; className?: string }) {
  const C = map[name] ?? Heart;
  return <C className={className} strokeWidth={1.6} />;
}

export function WhatsAppIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21l1.65-4.87A8.5 8.5 0 1 1 8 19.4L3 21z" />
      <path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.2-1.8-.9-.7.6a3.6 3.6 0 0 1-1.9-1.9l.6-.7-.9-1.8L9 9.5z" fill="currentColor" stroke="none" />
    </svg>
  );
}
