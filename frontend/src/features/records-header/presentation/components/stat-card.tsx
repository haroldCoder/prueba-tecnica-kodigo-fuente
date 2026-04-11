interface StatCardProps {
    number: string | number;
    label: string;
    color?: string;
    colorNumber?: string;
    colorLabel?: string;
}

export const StatCard = ({ number, label, color, colorNumber, colorLabel }: StatCardProps) => {
    return (
        <div className={`flex flex-col items-center justify-center bg-card border rounded-xl p-10 h-24 shadow-sm transition-all hover:shadow-md border-brandGray-200 ${color}`}>
            <span className={`text-2xl font-bold ${colorNumber ?? 'text-brandBlue-600'}`}>{number}</span>
            <span className={`text-sm font-medium ${colorLabel ?? 'text-brandGray-500'}`}>{label}</span>
        </div>
    );
};