"use client";

import * as React from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

export type GithubGraphVariant = "github" | "graphite" | "ocean" | "violet" | "emerald";
export type GithubGraphAnimation = "none" | "wave" | "scan" | "cascade";
export type GithubGraphAmbientEffect = "none" | "tide" | "drift" | "twinkle";

export type GithubContribution = {
  date: string;
  count: number;
  level?: number;
};

export type GithubContributionCell = GithubContribution & {
  level: number;
};

export type GithubContributionWeek = GithubContributionCell[];

export interface GithubGraphProps {
  /** GitHub username, with or without a leading @. @default "MdSaifAli063" */
  account?: string;
  /** Number of recent calendar months to display. @default 6 */
  months?: number;
  /** Color treatment for contribution levels. @default "github" */
  variant?: GithubGraphVariant;
  /** Entrance choreography for graph cells. Use "none" to render immediately. @default "wave" */
  animation?: GithubGraphAnimation;
  /** Animation multiplier; higher values reveal the graph faster. @default 1 */
  animationSpeed?: number;
  /** Size of each contribution cell in pixels. @default 14 */
  cellSize?: number;
  /** Space between contribution cells in pixels. @default 4 */
  cellGap?: number;
  /** Corner radius of contribution cells in pixels. @default 3 */
  cellRadius?: number;
  /** Fills the available width with a responsive grid instead of fixed seven-day columns. @default false */
  autoFit?: boolean;
  /** Shows the contribution-level legend. @default true */
  showLegend?: boolean;
  /** Shows the account name above the graph. @default false */
  showAccount?: boolean;
  /** Persistent, subtle motion pattern applied to graph cells. @default "twinkle" */
  ambientEffect?: GithubGraphAmbientEffect;
  /** Strength of the persistent cell motion. @default 0.65 */
  ambientIntensity?: number;
  /** Optional preloaded contributions, which bypass the public fetch. */
  data?: GithubContribution[];
  className?: string;
}

type ResourceState =
  | { status: "loading" }
  | { status: "ready"; contributions: GithubContribution[] }
  | { status: "error"; message: string };

const CONTRIBUTIONS_ENDPOINT =
  "https://github-contributions-api.jogruber.de/v4";

// Authentic GitHub dark palettes with rich neon glow
const VARIANTS: Record<
  GithubGraphVariant,
  [string, string, string, string, string]
> = {
  github: [
    "#161b22", // Level 0: Classic GitHub dark empty cell
    "#0e4429", // Level 1: Deep forest green
    "#006d32", // Level 2: Medium emerald green
    "#26a641", // Level 3: Vibrant green
    "#39d353", // Level 4: Brilliant neon lime green
  ],
  emerald: [
    "#0f172a",
    "#064e3b",
    "#059669",
    "#10b981",
    "#34d399",
  ],
  graphite: [
    "#161b22",
    "#2d333b",
    "#535d6c",
    "#8b949e",
    "#c9d1d9",
  ],
  ocean: [
    "#0d1829",
    "#0c3b5e",
    "#0369a1",
    "#0284c7",
    "#38bdf8",
  ],
  violet: [
    "#1b1226",
    "#3b1464",
    "#6b21a8",
    "#9333ea",
    "#c084fc",
  ],
};

const DAY_LABELS = ["", "Mon", "", "Wed", "", "Fri", ""];

function dateFromISO(value: string): Date | null {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return null;
  const date = new Date(`${value}T00:00:00.000Z`);
  return Number.isNaN(date.getTime()) ? null : date;
}

function isoDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

function addDays(date: Date, days: number): Date {
  const result = new Date(date);
  result.setUTCDate(result.getUTCDate() + days);
  return result;
}

function fallbackLevel(count: number, maxCount: number): number {
  if (!Number.isFinite(count) || count <= 0 || maxCount <= 0) return 0;
  return Math.min(4, Math.max(1, Math.ceil((count / maxCount) * 4)));
}

export function normalizeGithubAccount(account: string): string | null {
  const normalized = account.trim().replace(/^@+/, "");
  return /^(?!-)[a-z\d](?:[a-z\d-]{0,37}[a-z\d])?$/i.test(normalized)
    ? normalized
    : null;
}

export function buildContributionWeeks(
  contributions: GithubContribution[],
): GithubContributionWeek[] {
  const valid = contributions
    .map((item) => ({ ...item, parsedDate: dateFromISO(item.date) }))
    .filter(
      (item): item is GithubContribution & { parsedDate: Date } =>
        item.parsedDate !== null && Number.isFinite(item.count),
    )
    .sort((a, b) => a.date.localeCompare(b.date));

  if (valid.length === 0) return [];

  const maxCount = Math.max(0, ...valid.map((item) => item.count));
  const byDate = new Map(valid.map((item) => [item.date, item]));
  const firstDate = valid[0]!.parsedDate;
  const lastDate = valid[valid.length - 1]!.parsedDate;
  const startDate = addDays(firstDate, -firstDate.getUTCDay());
  const endDate = addDays(lastDate, 6 - lastDate.getUTCDay());
  const cells: GithubContributionCell[] = [];

  for (let date = startDate; date <= endDate; date = addDays(date, 1)) {
    const key = isoDate(date);
    const contribution = byDate.get(key);
    const count = Math.max(0, contribution?.count ?? 0);
    const explicitLevel = contribution?.level;
    const level =
      Number.isInteger(explicitLevel) &&
      explicitLevel! >= 0 &&
      explicitLevel! <= 4
        ? count === 0
          ? 0
          : explicitLevel!
        : fallbackLevel(count, maxCount);

    cells.push({ date: key, count, level });
  }

  return Array.from({ length: Math.ceil(cells.length / 7) }, (_, index) =>
    cells.slice(index * 7, index * 7 + 7),
  );
}

function selectRecentContributions(
  contributions: GithubContribution[],
  months: number,
): GithubContribution[] {
  const parsed = contributions
    .map((contribution) => ({
      contribution,
      date: dateFromISO(contribution.date),
    }))
    .filter(
      (item): item is { contribution: GithubContribution; date: Date } =>
        item.date !== null,
    );
  const latest = parsed.reduce<Date | null>(
    (current, item) => (!current || item.date > current ? item.date : current),
    null,
  );

  if (!latest) return [];

  const start = new Date(latest);
  start.setUTCMonth(
    start.getUTCMonth() - Math.max(1, Math.min(12, Math.round(months))),
  );
  return parsed
    .filter((item) => item.date >= start)
    .map((item) => item.contribution);
}

function formatContributionLabel(contribution: GithubContributionCell): string {
  const dateObj = dateFromISO(contribution.date);
  const formattedDate = dateObj
    ? new Intl.DateTimeFormat("en", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }).format(dateObj)
    : contribution.date;

  if (contribution.count === 0) {
    return `No contributions on ${formattedDate}`;
  }
  const label = contribution.count === 1 ? "contribution" : "contributions";
  return `${contribution.count} ${label} on ${formattedDate}`;
}

function getCellDelay(
  animation: GithubGraphAnimation,
  weekIndex: number,
  dayIndex: number,
  speed: number,
): number {
  if (animation === "none") return 0;

  const step =
    animation === "wave"
      ? weekIndex * 0.022 + dayIndex * 0.016
      : animation === "scan"
        ? weekIndex * 0.026
        : (weekIndex + dayIndex * 2) * 0.016;
  return step / Math.max(speed, 0.1);
}

function getAmbientCellMotion(
  effect: GithubGraphAmbientEffect,
  intensity: number,
  weekIndex: number,
  dayIndex: number,
  entranceDelay: number,
  reducedMotion: boolean | null,
) {
  if (reducedMotion || effect === "none") {
    return {
      animate: { opacity: 1, scale: 1 },
      transition: {
        opacity: { duration: 0.14, delay: entranceDelay },
        scale: { type: "spring" as const, stiffness: 900, damping: 32 },
      },
    };
  }

  const strength = Math.min(1, Math.max(0, intensity));
  const seed = ((weekIndex * 17 + dayIndex * 31) % 11) / 10;
  const isTide = effect === "tide";
  const isDrift = effect === "drift";
  const duration = isTide ? 3.2 : isDrift ? 3.8 + seed : 2 + seed * 1.4;
  const delay =
    entranceDelay +
    (isTide ? (weekIndex + dayIndex * 1.8) * 0.055 : seed * 0.85);
  const lowOpacity = 1 - (isTide ? 0.24 : isDrift ? 0.16 : 0.34) * strength;
  const smallScale = 1 - (isTide ? 0.07 : isDrift ? 0.04 : 0.08) * strength;

  return {
    animate: {
      opacity: isDrift
        ? [1, lowOpacity, 1 - 0.06 * strength, 1]
        : [1, lowOpacity, 1],
      scale: isDrift
        ? [1, smallScale, 1 + 0.025 * strength, 1]
        : [1, smallScale, 1],
    },
    transition: {
      opacity: {
        duration,
        delay,
        ease: "easeInOut" as const,
        repeat: Infinity,
      },
      scale: { duration, delay, ease: "easeInOut" as const, repeat: Infinity },
    },
  };
}

function LoadingGraph({
  cellSize,
  cellGap,
  cellRadius,
  months,
}: Pick<GithubGraphProps, "cellSize" | "cellGap" | "cellRadius" | "months">) {
  const weekCount = Math.ceil((Math.max(1, months ?? 6) * 31 + 6) / 7);

  return (
    <div
      style={{
        overflowX: "auto",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        padding: "0.5rem 0",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: cellGap,
          minWidth: "max-content",
        }}
        aria-label="Loading contributions"
      >
        {Array.from({ length: weekCount }, (_, week) => (
          <div
            key={week}
            style={{
              display: "grid",
              gridTemplateRows: `repeat(7, ${cellSize}px)`,
              gap: cellGap,
            }}
          >
            {Array.from({ length: 7 }, (_, day) => (
              <span
                key={day}
                style={{
                  display: "block",
                  width: cellSize,
                  height: cellSize,
                  borderRadius: cellRadius,
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  animation: "sigPulse 1.4s ease-in-out infinite alternate",
                  animationDelay: `${(week * 7 + day) * 8}ms`,
                }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function GithubGraph({
  account = "MdSaifAli063",
  months = 6,
  variant = "github",
  animation = "wave",
  animationSpeed = 1,
  cellSize = 14,
  cellGap = 4,
  cellRadius = 3,
  autoFit = false,
  showLegend = true,
  showAccount = false,
  ambientEffect = "twinkle",
  ambientIntensity = 0.65,
  data,
  className,
}: GithubGraphProps) {
  const reducedMotion = useReducedMotion();
  const normalizedAccount = React.useMemo(
    () => normalizeGithubAccount(account),
    [account],
  );
  const [resource, setResource] = React.useState<ResourceState>(
    data ? { status: "ready", contributions: data } : { status: "loading" },
  );
  const [hoveredContribution, setHoveredContribution] = React.useState<{
    contribution: GithubContributionCell;
    left: number;
    top: number;
  } | null>(null);

  const colors = VARIANTS[variant] || VARIANTS.github;
  const resolvedCellRadius = Math.max(
    0,
    Math.min(cellRadius, Math.max(0, cellSize) / 2),
  );

  React.useEffect(() => {
    if (data) {
      setResource({ status: "ready", contributions: data });
      return;
    }

    if (!normalizedAccount) {
      setResource({
        status: "error",
        message: "Enter a valid GitHub username.",
      });
      return;
    }

    const controller = new AbortController();
    setResource({ status: "loading" });

    fetch(`${CONTRIBUTIONS_ENDPOINT}/${normalizedAccount}?y=last`, {
      signal: controller.signal,
    })
      .then(async (response) => {
        if (!response.ok) throw new Error("GitHub account not found.");
        const payload = (await response.json()) as {
          contributions?: GithubContribution[];
        };
        if (!Array.isArray(payload.contributions)) {
          throw new Error("No public contributions were returned.");
        }
        return payload.contributions;
      })
      .then((contributions) => {
        if (!controller.signal.aborted) {
          setResource({ status: "ready", contributions });
        }
      })
      .catch((error: unknown) => {
        if (controller.signal.aborted) return;
        setResource({
          status: "error",
          message:
            error instanceof Error
              ? error.message
              : "Could not load contributions.",
        });
      });

    return () => controller.abort();
  }, [data, normalizedAccount]);

  const weeks = React.useMemo(() => {
    if (resource.status !== "ready") return [];
    return buildContributionWeeks(
      data
        ? resource.contributions
        : selectRecentContributions(resource.contributions, months),
    );
  }, [data, months, resource]);

  const monthLabels = React.useMemo(() => {
    if (weeks.length === 0) return [];
    const labels: { index: number; label: string }[] = [];
    let lastMonth = -1;

    weeks.forEach((week, index) => {
      const firstDay = week[0];
      if (!firstDay) return;
      const date = dateFromISO(firstDay.date);
      if (!date) return;
      const month = date.getUTCMonth();
      if (month !== lastMonth) {
        const name = new Intl.DateTimeFormat("en", { month: "short" }).format(date);
        labels.push({ index, label: name });
        lastMonth = month;
      }
    });

    return labels;
  }, [weeks]);

  const animationKey = `${normalizedAccount ?? account}-${months}-${variant}-${animation}-${cellSize}-${cellGap}-${data ? "custom" : "live"}`;

  const showTooltip = React.useCallback(
    (
      element: HTMLButtonElement,
      contribution: GithubContributionCell,
    ) => {
      const cellRect = element.getBoundingClientRect();
      const left = cellRect.left + cellRect.width / 2;
      const top = cellRect.top - 8;
      setHoveredContribution({
        contribution,
        left,
        top,
      });
    },
    [],
  );

  const renderContribution = (
    contribution: GithubContributionCell,
    columnIndex: number,
    rowIndex: number,
  ) => {
    const label = formatContributionLabel(contribution);
    const entranceDelay = reducedMotion
      ? 0
      : getCellDelay(animation, columnIndex, rowIndex, animationSpeed);
    const ambientMotion = getAmbientCellMotion(
      ambientEffect,
      ambientIntensity,
      columnIndex,
      rowIndex,
      entranceDelay,
      reducedMotion,
    );

    const isLit = contribution.level >= 3;
    const isLevel4 = contribution.level === 4;

    return (
      <motion.button
        key={`${animationKey}-${contribution.date}-${columnIndex}-${rowIndex}`}
        type="button"
        role="gridcell"
        aria-label={label}
        style={{
          display: "block",
          position: "relative",
          width: cellSize,
          height: cellSize,
          borderRadius: resolvedCellRadius,
          padding: 0,
          margin: 0,
          border: "none",
          background: "transparent",
          cursor: "pointer",
          outline: "none",
        }}
        initial={
          reducedMotion || animation === "none"
            ? false
            : { opacity: 0, scale: 0.35, y: 3 }
        }
        animate={{ opacity: 1, scale: 1, y: 0 }}
        whileHover={{ scale: 1.25, zIndex: 10 }}
        transition={{
          opacity: { duration: 0.14, delay: entranceDelay },
          y: {
            type: "spring",
            stiffness: 520,
            damping: 28,
            delay: entranceDelay,
          },
          scale: { type: "spring", stiffness: 900, damping: 32 },
        }}
        onMouseEnter={(event) =>
          showTooltip(event.currentTarget, contribution)
        }
        onFocus={(event) =>
          showTooltip(event.currentTarget, contribution)
        }
        onBlur={() => setHoveredContribution(null)}
      >
        <motion.span
          aria-hidden="true"
          style={{
            display: "block",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: colors[contribution.level] || colors[0],
            borderRadius: resolvedCellRadius,
            border:
              contribution.level === 0
                ? "1px solid rgba(255, 255, 255, 0.05)"
                : "1px solid rgba(57, 211, 83, 0.3)",
            boxShadow:
              isLevel4
                ? "0 0 10px rgba(57, 211, 83, 0.8), inset 0 0 4px rgba(255, 255, 255, 0.45)"
                : isLit
                  ? "0 0 7px rgba(38, 166, 65, 0.6)"
                  : contribution.level > 0
                    ? "0 0 3px rgba(14, 68, 41, 0.4)"
                    : "none",
            transition: "all 0.15s ease",
          }}
          animate={ambientMotion.animate}
          transition={ambientMotion.transition}
        />
      </motion.button>
    );
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        position: "relative",
      }}
      className={className}
      aria-busy={resource.status === "loading"}
    >
      {showAccount && (
        <p
          style={{
            marginBottom: "0.75rem",
            fontSize: "0.95rem",
            fontWeight: 600,
            color: "#ffffff",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            fontFamily: "'Space Grotesk', sans-serif",
          }}
        >
          <span style={{ color: "#39d353" }}>@</span>
          {normalizedAccount ?? account}
        </p>
      )}

      {resource.status === "loading" && (
        <LoadingGraph
          cellSize={cellSize}
          cellGap={cellGap}
          cellRadius={resolvedCellRadius}
          months={months}
        />
      )}

      {resource.status === "error" && (
        <p style={{ fontSize: "0.85rem", color: "#f87171", padding: "1rem" }}>
          {resource.message}
        </p>
      )}

      {resource.status === "ready" && weeks.length > 0 && (
        <div
          style={{
            width: "100%",
            overflowX: "auto",
            overflowY: "hidden",
            padding: "0.5rem 0",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            scrollbarWidth: "thin",
            scrollbarColor: "rgba(57, 211, 83, 0.3) rgba(13, 17, 23, 0.8)",
          }}
          onMouseLeave={() => setHoveredContribution(null)}
        >
          {/* Main graph grid with day labels on the left */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 4,
              minWidth: "max-content",
            }}
          >
            {/* Optional Month labels row */}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: cellGap,
                paddingLeft: 28, // Offset matching day-label column
                height: 16,
                alignItems: "center",
                userSelect: "none",
              }}
              aria-hidden="true"
            >
              {monthLabels.map(({ index, label }) => (
                <span
                  key={`${label}-${index}`}
                  style={{
                    position: "absolute",
                    left: 28 + index * (cellSize + cellGap),
                    fontSize: "9px",
                    fontWeight: 600,
                    color: "#64748b",
                    fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}
                >
                  {label}
                </span>
              ))}
            </div>

            {/* Weeks and days row */}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                gap: cellGap,
              }}
              role="grid"
              aria-label={`GitHub contributions for ${normalizedAccount ?? account}`}
            >
              {/* Day-of-week labels on the left: Mon, Wed, Fri */}
              <div
                style={{
                  display: "grid",
                  gridTemplateRows: `repeat(7, ${cellSize}px)`,
                  gap: cellGap,
                  paddingRight: 6,
                  userSelect: "none",
                }}
                aria-hidden="true"
              >
                {DAY_LABELS.map((label, idx) => (
                  <span
                    key={idx}
                    style={{
                      height: cellSize,
                      lineHeight: `${cellSize}px`,
                      fontSize: "9px",
                      fontWeight: 500,
                      color: "#64748b",
                      fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                      textAlign: "right",
                      display: "block",
                      width: 22,
                    }}
                  >
                    {label}
                  </span>
                ))}
              </div>

              {/* 48 horizontal week columns */}
              {weeks.map((week, weekIndex) => (
                <div
                  key={`${animationKey}-${weekIndex}`}
                  style={{
                    display: "grid",
                    gridTemplateRows: `repeat(7, ${cellSize}px)`,
                    gap: cellGap,
                  }}
                  role="row"
                >
                  {week.map((contribution, dayIndex) =>
                    renderContribution(contribution, weekIndex, dayIndex),
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Floating Tooltip */}
          <AnimatePresence>
            {hoveredContribution && (
              <motion.div
                role="tooltip"
                style={{
                  pointerEvents: "none",
                  position: "fixed",
                  zIndex: 9999,
                  whiteSpace: "nowrap",
                  borderRadius: "8px",
                  background: "rgba(10, 15, 30, 0.96)",
                  border: "1px solid rgba(57, 211, 83, 0.5)",
                  boxShadow:
                    "0 12px 30px rgba(0, 0, 0, 0.85), 0 0 16px rgba(57, 211, 83, 0.3)",
                  backdropFilter: "blur(12px)",
                  padding: "6px 12px",
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "#f8fafc",
                  left: hoveredContribution.left,
                  top: hoveredContribution.top,
                  transform: "translate(-50%, -100%)",
                  fontFamily: "'Inter', sans-serif",
                }}
                initial={{ opacity: 0, scale: 0.9, y: 4 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 2 }}
                transition={{ duration: 0.12 }}
              >
                <span
                  style={{
                    color:
                      hoveredContribution.contribution.level > 0
                        ? "#39d353"
                        : "#64748b",
                    marginRight: 6,
                  }}
                >
                  ●
                </span>
                {formatContributionLabel(hoveredContribution.contribution)}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      {/* Legend */}
      {showLegend && resource.status === "ready" && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: 8,
            marginTop: "1.25rem",
            fontSize: "11px",
            color: "#94a3b8",
            fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
            width: "100%",
            maxWidth: 960,
            paddingRight: "0.5rem",
          }}
          aria-label="Contribution activity legend"
        >
          <span>Less</span>
          <div style={{ display: "flex", gap: 3 }}>
            {colors.map((color, level) => (
              <span
                key={color}
                style={{
                  display: "inline-block",
                  width: cellSize,
                  height: cellSize,
                  backgroundColor: color,
                  borderRadius: resolvedCellRadius,
                  border:
                    level === 0
                      ? "1px solid rgba(255, 255, 255, 0.05)"
                      : "1px solid rgba(57, 211, 83, 0.3)",
                  boxShadow:
                    level >= 3
                      ? "0 0 8px rgba(57, 211, 83, 0.65)"
                      : undefined,
                }}
                aria-label={`Level ${level}`}
              />
            ))}
          </div>
          <span>More</span>
        </div>
      )}
    </div>
  );
}

export default GithubGraph;
