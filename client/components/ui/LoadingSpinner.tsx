export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-indigo-50 to-amber-50">
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin" />
        <p className="text-slate-600 font-medium">Loading...</p>
      </div>
    </div>
  );
}
