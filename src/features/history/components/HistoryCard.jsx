export default function HistoryCard({
    item,
    onSelect,
}) {
    return (
        <button
            onClick={() => onSelect(item)}
            className="
            w-full
            rounded-2xl
            border
            border-zinc-800
            bg-zinc-900/50
            p-4
            text-left
            transition

            hover:border-violet-500
            "
        >
            <h3 className="font-semibold">
                {item.name}
            </h3>

            <p className="mt-2 text-sm text-zinc-400">
                ATS {item.atsScore}
            </p>

            <p className="text-xs text-zinc-500">
                {item.date}
            </p>
        </button>
    );
}