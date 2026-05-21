from __future__ import annotations

import json
from pathlib import Path
from typing import Iterable


REPO_ROOT = Path(__file__).resolve().parent

REQUIRED_FILES = [
    "README.md",
    "CHANGELOG.md",
    "DEPLOYMENT_GUIDE.md",
    "GO_TO_MARKET.md",
    "BRAND_GUIDELINES.md",
    "SECURITY.md",
    ".github/scitor.yaml",
    ".github/workflows/title-only-intake.yml",
    "src/App.tsx",
]

REQUIRED_SCRIPTS = ["dev", "build", "lint", "test"]

REQUIRED_README_PHRASES = [
    "## Features",
    "## Scripts",
    "## Ship-to-market docs",
]


def missing_files() -> list[str]:
    return [path for path in REQUIRED_FILES if not (REPO_ROOT / path).exists()]


def missing_scripts() -> list[str]:
    package_json = json.loads((REPO_ROOT / "package.json").read_text())
    scripts = package_json.get("scripts", {})
    return [script for script in REQUIRED_SCRIPTS if script not in scripts]


def missing_phrases(path: Path, phrases: Iterable[str]) -> list[str]:
    content = path.read_text()
    return [phrase for phrase in phrases if phrase not in content]


def main() -> int:
    failures: list[str] = []

    absent_files = missing_files()
    if absent_files:
        failures.append(f"Missing required files: {', '.join(absent_files)}")

    absent_scripts = missing_scripts()
    if absent_scripts:
        failures.append(f"Missing package scripts: {', '.join(absent_scripts)}")

    readme_missing = missing_phrases(REPO_ROOT / "README.md", REQUIRED_README_PHRASES)
    if readme_missing:
        failures.append(f"README missing expected sections: {', '.join(readme_missing)}")

    if failures:
        print("Validation failed:")
        for failure in failures:
            print(f"- {failure}")
        return 1

    print("Validation passed.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
