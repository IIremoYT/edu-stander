import React from 'react';

function SkeletonPulse({ className = '' }) {
  return (
    <div className={`bg-muted animate-pulse rounded ${className}`}></div>
  );
}

export default function CourseSkeleton() {
  return (
    <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
      {/* Header skeleton */}
      <div className="h-32 bg-gradient-to-br from-muted to-border relative">
        <div className="p-5">
          <SkeletonPulse className="w-28 h-7 rounded-full" />
        </div>
      </div>

      {/* Content skeleton */}
      <div className="p-5 space-y-4">
        {/* Title */}
        <div className="space-y-2">
          <SkeletonPulse className="h-5 w-4/5" />
          <SkeletonPulse className="h-5 w-3/5" />
        </div>

        {/* Description */}
        <div className="space-y-2">
          <SkeletonPulse className="h-3.5 w-full" />
          <SkeletonPulse className="h-3.5 w-4/5" />
        </div>

        {/* Stats */}
        <div className="flex gap-4">
          <SkeletonPulse className="h-4 w-16" />
          <SkeletonPulse className="h-4 w-14" />
          <SkeletonPulse className="h-4 w-16" />
        </div>

        {/* Price row */}
        <div className="flex items-center justify-between pt-3 border-t border-border">
          <SkeletonPulse className="h-4 w-20" />
          <SkeletonPulse className="h-6 w-16" />
        </div>

        {/* CTA */}
        <SkeletonPulse className="h-10 w-full rounded-lg" />
      </div>
    </div>
  );
}

export function CourseSkeletonGrid({ count = 6 }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, idx) => (
        <CourseSkeleton key={idx} />
      ))}
    </div>
  );
}
