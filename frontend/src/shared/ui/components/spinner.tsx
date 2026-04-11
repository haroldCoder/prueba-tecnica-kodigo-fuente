import { Loader2 } from "lucide-react";
import { cn } from "@/shared/utils/cn";

interface SpinnerProps {
    className?: string;
    size?: number;
}

export const Spinner = ({ className, size = 24 }: SpinnerProps) => {
    return (
        <div className="flex items-center justify-center p-4">
            <Loader2
                className={cn("animate-spin text-brandBlue-500", className)}
                size={size}
            />
        </div>
    );
};
