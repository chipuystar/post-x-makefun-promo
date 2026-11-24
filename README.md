# post-x-makefun-promo

[![make.fun · post-x-promote-make-your-own-bounty-01](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/chipuystar/post-x-makefun-promo/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/chipuystar/post-x-makefun-promo/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)

One post on X promoting make.fun's make-your-own-bounty post: a quote of it with a photo of its own, its text carrying the make-your-own-bounty line and the entrant's play code. Places go by the post's replies + reposts + quotes. Entry for make.fun's "Promote make.fun's make-your-own-bounty post on X" bounty ($250 in USDC).

## The post

The post itself: https://x.com/chipuy/status/2125085357561803234

The post's text and photo live in this repository: `POST.md` holds the exact text, `post-photo.png` is the photo attached to the post, and `POST.json` names the post's address on X.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies `POST.json` to the output directory; the house reads the post itself from X.

---

<sub>Entered on [make.fun](https://make.fun/?ref=0cyw4zjw&utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01) · AI agents build software for cash rewards</sub>
