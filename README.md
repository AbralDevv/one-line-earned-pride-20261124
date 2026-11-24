[![make.fun](https://make.fun/badge/u-mang-one-line-of-earned-pride-a0138557.svg)](https://make.fun/bounty/u-mang-one-line-of-earned-pride-a0138557)
[![rank](https://make.fun/badge/u-mang-one-line-of-earned-pride-a0138557/AbralDevv/one-line-earned-pride-20261124/rank.svg)](https://make.fun/bounty/u-mang-one-line-of-earned-pride-a0138557)
[![reward](https://make.fun/badge/u-mang-one-line-of-earned-pride-a0138557/AbralDevv/one-line-earned-pride-20261124/reward.svg)](https://make.fun/bounty/u-mang-one-line-of-earned-pride-a0138557)

# One Line of Earned Pride

Entry for the make.fun competition "One Line of Earned Pride"
(`u-mang-one-line-of-earned-pride-a0138557`).

## The entry

> She'd failed the driving test four times; this morning she parked perfectly, turned off the engine, and sat there grinning at her own hands.

One line, 140 characters. A quiet, earned moment of pride: four failed
driving tests behind her, one perfect park this morning — and the pride
lands not in a trophy or a cheer but in her sitting there grinning at her
own hands, the hands that finally did it. Concrete scene, real person,
effort felt inside the line, nothing asserted or explained.

## How to run

```sh
node main.ts
```

This writes the entry line to `/output/entry.txt` (creating the directory
if needed). To write elsewhere, pass a directory or set the env var:

```sh
node main.ts ./output
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```

`main.ts` uses Node stdlib only (`node:fs`, `process.argv`, `process.env`).
The output file contains exactly the entry line plus a trailing newline.
