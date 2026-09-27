import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Calendar as CalendarIcon, 
  Clock, 
  User, 
  Mail, 
  Phone, 
  Sparkles, 
  CheckCircle2, 
  X, 
  ArrowRight,
  MessageSquare,
  Globe2,
  ShieldCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface BookConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTopic?: string;
}

const timeSlots = [
  "10:00 AM (WAT)",
  "11:30 AM (WAT)",
  "01:00 PM (WAT)",
  "02:30 PM (WAT)",
  "04:00 PM (WAT)",
  "05:30 PM (WAT)",
];

const availableDays = [
  { day: "Mon", date: "Aug 25" },
  { day: "Tue", date: "Aug 26" },
  { day: "Wed", date: "Aug 27" },
  { day: "Thu", date: "Aug 28" },
  { day: "Fri", date: "Aug 29" },
];

export const BookConsultationModal: React.FC<BookConsultationModalProps> = ({
  isOpen,
  onClose,
  defaultTopic = "New Website Strategy Discovery",
}) => {
  const [selectedDay, setSelectedDay] = useState(availableDays[0].date);
  const [selectedTime, setSelectedTime] = useState(timeSlots[1]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [projectType, setProjectType] = useState(defaultTopic);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleWhatsAppBooking = () => {
    const msg = encodeURIComponent(
      `Hello Zendaforge! I would like to book a 15-Minute Strategy Discovery Call:\n\n- Name: ${name || "Prospective Client"}\n- Preferred Slot: ${selectedDay} at ${selectedTime}\n- Project Type: ${projectType}\n- Email: ${email || "Not provided"}\n- Phone: ${phone || "Not provided"}\n\nPlease confirm my session time!`
    );
    window.open(`https://wa.me/2348142720498?text=${msg}`, "_blank");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-2xl bg-white dark:bg-zinc-950 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-2xl overflow-hidden my-auto"
        >
          {/* Header */}
          <div className="p-5 sm:p-6 bg-slate-50 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 flex items-start justify-between">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 dark:bg-[#F5B301]/10 text-amber-700 dark:text-[#F5B301] text-[10px] font-black uppercase tracking-wider border border-amber-500/30 dark:border-[#F5B301]/30">
                <Sparkles size={12} />
                <span>100% Free Strategy Session</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-white">
                Book a 15-Minute <span className="text-gold-gradient">Discovery Call</span>
              </h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-400">
                Discuss your website ideas, timeline, and budget directly with our Lead Architect.
              </p>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-5">
              {/* Date selection */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-700 dark:text-zinc-300 flex items-center gap-1.5">
                  <CalendarIcon size={14} className="text-amber-600 dark:text-[#F5B301]" />
                  <span>Select Date (Lagos / WAT Timezone)</span>
                </label>
                <div className="grid grid-cols-5 gap-2">
                  {availableDays.map((d) => (
                    <button
                      type="button"
                      key={d.date}
                      onClick={() => setSelectedDay(d.date)}
                      className={`p-2.5 rounded-xl border text-center transition-all ${
                        selectedDay === d.date
                          ? "bg-[#F5B301] text-black border-[#F5B301] font-black shadow-md"
                          : "bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:border-amber-400"
                      }`}
                    >
                      <div className="text-[10px] uppercase">{d.day}</div>
                      <div className="text-xs font-bold">{d.date.split(" ")[1]}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Time slot selection */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-700 dark:text-zinc-300 flex items-center gap-1.5">
                  <Clock size={14} className="text-amber-600 dark:text-[#F5B301]" />
                  <span>Select Preferred Time Slot</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {timeSlots.map((time) => (
                    <button
                      type="button"
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`p-2.5 rounded-xl border text-xs font-semibold transition-all ${
                        selectedTime === time
                          ? "bg-amber-500/15 dark:bg-[#F5B301]/20 border-amber-500 dark:border-[#F5B301] text-amber-900 dark:text-[#F5B301] font-bold"
                          : "bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:border-zinc-300 dark:hover:border-zinc-700"
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-zinc-600 dark:text-zinc-400">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Chief Adeleke"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs text-zinc-900 dark:text-white focus:outline-none focus:border-[#F5B301]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-zinc-600 dark:text-zinc-400">WhatsApp / Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. +234 814 272 0498"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs text-zinc-900 dark:text-white focus:outline-none focus:border-[#F5B301]"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold text-zinc-600 dark:text-zinc-400">Project Type or Key Requirements</label>
                <input
                  type="text"
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  placeholder="e.g. School Admissions Portal or Restaurant Website"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs text-zinc-900 dark:text-white focus:outline-none focus:border-[#F5B301]"
                />
              </div>

              {/* Action buttons */}
              <div className="pt-3 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row gap-2.5">
                <Button
                  type="button"
                  onClick={handleWhatsAppBooking}
                  className="flex-1 btn-gold-glow py-5 text-xs font-extrabold uppercase tracking-wider rounded-xl flex items-center justify-center gap-2"
                >
                  <MessageSquare size={16} />
                  <span>Confirm on WhatsApp (Instant)</span>
                </Button>

                <Button
                  type="submit"
                  variant="outline"
                  className="flex-1 border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white font-bold py-5 text-xs rounded-xl"
                >
                  <span>Submit Web Request</span>
                  <ArrowRight size={14} className="ml-1.5" />
                </Button>
              </div>
            </form>
          ) : (
            <div className="p-8 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 size={32} />
              </div>
              <h4 className="text-xl font-black text-zinc-900 dark:text-white">
                Consultation Request Received!
              </h4>
              <p className="text-xs text-zinc-600 dark:text-zinc-300 max-w-md mx-auto">
                Thank you, <strong>{name}</strong>. Our Lead Engineer will connect with you for your session on <strong>{selectedDay} at {selectedTime}</strong>.
              </p>
              <div className="pt-4 flex justify-center gap-3">
                <Button
                  onClick={handleWhatsAppBooking}
                  className="btn-gold-glow text-xs uppercase font-black px-6 py-4 rounded-xl"
                >
                  <MessageSquare size={15} className="mr-2" />
                  Chat Directly on WhatsApp Now
                </Button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
