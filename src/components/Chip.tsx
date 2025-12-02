import { cn } from "@/lib/utils";

type ChipProps = {
  label: string;
  className?: string;
};

const palette: Record<string, string> = {
  "python": "bg-[hsl(44_95%_90%)] text-[hsl(36_70%_32%)] border-[hsl(44_70%_76%)]",
  "bash": "bg-[hsl(162_52%_90%)] text-[hsl(162_32%_30%)] border-[hsl(162_40%_74%)]",
  "node.js": "bg-[hsl(142_36%_90%)] text-[hsl(142_40%_25%)] border-[hsl(142_35%_76%)]",
  "java": "bg-[hsl(16_82%_93%)] text-[hsl(16_70%_32%)] border-[hsl(16_65%_78%)]",
  "c/c++": "bg-[hsl(226_65%_93%)] text-[hsl(226_45%_32%)] border-[hsl(226_50%_78%)]",
  "c++": "bg-[hsl(226_65%_93%)] text-[hsl(226_45%_32%)] border-[hsl(226_50%_78%)]",
  "systemd": "bg-[hsl(210_40%_94%)] text-[hsl(210_30%_32%)] border-[hsl(210_35%_80%)]",
  "ppp": "bg-[hsl(202_55%_92%)] text-[hsl(202_55%_28%)] border-[hsl(202_50%_78%)]",
  "uart/at commands": "bg-[hsl(204_46%_92%)] text-[hsl(204_48%_30%)] border-[hsl(204_44%_78%)]",
  "esp32": "bg-[hsl(196_72%_92%)] text-[hsl(196_70%_28%)] border-[hsl(196_58%_76%)]",
  "can": "bg-[hsl(214_54%_93%)] text-[hsl(214_48%_28%)] border-[hsl(214_48%_78%)]",
  "lora": "bg-[hsl(282_48%_93%)] text-[hsl(282_40%_32%)] border-[hsl(282_40%_78%)]",
  "lte cat 4": "bg-[hsl(191_78%_92%)] text-[hsl(191_72%_28%)] border-[hsl(191_68%_76%)]",
  "lte-m/nb-iot": "bg-[hsl(192_62%_92%)] text-[hsl(192_58%_30%)] border-[hsl(192_55%_78%)]",
  "lte-m": "bg-[hsl(192_62%_92%)] text-[hsl(192_58%_30%)] border-[hsl(192_55%_78%)]",
  "nb-iot": "bg-[hsl(192_62%_92%)] text-[hsl(192_58%_30%)] border-[hsl(192_55%_78%)]",
  "bash scripts": "bg-[hsl(162_52%_90%)] text-[hsl(162_32%_30%)] border-[hsl(162_40%_74%)]",
  "node-red": "bg-[hsl(14_82%_93%)] text-[hsl(14_76%_32%)] border-[hsl(14_70%_78%)]",
  "modbus rtu/tcp": "bg-[hsl(43_95%_91%)] text-[hsl(35_72%_32%)] border-[hsl(43_70%_76%)]",
  "modbus": "bg-[hsl(43_95%_91%)] text-[hsl(35_72%_32%)] border-[hsl(43_70%_76%)]",
  "influxdb": "bg-[hsl(182_58%_90%)] text-[hsl(182_62%_26%)] border-[hsl(182_52%_75%)]",
  "raspberry pi": "bg-[hsl(342_65%_93%)] text-[hsl(342_50%_32%)] border-[hsl(342_52%_78%)]",
  "bash/automation": "bg-[hsl(162_52%_90%)] text-[hsl(162_32%_30%)] border-[hsl(162_40%_74%)]",
  "docs": "bg-[hsl(220_30%_92%)] text-[hsl(220_26%_30%)] border-[hsl(220_26%_78%)]",
  "markdown": "bg-[hsl(220_30%_92%)] text-[hsl(220_26%_30%)] border-[hsl(220_26%_78%)]",
  "latex": "bg-[hsl(260_26%_92%)] text-[hsl(260_32%_30%)] border-[hsl(260_28%_78%)]",
  "qa": "bg-[hsl(150_34%_90%)] text-[hsl(150_32%_28%)] border-[hsl(150_30%_74%)]",
  "testing": "bg-[hsl(150_34%_90%)] text-[hsl(150_32%_28%)] border-[hsl(150_30%_74%)]",
  "responsabilidad": "bg-[hsl(29_74%_92%)] text-[hsl(29_64%_32%)] border-[hsl(29_62%_78%)]",
  "inglés": "bg-[hsl(214_54%_93%)] text-[hsl(214_48%_30%)] border-[hsl(214_48%_78%)]",
  "gestión de equipos": "bg-[hsl(206_48%_90%)] text-[hsl(206_44%_30%)] border-[hsl(206_40%_74%)]",
  "coordinación": "bg-[hsl(33_90%_92%)] text-[hsl(33_70%_30%)] border-[hsl(33_70%_78%)]",
  "comunicación": "bg-[hsl(196_72%_92%)] text-[hsl(196_70%_28%)] border-[hsl(196_58%_76%)]",
  "atención al cliente": "bg-[hsl(271_48%_92%)] text-[hsl(271_40%_32%)] border-[hsl(271_40%_78%)]",
  "automatización": "bg-[hsl(185_72%_90%)] text-[hsl(185_70%_28%)] border-[hsl(185_58%_76%)]",
  "hardware testing": "bg-[hsl(223_38%_90%)] text-[hsl(223_32%_30%)] border-[hsl(223_30%_78%)]",
  "protocolos industriales": "bg-[hsl(44_95%_90%)] text-[hsl(36_70%_32%)] border-[hsl(44_70%_76%)]",
  "gestión del tiempo": "bg-[hsl(204_34%_92%)] text-[hsl(204_36%_30%)] border-[hsl(204_32%_78%)]"
};

const normalize = (label: string) => label.trim().toLowerCase();

export const Chip = ({ label, className }: ChipProps) => {
  const key = normalize(label);
  const tone = palette[key] ?? "bg-[hsl(210_22%_95%)] text-[hsl(222_20%_30%)] border-[hsl(210_22%_82%)]";

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs md:text-sm font-mono tracking-tight shadow-[0_1px_2px_rgba(0,0,0,0.05)]",
        tone,
        className
      )}
    >
      {label}
    </span>
  );
};
