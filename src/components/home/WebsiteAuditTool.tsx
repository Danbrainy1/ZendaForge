import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  Sparkles, 
  CheckCircle2, 
  AlertTriangle, 
  XCircle, 
  Gauge, 
  Smartphone, 
  ShieldCheck, 
  MessageSquare, 
  ArrowRight,
  RefreshCw,
  Globe2
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface AuditResult {
  url: string;
  overallScore: number;
  speedScore: number;
  mobileScore: number;
  seoScore: number;
  conversionScore: number;
  findings: {
    type: "good" | "warning" | "bad";
    title: string;
    description: string;
  }[];
}

export const WebsiteAuditTool: React.FC = () => {
  const [inputUrl, setInputUrl] = useState("");
  const [isScanning, setIsScanning] = useState(false);
  const [auditResult, setAuditResult] = useState<AuditResult | null>(null);

  const handleRunAudit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputUrl.trim()) return;

    setIsScanning(true);
    setAuditResult(null);

    // Simulate real-time diagnostic scan
    setTimeout(() => {
      const cleanUrl = inputUrl.replace(/https?:\/\//, "").replace(/\/$/, "");
      setIsScanning(false);
      setAuditResult({
        url: cleanUrl,
        overallScore: 68,
        speedScore: 58,
        mobileScore: 74,
        seoScore: 65,
        conversionScore: 45,
        findings: [
          {
            type: "warning",
            title: "Slow Mobile First Contentful Paint (3.8s)",
            description: "Uncompressed images and render-blocking scripts are delaying initial render on Nigerian mobile 4G networks.",
          },
          {
            type: "bad",
            title: "Missing Direct WhatsApp Fast-Action Trigger",
            description: "Over 80% of Nigerian consumers prefer initiating orders via WhatsApp, but no automated floating widget was detected.",
          },
          {
            type: "good",
            title: "SSL Encryption Active",
            description: "HTTPS connection is secure and encrypted.",
          },
          {
            type: "warning",
            title: "Unoptimized Social Open Graph Images",
            description: "Links shared on WhatsApp or Twitter/X do not generate rich preview cards.",
          },
        ],
      });
    }, 1800);
  };

  return (
    <section className="py-20 sm:py-28 relative bg-slate-50 dark:bg-[#070709] border-t border-zinc-200 dark:border-zinc-800 transition-colors duration-300 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#F5B301]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#F5B301]/40 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md mb-3 shadow-[0_0_20px_rgba(245,179,1,0.2)]">
            <Sparkles size={14} className="text-amber-600 dark:text-[#F5B301]" />
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.22em] text-amber-700 dark:text-[#F5B301]">
              FREE PERFORMANCE DIAGNOSTIC
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-900 dark:text-white uppercase tracking-tight leading-tight">
            FREE WEBSITE HEALTH & <br className="hidden sm:inline" />
            <span className="text-gold-gradient">SPEED AUDIT SCANNER</span>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mt-3">
            Enter your current business website URL to analyze load speed, mobile conversion rate, and SEO health.
          </p>
        </div>

        {/* URL Input Form */}
        <div className="max-w-2xl mx-auto mb-10">
          <form onSubmit={handleRunAudit} className="flex flex-col sm:flex-row gap-2.5 p-2 rounded-2xl sm:rounded-3xl bg-white dark:bg-zinc-950 border-2 border-zinc-200 dark:border-zinc-800 shadow-xl">
            <div className="flex-1 flex items-center gap-2.5 px-4 py-3">
              <Globe2 size={18} className="text-[#F5B301] shrink-0" />
              <input
                type="text"
                required
                placeholder="Enter your website (e.g. mybusiness.com.ng)"
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
                className="w-full text-xs sm:text-sm bg-transparent text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none"
              />
            </div>

            <Button
              type="submit"
              disabled={isScanning}
              className="btn-gold-glow px-6 py-4 sm:py-3 text-xs font-black uppercase tracking-wider rounded-xl sm:rounded-2xl shrink-0"
            >
              {isScanning ? (
                <span className="flex items-center gap-2">
                  <RefreshCw size={14} className="animate-spin" />
                  <span>Scanning...</span>
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Search size={14} />
                  <span>Run Free Audit</span>
                </span>
              )}
            </Button>
          </form>
        </div>

        {/* Results Display */}
        <AnimatePresence>
          {auditResult && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="max-w-4xl mx-auto rounded-3xl bg-white dark:bg-zinc-950 border-2 border-[#F5B301]/40 shadow-2xl p-6 sm:p-8 space-y-6"
            >
              {/* Top Banner */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-zinc-200 dark:border-zinc-800">
                <div>
                  <div className="text-xs text-zinc-500 font-bold uppercase tracking-wider">Audit Results for:</div>
                  <div className="text-lg sm:text-xl font-black text-zinc-900 dark:text-white font-mono flex items-center gap-2 mt-0.5">
                    <Globe2 size={16} className="text-[#F5B301]" />
                    <span>{auditResult.url}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <div className="text-[10px] text-zinc-500 font-bold uppercase">Overall Health Score</div>
                    <div className="text-2xl font-black text-amber-600 dark:text-[#F5B301] font-mono">
                      {auditResult.overallScore} / 100
                    </div>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-600 dark:text-[#F5B301]">
                    <Gauge size={24} />
                  </div>
                </div>
              </div>

              {/* Metric Breakdown Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-center">
                  <div className="text-[11px] font-bold text-zinc-500">Speed Index</div>
                  <div className="text-xl font-black text-amber-600 dark:text-amber-400 font-mono mt-1">
                    {auditResult.speedScore}/100
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-center">
                  <div className="text-[11px] font-bold text-zinc-500">Mobile UX</div>
                  <div className="text-xl font-black text-emerald-600 dark:text-emerald-400 font-mono mt-1">
                    {auditResult.mobileScore}/100
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-center">
                  <div className="text-[11px] font-bold text-zinc-500">SEO Health</div>
                  <div className="text-xl font-black text-amber-600 dark:text-amber-400 font-mono mt-1">
                    {auditResult.seoScore}/100
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-center">
                  <div className="text-[11px] font-bold text-zinc-500">Conversion Funnel</div>
                  <div className="text-xl font-black text-red-500 font-mono mt-1">
                    {auditResult.conversionScore}/100
                  </div>
                </div>
              </div>

              {/* Actionable Findings */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-black uppercase tracking-wider text-zinc-900 dark:text-white">
                  Key Diagnostic Findings & Recommendations:
                </div>
                <div className="space-y-2.5">
                  {auditResult.findings.map((f, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-2xl bg-zinc-50 dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-800 flex items-start gap-3"
                    >
                      {f.type === "good" && <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />}
                      {f.type === "warning" && <AlertTriangle size={16} className="text-amber-500 shrink-0 mt-0.5" />}
                      {f.type === "bad" && <XCircle size={16} className="text-red-500 shrink-0 mt-0.5" />}
                      <div>
                        <div className="text-xs font-bold text-zinc-900 dark:text-white">{f.title}</div>
                        <div className="text-[11px] text-zinc-600 dark:text-zinc-400 mt-0.5">{f.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* WhatsApp Fix CTA */}
              <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-zinc-600 dark:text-zinc-300 text-center sm:text-left">
                  🚀 Ready to upgrade <strong>{auditResult.url}</strong> to a high-speed, high-converting Web-Craft platform?
                </p>

                <a
                  href={`https://wa.me/2348142720498?text=Hello%20Web-Craft%20Projects,%20I%20ran%20an%20audit%20for%20my%20website%20(${encodeURIComponent(auditResult.url)})%20and%20would%20like%20your%20team%20to%20optimize%20it!`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button className="w-full sm:w-auto btn-gold-glow text-xs uppercase font-extrabold tracking-wider px-6 py-4 rounded-xl flex items-center justify-center gap-2">
                    <MessageSquare size={15} />
                    <span>Get Free Optimization Plan on WhatsApp</span>
                  </Button>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
