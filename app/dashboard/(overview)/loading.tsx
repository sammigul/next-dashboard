import DashboardSkeleton from "@/app/ui/skeletons";


/**
 * Loading.tsx is a special file built on top of Suspense, it allows to create a fallback UI to show as a replacement while page contend loads
 * 
 */

export default function Loading() {
    return (
        <DashboardSkeleton />
    )
};
