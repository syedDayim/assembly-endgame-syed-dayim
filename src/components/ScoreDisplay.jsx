import { useScoreStore } from "../store/useScoreStore";

export const ScoreDisplay = () => {
  const { score, highScore, currentLevel } = useScoreStore();

  return (
    <div className="flex gap-6 items-center justify-center mb-4">
      <div className="bg-blue-600 text-white px-4 py-2 rounded-lg">
        <div className="text-sm font-medium">Level</div>
        <div className="text-xl font-bold">{currentLevel}</div>
      </div>
      
      <div className="bg-green-600 text-white px-4 py-2 rounded-lg">
        <div className="text-sm font-medium">Score</div>
        <div className="text-xl font-bold">{score}</div>
      </div>
      
      <div className="bg-purple-600 text-white px-4 py-2 rounded-lg">
        <div className="text-sm font-medium">High Score</div>
        <div className="text-xl font-bold">{highScore}</div>
      </div>
    </div>
  );
};
