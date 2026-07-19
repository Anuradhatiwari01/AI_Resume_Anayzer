import { useResume } from "../../../context/ResumeContext";

import HistoryCard from "./HistoryCard";

export default function HistoryList() {
    const {
        history,
        setAnalysis,
    } = useResume();

    return (
        <div className="space-y-4">

            <h2 className="text-xl font-semibold">
                Previous Analyses
            </h2>

            {
                history.map((item) => (
                    <HistoryCard
                        key={item.id}
                        item={item}
                        onSelect={(selected) =>
                            setAnalysis(
                                selected.analysis
                            )
                        }
                    />
                ))
            }

        </div>
    );
}