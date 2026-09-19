---
id: "bbs-rules-to-agent-rules"
title: "1994 年我在 BBS 上寫站規，2026 年我在寫 Agent 的規則"
title_en: "Writing BBS Rules in 1994, Writing Agent Rules in 2026"
date: "2026-09-16"
description: "管一個 BBS 站和管一群 Agent，難的是同一件事——不是技術，是「誰可以做什麼、做錯了怎麼辦」。"
description_en: "Managing a BBS station and managing a group of Agents share the exact same difficulty—not the tech, but 'who can do what, and what happens when they cross the line.'"
lang: "bilingual"
---

<p class="zh">1994 年，台南成大。在那個還在用 modem 撥接、telnet 連線的年代，我跟著學長和一群朋友創辦了<a class="org" href="https://www.ccns.io" target="_blank" rel="noopener">成大電腦網路愛好社 CCNS</a>（NCKU Computer Network Club）並擔任創社社長。同時，原本存在於化學系內的「夢之大地 BBS」也移交給了 CCNS 維護，成為社群的 legacy。那時身為創社社長，每天除了研究系統與架站，最重要、也最讓我頭痛的工作之一，就是寫「站規」和管理使用者權限。</p>

<p class="en" lang="en">Tainan, 1994. In an era dominated by dial-up modems and telnet connections, my seniors, peers, and I founded the <a class="org" href="https://www.ccns.io" target="_blank" rel="noopener">NCKU Computer Network Club, CCNS</a>. Around the same time, "DreamLand BBS", which originally sat in the Chemistry Department, was transferred to CCNS for maintenance, becoming our community's legacy. As the founding president, beyond tinkering with systems and setting up servers, one of my most critical and head-scratching tasks was drafting "BBS Station Rules" and managing user permissions.</p>

<p class="zh">那時候的 BBS 站規，背後的核心邏輯其實很簡單，就是「誰可以做什麼，做錯了怎麼辦」。寫 C 語言原始碼架站並不是最難的，難的是人性的邊界。哪些板面只有特定的板主能管？如果普通使用者在發言區越界造謠了，SYSOP（站長）應該直接砍帳號，還是先停權三天？如何寫出一套清晰的「站規」，讓幾千、甚至幾萬個血氣方剛的大學生在虛擬空間裡和諧共處？我們在用文字定義一整個虛擬社群的社會契約。</p>

<p class="en" lang="en">The core logic behind the BBS rules back then was straightforward: "who can do what, and what happens when they cross the line." Writing C code to compile the BBS server wasn't the hardest part; defining human boundaries was. Which boards should be restricted to specific moderators? If a regular user crossed the line in the discussion forums and spread false rumors, should the SYSOP (System Operator) delete their account immediately or suspend them for three days first? How do we write a clear set of "station rules" that allows thousands of energetic college students to coexist peacefully in a virtual space? We were using text to draft a social contract for an entire virtual community.</p>

<p class="zh">快轉 32 年，來到 2026 年的今天。我的日常工作從管理一個實體的社群，變成了在我的個人 AI 系統中管理一群 AI Agents。在 AIPC 與個人化 AI OS 爆發的時代，我們每個人身邊都在跑著各種不同的 Agent：有的負責掃描社群動態、有的負責整理行事曆、有的負責整理對外文章、還有的負責進行決策審查。</p>

<p class="en" lang="en">Fast forward 32 years to 2026. My daily routine has shifted from managing a physical community to managing a team of AI agents inside my personal AI system. In this era of AIPC and personalized AI OS explosion, we are surrounded by diverse agents: some scanning social media, others organizing calendars, compiling external articles, and running decision reviews.</p>

<p class="zh">很有趣的是，在寫這些 Agent 的「System Prompts」和「Guardrails」時，我發現我面臨的挑戰，竟然跟 1994 年在 BBS 寫站規一模一樣。依然不是技術難題，而是「規則與安全邊界」。我們常在寫 Agent 的規則時，一不小心就過於信任它。上週我檢視了我的寫作 Agent 去年幫我起草並發布的 18 篇舊文章，結果令我大吃一驚：那群 Agent 在未經嚴格查證的情況下，居然在我的經歷裡「替我發明了三個從未推出過的產品」！這不就是 BBS 使用者在討論區裡造謠、發布假消息嗎？</p>

<p class="en" lang="en">Interestingly, while writing system prompts and guardrails for these agents, I realized the core challenge is identical to writing BBS rules in 1994. It is still not a technical puzzle, but a question of "rules and safety boundaries." We tend to over-trust agents when defining their behavior. Last week, I reviewed 18 articles drafted and published by my writing agent last year, and the results shocked me: without rigorous validation, the agents had "invented three non-existent products" in my professional history! This is the 2026 equivalent of a BBS user spreading rumors in a forum.</p>

<p class="zh">這逼得我們在系統中加入了一道強硬的「生平事實過濾網（Fact Gate）」。現在，我的 Agent 在生成任何含有第一人稱經歷的句子（例如「我帶領團隊做過...」或「我們在公司推出了...」）之前，必須強制將這句話與我儲存在 Dropbox 中的「身分事實唯一真理源（SSoT Identity Claims）」進行一對一比對。查不到，就直接刪掉，不准發布，也不准改寫成模糊的版本。這不就是當年的 SYSOP 權限，在系統最底層對內容進行真偽把關嗎？</p>

<p class="en" lang="en">This forced us to implement a hard "Identity Claims Fact Gate" in our system. Now, before my agent can output any sentence involving first-person experiences (e.g., "I led a team to..." or "We launched..."), it is forced to cross-reference the claim with my "Single Source of Truth" identity claims file stored in Dropbox. If the claim isn't in the SSoT, the sentence is deleted immediately. It is forbidden from publishing or rewriting it into a vague, misleading claim. This is exactly what the SYSOP permissions did at the system level back in the day—validating and filtering content.</p>

<p class="zh">從 1994 年用 Telnet 管理一個虛擬站點，到 2026 年用 Multi-Agent 架構驅動個人的 AI 系統，技術架構從 C 語言的 BBS 原始碼變成了大語言模型與 Tool-calling API。但其本質從未改變。AI 時代的核心難題，依然是關於社群運作、權限分配、與邊界約束的「政治學」與「管理學」。我們這群當年的 BBS 站長，現在換了個身份，在個人 AI 的世界裡，繼續寫著約束數位生命行為的「新站規」。</p>

<p class="en" lang="en">From managing a virtual BBS in 1994 via Telnet, to driving a personal AI system using a multi-agent architecture in 2026, the technology has evolved from C-based BBS source code to Large Language Models and tool-calling APIs. Yet, the essence remains. The core challenge of the AI era is still "politics and management"—the governance of actions, distribution of permissions, and enforcement of boundaries. We, the BBS operators of the past, have simply assumed a new role: drafting "new station rules" to govern the actions of digital entities in our personal AI worlds.</p>
