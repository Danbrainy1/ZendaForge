import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar as CalendarIcon, Clock, X, ArrowRight, MessageSquare, CheckCircle2, Sparkles } from "lucide-react";
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
  defaultTopic = "Zendaforge Technologies (Software & Web Platforms)",
}) => {
  const [selectedDay, setSelectedDay] = useState(availableDays[0].date);
  const [selectedTime, setSelectedTime] = useState(timeSlots[1]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [division, setDivision] = useState(defaultTopic);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleWhatsAppBooking = () => {
    const msg = encodeURIComponent(
      `Hello Zendaforge! I would like to book a Strategic Discovery Session:\n\n- Name: ${name || "Prospective Client"}\n- Division: ${division}\n- Preferred Slot: ${selectedDay} at ${selectedTime}\n- Email: ${email || "Not provided"}\n- Phone: ${phone || "Not provided"}\n\nPlease confirm my session time!`
    );
    window.open(`https://wa.me/2348142720498?text=${msg}`, "_blank");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-xl bg-white dark:bg-navy-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden my-auto"
        >
          {/* Header */}
          <div className="p-5 sm:p-6 bg-slate-50 dark:bg-navy-950 border-b border-slate-200 dark:border-slate-800 flex items-start justify-between">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 text-[10px] font-bold uppercase tracking-wider border border-purple-500/20">
                <Sparkles size={12} />
                <span>Executive Discovery Session</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                Schedule a Corporate Consultation
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Connect with our technical architects, academic advisors, or data analysts.
              </p>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <X size={16} />
            </button>
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4">
              {/* Date selection */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                  <CalendarIcon size={13} className="text-purple-600" />
                  <span>Select Date (WAT Timezone)</span>
                </label>
                <div className="grid grid-cols-5 gap-2">
                  {availableDays.map((d) => (
                    <button
                      type="button"
                      key={d.date}
                      onClick={() => setSelectedDay(d.date)}
                      className={`p-2 rounded-xl border text-center transition-all ${
                        selectedDay === d.date
                          ? "bg-purple-600 text-white border-purple-600 font-bold shadow-sm"
                          : "bg-slate-50 dark:bg-navy-950 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-purple-400"
                      }`}
                    >
                      <div className="text-[10px] uppercase">{d.day}</div>
                      <div className="text-xs font-bold">{d.date.split(" ")[1]}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Time slot selection */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                  <Clock size={13} className="text-purple-600" />
                  <span>Preferred Time Slot</span>
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {timeSlots.map((time) => (
                    <button
                      type="button"
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`p-2 rounded-xl border text-xs font-semibold transition-all ${
                        selectedTime === time
                          ? "bg-purple-500/15 border-purple-600 text-purple-700 dark:text-purple-300 font-bold"
                          : "bg-slate-50 dark:bg-navy-950 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-300"
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {/* Target Division */}
              <div className="space-y-1">
                <label className="text-[11px] font-semibold text-slate-700 dark:text-slate-300">
                  Target Division or Inquiry Scope
                </label>
                <select
                  value={division}
                  onChange={(e) => setDivision(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-300 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="Zendaforge Technologies (Software & Web Platforms)">Zendaforge Technologies (Software & Web Platforms)</option>
                  <option value="Zendaforge Educational Consult (Study Abroad & Admissions)">Zendaforge Educational Consult (Study Abroad & Admissions)</option>
                  <option value="Zendaforge Data Lab (Business Intelligence & Analytics)">Zendaforge Data Lab (Business Intelligence & Analytics)</option>
                  <option value="General Corporate Partnership">General Corporate Partnership</option>
                </select>
              </div>

              {/* Input fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-slate-700 dark:text-slate-300">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Dr. Emeka Nwosu"
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-300 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-slate-700 dark:text-slate-300">WhatsApp / Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+234 814 272 0498"
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-300 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>

              {/* Action buttons */}
              <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row gap-2.5">
                <Button
                  type="button"
                  onClick={handleWhatsAppBooking}
                  className="flex-1 btn-purple-glow py-2.5 text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5"
                >
                  <MessageSquare size={14} />
                  <span>Instant WhatsApp Confirmation</span>
                </Button>

                <Button
                  type="submit"
                  variant="outline"
                  className="flex-1 border-slate-300 dark:border-slate-700 text-xs font-semibold py-2.5 rounded-xl"
                >
                  <span>Submit Web Request</span>
                  <ArrowRight size={13} className="ml-1" />
                </Button>
              </div>
            </form>
          ) : (
            <div className="p-8 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 size={28} />
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                Consultation Request Received!
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 max-w-sm mx-auto">
                Thank you, <strong>{name}</strong>. Our division specialist will connect with you for your session on <strong>{selectedDay} at {selectedTime}</strong>.
              </p>
              <div className="pt-2 flex justify-center">
                <Button
                  onClick={handleWhatsAppBooking}
                  className="btn-purple-glow text-xs font-semibold px-5 py-2 rounded-xl"
                >
                  <MessageSquare size={14} className="mr-1.5" />
                  Connect via WhatsApp Now
                </Button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
