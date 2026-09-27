import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Calculator, Check, Sparkles, MessageSquare, 
  ArrowRight, ShieldCheck, Zap, Layers, Copy, CheckCheck, Globe2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface FeatureOption {
  id: string;
  name: string;
  priceNGN: number;
  description: string;
}

const baseOptions = [
  { id: "business", name: "Corporate / Business Website", basePriceNGN: 150000, days: "5-7 Days" },
  { id: "school", name: "School Portal & Admissions", basePriceNGN: 300000, days: "10-14 Days" },
  { id: "hospital", name: "Hospital / Clinic Platform", basePriceNGN: 280000, days: "10-14 Days" },
  { id: "ecommerce", name: "E-Commerce Online Store", basePriceNGN: 250000, days: "7-10 Days" },
  { id: "restaurant", name: "Restaurant & Food Ordering", basePriceNGN: 180000, days: "5-7 Days" },
  { id: "custom", name: "Custom Web Application", basePriceNGN: 400000, days: "14-21 Days" },
];

const addonFeatures: FeatureOption[] = [
  { id: "payment", name: "Paystack / Flutterwave Online Payment Integration", priceNGN: 40000, description: "Accept debit cards, bank transfers & USSD" },
  { id: "seo", name: "Speed & Top Google SEO Optimization", priceNGN: 35000, description: "90+ Lighthouse score & Google search index" },
  { id: "portal", name: "User / Student / Patient Login Portal", priceNGN: 60000, description: "Secure accounts with role-based dashboard" },
  { id: "whatsapp", name: "WhatsApp Direct Live Chat & Lead Automation", priceNGN: 20000, description: "Instant automated chat triggers for inquiries" },
  { id: "support", name: "6-Month Priority Maintenance & Security", priceNGN: 45000, description: "Regular backups, security patches & updates" },
  { id: "custom_domain", name: "Custom .COM/.NG Domain & 5 Business Emails", priceNGN: 25000, description: "E.g. info@yourcompany.com" },
];

const NGN_TO_USD_RATE = 1500;

export const InteractiveQuoteEstimator: React.FC = () => {
  const [selectedType, setSelectedType] = useState(baseOptions[0].id);
  const [selectedAddons, setSelectedAddons] = useState<string[]>(["seo", "whatsapp"]);
  const [isExpress, setIsExpress] = useState(false);
  const [currency, setCurrency] = useState<"NGN" | "USD">("NGN");
  const [isCopied, setIsCopied] = useState(false);

  const currentBase = baseOptions.find((b) => b.id === selectedType) || baseOptions[0];

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) => 
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const addonsTotalNGN = addonFeatures
    .filter((addon) => selectedAddons.includes(addon.id))
    .reduce((sum, addon) => sum + addon.priceNGN, 0);

  const rawTotalNGN = currentBase.basePriceNGN + addonsTotalNGN;
  const grandTotalNGN = isExpress ? Math.round(rawTotalNGN * 1.15) : rawTotalNGN;

  const formatPrice = (amountNGN: number) => {
    if (currency === "USD") {
      const usd = Math.round(amountNGN / NGN_TO_USD_RATE);
      return `$${usd.toLocaleString()}`;
    }
    return `₦${amountNGN.toLocaleString()}`;
  };

  const selectedAddonsNames = selectedAddons
    .map((id) => addonFeatures.find((a) => a.id === id)?.name)
    .filter(Boolean);

  const quoteSummaryText = `Zendaforge Project Estimate:\n- Project Type: ${currentBase.name}\n- Selected Addons: ${selectedAddonsNames.join(", ")}\n- Express Delivery: ${isExpress ? "Yes (Priority 3-5 days)" : "Standard"}\n- Estimated Investment: ${formatPrice(grandTotalNGN)}\n- Timeline: ${isExpress ? "3-5 Business Days" : currentBase.days}`;

  const handleCopySummary = () => {
    navigator.clipboard.writeText(quoteSummaryText);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Zendaforge, I configured a quote on your website:\n\n- Project Type: ${currentBase.name}\n- Selected Addons: ${selectedAddonsNames.join(", ")}\n- Express Delivery: ${isExpress ? "Yes (Priority 3-5 days)" : "Standard"}\n- Estimated Budget: ${formatPrice(grandTotalNGN)}\n\nCan we discuss starting this project?`
  );

  return (
    <section className="py-20 sm:py-28 relative bg-white dark:bg-[#09090C] transition-colors duration-300 overflow-hidden border-t border-zinc-200 dark:border-zinc-800/80">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F5B301]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#F5B301]/40 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md mb-3 shadow-[0_0_20px_rgba(245,179,1,0.2)]">
            <Sparkles size={14} className="text-amber-600 dark:text-[#F5B301]" />
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.22em] text-amber-700 dark:text-[#F5B301]">
              TRANSPARENT & INSTANT
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-900 dark:text-white tracking-tight uppercase leading-tight">
            INTERACTIVE <span className="text-gold-gradient">PROJECT SCOPE CONFIGURATOR</span>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mt-3">
            Select your specific website requirements and view real-time pricing and delivery timelines instantly.
          </p>

          {/* Currency Toggle */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Currency:</span>
            <div className="inline-flex p-1 rounded-xl bg-slate-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
              <button
                onClick={() => setCurrency("NGN")}
                className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
                  currency === "NGN"
                    ? "bg-[#F5B301] text-black shadow-sm font-black"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white"
                }`}
              >
                🇳🇬 NGN (₦)
              </button>
              <button
                onClick={() => setCurrency("USD")}
                className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
                  currency === "USD"
                    ? "bg-[#F5B301] text-black shadow-sm font-black"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white"
                }`}
              >
                🌎 USD ($)
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Configurator */}
          <div className="lg:col-span-7 space-y-8">
            {/* Step 1: Select Type */}
            <div className="p-6 md:p-8 rounded-3xl bg-slate-50 dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 shadow-sm dark:shadow-xl space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-amber-700 dark:text-[#F5B301]">
                <span className="w-5 h-5 rounded-full bg-[#F5B301] text-black flex items-center justify-center font-black text-xs">1</span>
                <span>Select Your Business Sector / Web Type</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {baseOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setSelectedType(opt.id)}
                    className={`p-4 rounded-2xl border text-left transition-all ${
                      selectedType === opt.id
                        ? "bg-[#F5B301] text-black border-[#F5B301] shadow-[0_0_20px_rgba(245,179,1,0.4)] font-bold"
                        : "bg-white dark:bg-zinc-950/80 text-zinc-800 dark:text-zinc-300 border-zinc-200 dark:border-zinc-800 hover:border-amber-400 dark:hover:border-zinc-700 hover:bg-amber-50/30"
                    }`}
                  >
                    <div className="font-extrabold text-sm mb-1">{opt.name}</div>
                    <div className="flex items-center justify-between text-xs">
                      <span className={selectedType === opt.id ? "text-zinc-900 font-bold" : "text-amber-700 dark:text-[#F5B301] font-bold"}>
                        from {formatPrice(opt.basePriceNGN)}
                      </span>
                      <span className={`text-[10px] ${selectedType === opt.id ? "text-zinc-800 font-bold" : "text-zinc-500"}`}>
                        {opt.days}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Choose Features */}
            <div className="p-6 md:p-8 rounded-3xl bg-slate-50 dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 shadow-sm dark:shadow-xl space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-amber-700 dark:text-[#F5B301]">
                <span className="w-5 h-5 rounded-full bg-[#F5B301] text-black flex items-center justify-center font-black text-xs">2</span>
                <span>Select Desired Features & Integrations</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {addonFeatures.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3.5 rounded-2xl border text-left transition-all flex items-start gap-3 ${
                        isChecked
                          ? "bg-amber-50/50 dark:bg-zinc-950 border-amber-500 dark:border-[#F5B301] shadow-sm"
                          : "bg-white dark:bg-zinc-950/50 border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 text-zinc-500 dark:text-zinc-400"
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-lg mt-0.5 flex items-center justify-center shrink-0 border ${
                        isChecked ? "bg-[#F5B301] text-black border-[#F5B301]" : "border-zinc-300 dark:border-zinc-700 text-transparent"
                      }`}>
                        <Check size={13} strokeWidth={3} />
                      </div>
                      <div className="space-y-0.5">
                        <div className={`text-xs font-bold ${isChecked ? "text-zinc-900 dark:text-white" : "text-zinc-700 dark:text-zinc-300"}`}>
                          {addon.name}
                        </div>
                        <div className="text-[10px] text-zinc-500">
                          {addon.description}
                        </div>
                        <div className="text-[11px] font-bold text-amber-700 dark:text-[#F5B301] pt-1">
                          +{formatPrice(addon.priceNGN)}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Live Estimate Breakdown */}
          <div className="lg:col-span-5 sticky top-28 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-zinc-950 border-2 border-amber-500/40 dark:border-[#F5B301]/60 shadow-xl dark:shadow-[0_25px_60px_rgba(245,179,1,0.25)] space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-zinc-200 dark:border-zinc-800">
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-amber-700 dark:text-[#F5B301]">
                  <Calculator size={18} />
                  <span>Estimate Summary</span>
                </div>
                <button
                  onClick={handleCopySummary}
                  className="flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700 transition-colors"
                >
                  {isCopied ? <CheckCheck size={12} className="text-emerald-500" /> : <Copy size={12} />}
                  <span>{isCopied ? "Copied!" : "Copy Summary"}</span>
                </button>
              </div>

              {/* Breakdown */}
              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between text-zinc-700 dark:text-zinc-300">
                  <span>Base Package ({currentBase.name.split("/")[0]}):</span>
                  <span className="font-mono font-bold text-zinc-900 dark:text-white">{formatPrice(currentBase.basePriceNGN)}</span>
                </div>

                {selectedAddons.map((id) => {
                  const feat = addonFeatures.find((a) => a.id === id);
                  if (!feat) return null;
                  return (
                    <div key={id} className="flex items-center justify-between text-zinc-600 dark:text-zinc-400">
                      <span className="truncate max-w-[200px]">• {feat.name}</span>
                      <span className="font-mono text-zinc-800 dark:text-zinc-300">+{formatPrice(feat.priceNGN)}</span>
                    </div>
                  );
                })}

                {isExpress && (
                  <div className="flex items-center justify-between text-amber-600 dark:text-amber-400 font-bold">
                    <span>Priority Express Delivery (3-5 days):</span>
                    <span className="font-mono">+15%</span>
                  </div>
                )}
              </div>

              {/* Express Speed Toggle */}
              <div className="pt-3 border-t border-zinc-200 dark:border-zinc-800">
                <button
                  type="button"
                  onClick={() => setIsExpress(!isExpress)}
                  className={`w-full p-3 rounded-xl border flex items-center justify-between transition-all ${
                    isExpress 
                      ? "bg-amber-500/10 border-amber-500 text-amber-700 dark:text-amber-400 font-bold" 
                      : "bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400"
                  }`}
                >
                  <div className="flex items-center gap-2 text-xs">
                    <Zap size={15} className={isExpress ? "text-amber-500" : "text-zinc-400 dark:text-zinc-500"} />
                    <span>Need Rush Express Launch (3-5 Days)?</span>
                  </div>
                  <span className="text-xs font-bold">{isExpress ? "ON" : "OFF"}</span>
                </button>
              </div>

              {/* Grand Total */}
              <div className="p-5 rounded-2xl bg-amber-50/50 dark:bg-zinc-900 border border-amber-200 dark:border-zinc-800 text-center space-y-1">
                <div className="text-xs font-bold text-zinc-600 dark:text-zinc-400 uppercase tracking-wider">Estimated Total Investment</div>
                <div className="text-3xl md:text-4xl font-black text-amber-600 dark:text-[#F5B301] drop-shadow-sm dark:drop-shadow-[0_0_15px_rgba(245,179,1,0.5)]">
                  {formatPrice(grandTotalNGN)}
                </div>
                <div className="text-[11px] text-zinc-500 dark:text-zinc-400">
                  Estimated Delivery: <strong className="text-zinc-900 dark:text-white">{isExpress ? "3-5 Business Days" : currentBase.days}</strong>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <a
                  href={`https://wa.me/2348142720498?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button className="w-full btn-gold-glow py-6 text-xs uppercase font-extrabold tracking-wider rounded-xl shadow-lg">
                    <MessageSquare size={16} className="mr-2" />
                    Lock In This Quote On WhatsApp
                  </Button>
                </a>

                <Link to="/contact" className="block">
                  <Button variant="outline" className="w-full border-zinc-300 dark:border-zinc-700 bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-900 dark:text-white font-bold py-5 text-xs rounded-xl">
                    Submit Formal Project Brief
                    <ArrowRight size={15} className="ml-2" />
                  </Button>
                </Link>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-zinc-500 dark:text-zinc-400">
                <ShieldCheck size={14} className="text-emerald-600 dark:text-emerald-400" />
                <span>50% Advance • 50% on Final Approval & Launch</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
