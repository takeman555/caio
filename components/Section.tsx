import { cn } from "@/lib/utils";

export default function Section({
    children,
    className,
    id,
}: {
    children: React.ReactNode;
    className?: string;
    id?: string;
}) {
    return (
        <section id={id} className={cn("py-16 md:py-24", className)}>
            <div className="container mx-auto px-4 md:px-6">
                {children}
            </div>
        </section>
    );
}
