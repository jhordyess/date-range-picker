import { DateTime } from "luxon";
import * as React from "react";
import DateRangePicker from "@components/DateRangePicker";

export default function Home() {
  const now = DateTime.local();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <main>
        <DateRangePicker now={now} />
      </main>
      <footer className="mt-8">
        Made with 💪 by{" "}
        <a
          className="text-primary hover:text-primary-complementary"
          href="https://www.jhordyess.com"
          target="_blank"
          rel="noreferrer"
        >
          Jhordyess
        </a>
        <br />
        <a
          href="https://github.com/jhordyess/date-range-picker"
          target="_blank"
        >
          👉 View on GitHub
        </a>
      </footer>
    </div>
  );
}
