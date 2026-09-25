import { QuranVerse } from "@/types/guidance";
import { feelingLostVerses } from "./feeling-lost";
import { sadnessVerses } from "./sadness";
import { anxietyAndWorryVerses } from "./anxiety-and-worry";
import { financialDifficultyVerses } from "./financial-difficulty";
import { lackOfMotivationVerses } from "./lack-of-motivation";
import { needForGuidanceVerses } from "./need-for-guidance";
import { patienceVerses } from "./patience";
import { hopeVerses } from "./hope";
import { peaceAndTranquilityVerses } from "./peace-and-tranquility";
import { hardshipVerses } from "./hardship";

/**
 * Aggregated verified Qur'anic passages across all life topics.
 * Each problem's verses can now be managed independently in its own file.
 */
export const QURAN_VERSES: QuranVerse[] = [
  ...feelingLostVerses,
  ...sadnessVerses,
  ...anxietyAndWorryVerses,
  ...financialDifficultyVerses,
  ...lackOfMotivationVerses,
  ...needForGuidanceVerses,
  ...patienceVerses,
  ...hopeVerses,
  ...peaceAndTranquilityVerses,
  ...hardshipVerses,
];

export {
  feelingLostVerses,
  sadnessVerses,
  anxietyAndWorryVerses,
  financialDifficultyVerses,
  lackOfMotivationVerses,
  needForGuidanceVerses,
  patienceVerses,
  hopeVerses,
  peaceAndTranquilityVerses,
  hardshipVerses,
};
