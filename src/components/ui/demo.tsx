"use client";

import * as React from "react";
import {
  GithubGraph,
  normalizeGithubAccount,
  type GithubGraphProps,
} from "@/components/ui/github-graph";

type GithubGraphDemoProps = Pick<
  GithubGraphProps,
  | "variant"
  | "animation"
  | "animationSpeed"
  | "cellSize"
  | "cellGap"
  | "cellRadius"
  | "autoFit"
  | "showLegend"
  | "ambientEffect"
  | "ambientIntensity"
> & {
  months?: number | string;
};

export function GithubGraphDemo({
  variant = "github",
  animation = "wave",
  animationSpeed = 1,
  cellSize = 16,
  cellGap = 4,
  cellRadius = 3,
  autoFit = false,
  showLegend = true,
  ambientEffect = "twinkle",
  ambientIntensity = 0.65,
  months = 6,
}: GithubGraphDemoProps) {
  const [draftAccount, setDraftAccount] = React.useState("MdSaifAli063");
  const [account, setAccount] = React.useState("MdSaifAli063");
  const [error, setError] = React.useState<string | null>(null);
  const resolvedMonths = Number(months) || 6;

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextAccount = normalizeGithubAccount(draftAccount);

    if (!nextAccount) {
      setError("Enter a valid GitHub username.");
      return;
    }

    setError(null);
    setDraftAccount(nextAccount);
    setAccount(nextAccount);
  };

  return (
    <div className="flex w-full justify-center p-2 sm:p-4">
      <div className={autoFit ? "w-full max-w-4xl" : "w-fit max-w-full"}>
        <form onSubmit={submit} className="mb-4">
          <div className="flex items-baseline gap-1 text-base font-medium tracking-tight text-white">
            <span aria-hidden="true" className="text-emerald-400">@</span>
            <label htmlFor="github-graph-account" className="sr-only">
              GitHub username
            </label>
            <input
              id="github-graph-account"
              value={draftAccount}
              onChange={(event) => setDraftAccount(event.target.value)}
              placeholder="MdSaifAli063"
              aria-invalid={error ? true : undefined}
              className="w-[18ch] border-0 bg-transparent p-0 text-base font-medium tracking-tight outline-none placeholder:text-slate-500 focus-visible:text-white"
            />
          </div>
          {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
        </form>

        <GithubGraph
          account={account}
          months={resolvedMonths}
          variant={variant}
          animation={animation}
          animationSpeed={animationSpeed}
          cellSize={cellSize}
          cellGap={cellGap}
          cellRadius={cellRadius}
          autoFit={autoFit}
          showLegend={showLegend}
          ambientEffect={ambientEffect}
          ambientIntensity={ambientIntensity}
          showAccount={false}
        />
      </div>
    </div>
  );
}

export default GithubGraphDemo;
