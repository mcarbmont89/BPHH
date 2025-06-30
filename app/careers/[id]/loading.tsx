import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="max-w-3xl mx-auto">
        <Skeleton className="h-10 w-3/4" />
        <Skeleton className="h-6 w-1/4 mt-2" />
        <div className="mt-8 space-y-6">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <div className="space-y-2 pt-4">
            <Skeleton className="h-6 w-1/3" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-4/6" />
          </div>
          <div className="space-y-2 pt-4">
            <Skeleton className="h-6 w-1/3" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-4/6" />
          </div>
        </div>
        <Skeleton className="h-12 w-32 mt-8" />
      </div>
    </div>
  )
}
