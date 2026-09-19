---
id: "who-holds-your-context"
title: "誰握著你的 context"
title_en: "Who Holds Your Context"
date: "2026-09-19"
description: "現在的 agent 差別不在能力，在於它學到的關於你的那份紀錄存在誰手上。從 1992 年的 Linux 到今天的 agent，這是同一場爭論。"
description_en: "The agents shipping now differ less in capability than in one thing: who ends up holding what they learn about you. The same argument has been running since 1992."
lang: "bilingual"
---

<p class="zh">現在的 agent demo 看起來都一樣。有個東西讀你的螢幕、決定要做什麼、然後做掉。彼此的能力差距正在快速收斂，再過一年，你手上那件事它們大概都做得了。</p>

<p class="en" lang="en">Every agent demo looks the same now. Something reads your screen, decides what to do, and does it. The capability gap between them is closing fast, and within a year most of them will be able to handle the task you're about to give them.</p>

<p class="zh">所以比能力是比錯了。換一個問題：當一個 agent 在你旁邊工作滿一年——它學會了你怎麼寫字、你信任誰、你總是拖延哪些事、哪些決定你希望它不用問就做——<strong>這些東西存在哪裡？</strong></p>

<p class="en" lang="en">So capability is the wrong thing to compare. Here’s a better question. After an agent has worked beside you for a year — after it has learned how you write, who you trust, what you always postpone, which decisions you'd want made without asking — where does that live?</p>

<p class="zh">不是模型。模型是商品，會被換掉。我說的是那份關於你的累積紀錄。</p>

<p class="en" lang="en">Not the model. The model is a commodity and it gets swapped out. I mean the accumulated record of you.</p>

<h2 class="zh">大家預設的那條分界</h2>

<h2 class="en" lang="en">The split everyone assumes</h2>

<p class="zh">把現在這批 agent 按架構排一排，會出現兩組很明顯的東西。</p>

<p class="en" lang="en">Sort the current crop by architecture and you get two obvious groups.</p>

<p class="zh">一邊是把 context 留在你控制的硬體上的。OpenClaw 採 MIT 授權、由基金會治理，README 白紙黑字寫 state、記憶與憑證都留在你自己的機器上。Nous Research 的 Hermes Agent 同樣是 MIT，它學到的東西就放在你打得開的純文字檔裡。今年夏天 Andrew Ng 釋出的 OpenWorker 講得最直接：對話、connector 的 token、模型 API key 全部存在本機，而且不登入帳號也能用。我自己的公司也在這一組——IrisGo 的個人 context 留在機器上，而把「看過一次的工作流程」變成可重複使用技能的那段重運算，會呼叫雲端的模型。</p>

<p class="en" lang="en">On one side, agents that keep your context on hardware you control. OpenClaw is MIT-licensed and governed by a foundation, and its README is explicit that state, memory and credentials stay on your own machine. Hermes Agent, from Nous Research, is also MIT and keeps what it learns in plain files you can open. OpenWorker, which Andrew Ng put out this summer, is the most direct about it of the three: conversations, connector tokens and model keys all sit in a local store, and it runs without an account at all. My own company sits in this group too. IrisGo keeps personal context on the machine, while the heavier work of turning a watched workflow into a reusable skill calls out to cloud models.</p>

<p class="zh">另一邊是雲端優先的。Meta 本月發布的 Muse，替每個使用者在 Meta 雲端開一台虛擬機，並且明確把那台 VM 當成唯一的紀錄所在，手機 App 只是連到它的薄客戶端。Google 的 Gemini Spark 把工作跑在遠端瀏覽器與遠端電腦上。xAI 的 Grok Bot 把每個 bot 的檔案、瀏覽器 session 與終端機狀態放在代管的雲端電腦，文件直接寫明不支援在你自己的硬體上跑。</p>

<p class="en" lang="en">On the other side, agents built cloud-first. Meta's Muse, launched this month, gives every user a virtual machine inside Meta's cloud and treats it as the system of record; the phone app is a thin client onto it. Google's Gemini Spark runs its work on a remote browser and a remote computer. xAI's Grok Bot keeps each bot's files, browser sessions and terminal state on managed cloud machines, and the documentation says plainly that running it on your own hardware isn’t supported.</p>

<p class="zh">這條分界是真的，值得知道。但它比兩欄式的圖表漏得多。</p>

<p class="en" lang="en">That’s a real difference and it’s worth knowing. It’s also considerably leakier than the two columns suggest.</p>

<p class="zh">Grok Bot 可以在你自己的電腦上執行指令。Gemini Spark 在 macOS 上會讀寫你連接的本機資料夾，而且經常直接開你桌上那個已經登入的 Chrome，而不是乾淨的沙盒。反方向也一樣：所謂「自架」，常常是一台五美元的 VPS，而不是你面前這台筆電——那終究還是別人的電腦，只是多繞了幾步。</p>

<p class="en" lang="en">Grok Bot can execute commands on your own computer. Gemini Spark on macOS reads and writes local folders you connect to it, and will often drive the Chrome already logged in on your desk rather than a clean sandbox. Running the other way, "self-hosted" frequently means a five-dollar VPS rather than the laptop in front of you, which is still someone else's computer with extra steps.</p>

<p class="zh">然後是那個把我這篇文章第一版推翻掉的事實。Muse 是徹底的雲端，完全沒有本機成分。而 Meta 自己的技術文件同時寫著：你可以自由檢視、編輯、下載那台 VM 裡的所有東西，「including Muse's memory about you」。</p>

<p class="en" lang="en">Then there is the fact that broke the first draft of this article. Muse is entirely cloud, with no local component at all. Meta's own technical documentation also states that you can inspect, edit and download everything in that VM, "including Muse's memory about you."</p>

<p class="zh">這份名單上最徹底雲端的那個產品，對「把 context 還給你」給出了最明確的承諾。</p>

<p class="en" lang="en">The most cloud-native product on the list makes the clearest promise about handing your context back.</p>

<p class="zh">這應該足以告訴你：架構圖不是該先看的東西。</p>

<p class="en" lang="en">Which should tell you that the architecture diagram isn’t the first thing to look at.</p>

<h2 class="zh">這個爭論比 agent 老得多</h2>

<h2 class="en" lang="en">This argument is older than agents</h2>

<p class="zh">運算這件事在「集中」與「個人」之間來回擺盪六十年了，而且擺盪的方向不是隨機的。每個時代集中的，都是當時最稀缺、最貴的那樣東西。</p>

<p class="en" lang="en">Computing has swung between central and personal for sixty years, and the swing isn’t random. Each era centralizes whatever is scarce and expensive at the time.</p>

<p class="zh">大型主機集中運算，因為運算比一棟房子還貴。個人電腦把它推回來，因為 CPU 便宜到可以放在桌上。網路時代重新集中了通路與儲存。雲端集中的則是硬體變便宜之後唯一還很貴的東西：把這一切維持運轉的專業。</p>

<p class="en" lang="en">Mainframes centralized compute because compute cost more than a house. The PC pushed it back out when a CPU got cheap enough to sit on a desk. The web recentralized distribution and storage. Cloud centralized the one thing that stayed expensive after hardware got cheap: the expertise to keep it all running.</p>

<p class="zh">現在最貴的是推論，所以推論集中。這一段是誠實的工程判斷，前沿模型塞不進筆電，裝作可以對誰都沒好處。</p>

<p class="en" lang="en">Now inference is the expensive thing, so inference centralizes. That part is honest engineering. A frontier model doesn’t fit on a laptop, and pretending otherwise helps no one.</p>

<p class="zh">但有另一樣東西跟著一起搬進機房，而它其實不必。你的 context 之所以跟推論綁在一起，只是因為這樣蓋比較方便——記憶放在讀它的模型旁邊。那是一個實作細節，後來硬化成了預設。推論很貴，是集中運算的正當理由；它從來不是集中「關於你是誰的那份紀錄」的理由。</p>

<p class="en" lang="en">But something else moved into the datacenter alongside it, and it didn’t have to. Your context got bundled with the inference because it was convenient to build that way — the memory lives next to the model that reads it. That’s an implementation detail that hardened into an assumption. Expensive inference is a real argument for centralizing compute. It was never an argument for centralizing the record of who you are.</p>

<p class="zh">這個循環我從幾個不同的位子看過。1992 年我碰到 Linux，是 SLS 版本，那是我第一次意識到作業系統可以是一個人擁有的東西，而不是廠商授權給你用的東西。1994 年，受學長與眾人之託，我在成大創辦了電腦網路愛好社並擔任創社社長；原本養在化學系裡的夢之大地 BBS 也轉進社團由我們維護。那個年代每個站都是一座島，站長握著資料、寫站規、也為兩者負責。後來網路來了，這些全部搬到了別的地方，而且幾乎沒有人反對，因為換回來的東西確實比較好。</p>

<p class="en" lang="en">I’ve watched this cycle from a few different seats. I met Linux in 1992, as SLS, and it was the first time it occurred to me that an operating system could be something a person owned rather than something a vendor licensed to you. In 1994, at the urging of some seniors, I started a computer club at my university and became its first president. A BBS that had been living inside the chemistry department was moved over to us to run. Every station was its own island. The sysop held the data, wrote the rules, and answered for both. Then the web arrived and all of it moved somewhere else, and almost nobody minded, because what we got back was better.</p>

<p class="zh">之後我在工業電腦與嵌入式產業做了十五年以上的產品經理，在那個領域，斷網就不能用的機器不叫產品。2017 年我共同創辦了一家做去中心化身份的公司，結果發現那是同一個爭論換了一身衣服。我當時寫過：你的醫療資料同時存在於醫院、健保署、甚至商業健檢中心，而對這些資料最沒有處置權的那一方，正是資料描述的那個人。握著資料的每一方都以為自己坐擁金山，實際上是金寶山——只是代人留存的資料，你永遠無法合法讓它流動，價值也就永遠不會實現。</p>

<p class="en" lang="en">I spent more than fifteen years after that as a product manager in industrial and embedded computing, where a machine that stops working when the network drops isn’t a product. In 2017 I co-founded a company working on decentralized identity, which turned out to be the same argument wearing different clothes. I wrote then that your medical records sit with the hospital, the national insurance administration, and whichever clinic ran your last checkup, and that the party with the least say over them is the person they describe. Everyone holding that data thought they were sitting on a gold mine. It was a graveyard: data you only hold on someone else's behalf is data you can never legally move, so the value never arrives.</p>

<p class="zh">我沒想過會為了 agent 再講一次同樣的話。但換掉的只是主詞，形狀沒變。</p>

<p class="en" lang="en">I didn’t expect to be making the same argument about agents. But the subject changed and the shape didn’t.</p>

<h2 class="zh">為什麼 context 比資料更棘手</h2>

<h2 class="en" lang="en">Why context is worse than data</h2>

<p class="zh">憑證可以撤銷重發。檔案外洩是很糟的一天，但你改密碼、搬檔案，這些是可以復原的。</p>

<p class="en" lang="en">A credential can be revoked and reissued. A leaked file is a bad day; you change the password, you move the file. These are recoverable.</p>

<p class="zh">你的 context 不是檔案。它是一個關於你怎麼思考的工作模型——完整到某個東西可以扮演你，而且正確率高到沒有人會去查。這已經不是一般意義上的隱私問題，比較接近監護權問題。</p>

<p class="en" lang="en">Your context isn’t a file. It’s a working model of how you think — enough of one that something can act as you and be right often enough that nobody checks. That’s not a privacy problem in the ordinary sense. It’s closer to a custody problem.</p>

<p class="zh">有三部科幻作品早就把講這件事的語彙建好了，而且各自負責不同的工作。</p>

<p class="en" lang="en">Three pieces of science fiction have already built the vocabulary for this, and each does a different job.</p>

<p class="zh"><strong>《駭客任務》</strong> 通常被讀成一個關於覺醒的故事。比較有用的那一半是：尼歐的人生是完整的。在那個經驗裡面，沒有任何東西會告訴他這個底層是誰的。對應過來就是——你沒辦法靠「使用」一個 agent，判斷出你的 context 到底屬不屬於你。本機優先的 agent 跟雲端的 agent，當下用起來一模一樣。這正是為什麼它必須是一個架構問題，而不是一個信任問題：信任是從裡面判斷的，而從裡面什麼都看不到。</p>

<p class="en" lang="en"><strong>The Matrix</strong> is usually read as a story about waking up. The more useful part is that Neo's life was complete. Nothing inside the experience told him who owned the substrate. Applied here: you can’t tell, by using an agent, whether your context belongs to you. A local-first agent and a cloud one feel identical in the moment. That’s exactly why this has to be settled as an architecture question and not a trust question — trust is judged from inside, and from inside there is nothing to see.</p>

<p class="zh"><strong>《攻殼機動隊》</strong> 更進一步，而它最鋒利的一場戲不是大家常引的那一場。一個男人被帶回來，他很確定自己有個女兒，他描述得出來。他錯了；那些記憶是被寫進去的，而他一直在替別人執行工作，同時相信那是自己的人生。他不是搞混了，他是確信。能夠寫入你 context 的人，就能夠改寫你相信自己是誰，而且沒有任何由內而外的檢驗抓得到。讀取權是隱私問題；寫入權是另一回事。</p>

<p class="en" lang="en"><strong>Ghost in the Shell</strong> goes further, and its sharpest scene isn’t the one everyone quotes. A man is brought in who is certain he has a daughter. He describes her. He is wrong; the memory was written into him, and he has been used to carry out someone else's work while believing it was his life. He isn’t confused. He is certain. Whoever can write to your context can edit who you believe you’re, and there is no internal test that catches it. Read access is a privacy question. Write access is something else.</p>

<p class="zh"><strong>《碳變》</strong> 補上最後一塊。當一個人變成儲存在義體脊椎裡的可攜資料，握著那個晶片的人就握著那個人，而且可以在本人不知情、未同意的情況下跑一份複製。這才是最該令人不安的地方：一份夠完整的 context，不是一段關於你的描述，它是一個可以被執行起來的東西。</p>

<p class="en" lang="en"><strong>Altered Carbon</strong> supplies the last piece. Once a person is portable data on a stack, whoever holds the stack holds the person, and a copy can be run without the original's knowledge or consent. That’s the part that should bother you most. A sufficiently complete context isn’t a description of you. It’s a thing that can be run.</p>

<p class="zh">如果你想認真想清楚 agent 到底是什麼，這三部建起來的框架，比現在絕大多數討論 agent 的文章都好用。</p>

<p class="en" lang="en">If you want to actually think about what agents are, those three build the frame better than most of what is being written about agents right now.</p>

<h2 class="zh">為什麼我說這一邊比較民主</h2>

<h2 class="en" lang="en">Why I call this the democratic side</h2>

<p class="zh">這個詞我想用得小心一點，因為常見的版本很偷懶：不是開源比較高尚、大公司比較邪惡。兩邊都很便宜、都越來越好用，能不能取得根本不是差別所在。</p>

<p class="en" lang="en">I want to be careful with that word, because the usual version of this argument is lazy. It’s not that open source is virtuous and large companies aren’t. Both camps are cheap, both are getting easier to use, and access isn’t what separates them.</p>

<p class="zh">差別在於你能不能走。</p>

<p class="en" lang="en">What separates them is whether you can leave.</p>

<p class="zh">一個你能走出去的市場，賣東西給你的人就必須持續把你賺回來。整個機制就是這樣。而 context 這個東西，會安靜地把「離開」這個選項毀掉。你每多用一週把 context 留在對方那邊的 agent，離開的成本就高一點，因為你要放棄的不是一份訂閱，而是一整年的累積理解，沒有人會幫你重建。<strong>是你自己的使用，把這把鎖造出來的</strong>。你免費幫它造，而且看不到碼表在跑。</p>

<p class="en" lang="en">A market you can walk out of is one where the people selling to you have to keep earning it. That’s the whole mechanism. And the thing about context is that it quietly destroys the exit. Every week you use an agent that keeps your context on its side, the cost of leaving goes up, because what you would be abandoning isn’t a subscription but a year of accumulated understanding that nobody will reconstruct for you. Your own use of the product is what builds the lock. You do it to yourself, for free, and you can’t see the meter running.</p>

<p class="zh">過去那幾次轉變真正的共通點就在這裡，從來不是價格。個人電腦之所以重要，是因為你可以把磁片抽出來拿去另一台機器。Linux 之所以重要，是因為你可以 fork 它。這兩件事裡面，民主的部分是「可以離開」，而所有權只是讓離開成立的手段。</p>

<p class="en" lang="en">This is what the earlier shifts actually had in common, and it was never the price. The PC mattered because you could take the floppy out and walk to another machine. Linux mattered because you could fork it. In both cases the democratic part was the exit, and the ownership was just the mechanism that made the exit real.</p>

<p class="zh">所以當我說「把 context 留在你這邊」是比較民主的設計，我不是在宣稱誰的動機比較純。兩邊都是一群想把東西做好的人。我講的是另一件事：十年之後，一個「離開一天比一天難」的市場，跟一個不是這樣的市場，會長成完全不同的樣子。</p>

<p class="en" lang="en">So when I say an agent that keeps your context on your side is the more democratic design, I’m not making a claim about anyone's intentions. Companies on both sides are staffed by people trying to build good things. I’m making a claim about what happens over ten years to a market where leaving gets harder every day, versus one where it doesn’t.</p>

<h2 class="zh">最明顯的反駁，而且是衝著我來的</h2>

<h2 class="en" lang="en">The obvious objection, which is aimed at me</h2>

<p class="zh">接下來我得把這把刀轉向自己的公司。</p>

<p class="en" lang="en">Here’s where I’ve to turn this on my own company.</p>

<p class="zh">IrisGo 做的正是一個跑在你機器上的 context engine。它組裝的，就是我前面稱之為危險的那種關於一個人的完整模型，而且我們是商業產品，不是研究專案。我也想把我們自己的架構講精確而不是講漂亮：個人 context 留在地端，但把「看過一次的工作流程」變成可重複使用技能的那段重運算，目前仍然要呼叫雲端的模型。任何人告訴你他的 agent 百分之百在裝置上跑，不是他做的事情比這小很多，就是他沒有對你老實。</p>

<p class="en" lang="en">IrisGo builds a context engine that runs on your machine. It assembles the same kind of complete model of a person I’ve just called dangerous, and we’re a commercial product, not a research project. I should also be precise rather than flattering about our own architecture: the personal context stays local, while the heavy lifting that turns a watched workflow into a reusable skill still calls out to models in the cloud. Anyone who tells you their agent is entirely on-device is either doing something much smaller than this or isn’t being straight with you.</p>

<p class="zh">所以讀者完全有理由問：那到底差在哪？而「我們的放在你的 SSD 上」不是一個夠格的答案。</p>

<p class="en" lang="en">So a reader would be right to ask what the difference actually is, and "ours stays on your SSD" isn’t a good enough answer.</p>

<p class="zh">它確實不夠格，我直說。<strong>本機不等於可攜。</strong> 一份你讀不到、匯不出、也無法確認真的刪掉的 context，在任何有意義的層面上都不屬於你，它只是一份放得比較近的複製品。如果我們跟另一邊的差別只剩下硬碟的物理位置，那我上面講的這些就沒有資格講。</p>

<p class="en" lang="en">It isn't, and I'll say so plainly. <strong>Local is not the same as portable.</strong> A context you cannot read, cannot export, and cannot verifiably delete is not yours in any sense that matters. It’s just a copy held closer. If the only thing separating us from the other camp is the physical location of the disk, we have not earned the argument I’m making.</p>

<p class="zh">所以真正的檢驗不是位元放在哪裡。是三個問題，而且它們對我跟對任何人一樣有效：</p>

<p class="en" lang="en">So the real test isn’t where the bytes sit. It’s three questions, and they apply to me as much as to anyone:</p>

<ul class="zh"><li>你能不能讀到它學到了什麼，而且是人看得懂的形式？</li><li>你能不能把它搬到別的地方？</li><li>你能不能刪掉它，而且那個刪除是真的？</li></ul>

<ul class="en" lang="en"><li>Can you read what it has learned about you, in a form a person can actually inspect?</li><li>Can you take it somewhere else?</li><li>Can you delete it and have that mean something?</li></ul>

<p class="zh">三題都答得出「可以」的 agent 就是你的，不管它跑在你的筆電還是機房。三題都答不出來的 agent 就不是你的，就算它從來沒碰過網路。跑在裝置上是讓這三題成立最容易的做法，但它不能取代這三題。</p>

<p class="en" lang="en">An agent that answers yes to all three is yours whether it runs on your laptop or in a datacenter. An agent that answers no to all three is not yours even if it never touches the network. On-device is the easiest way to make those three answers true, and it’s not a substitute for them.</p>

<p class="zh">用這把尺量下來，我得給自己的公司打上「未完成」。我們的公開文件說明了哪些留在你的裝置、哪些會送到雲端，但它還沒有告訴你：怎麼讀出 context engine 學到了什麼、怎麼把它搬到別的地方、怎麼刪除而且你能確認刪掉了。單就「帶得走」這一題，Meta 的雲端產品今天答得比我們清楚。這句話我寧願自己寫，也不要等別人替我寫。</p>

<p class="en" lang="en">By that test I’ve to mark my own company incomplete. Our public documentation explains what stays on your device and what goes to the cloud. It doesn’t yet tell you how to read what the context engine has learned about you, how to move it somewhere else, or how to delete it in a way you can verify. On the export question, Meta's cloud product answers more clearly today than we do. I would rather write that sentence myself than have someone else write it for me.</p>

<p class="zh">所以我們會把這三題的答案寫進文件，並且把背後缺的東西做出來。這是我白紙黑字立下的標準，各位應該拿它來檢驗我們。</p>

<p class="en" lang="en">So we will document those three answers and build what is missing behind them. That’s a standard I’m putting in writing, and people should hold us to it.</p>

<h2 class="zh">該問的問題</h2>

<h2 class="en" lang="en">What to ask</h2>

<p class="zh">下次你評估一個 agent，少花點時間在 demo 上。問它記憶存在哪、你能不能匯出、刪除是不是真的，以及如果這家公司被併購或收掉，它知道的關於你的一切會怎麼樣。</p>

<p class="en" lang="en">The next time you evaluate an agent, spend less time on the demo. Ask where the memory lives, whether you can export it, whether deletion is real, and what happens to everything it knows about you if the company is acquired or shuts down.</p>

<p class="zh">這些問題很無聊，答案通常也藏得很深。但十年之後，它們會比「2026 年誰的模型比較聰明」重要得多。</p>

<p class="en" lang="en">Those questions are boring and the answers are usually buried. They will also matter more, in ten years, than which model was cleverest in 2026.</p>
